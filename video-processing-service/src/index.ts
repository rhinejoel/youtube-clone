import express from "express";
import { convertVideo, deleteProcessedVideo, deleteRawVideo, downloadRawVideo, setupDirectories, uploadProcessedVideo } from "./storage";

setupDirectories();

const app = express();
app.use(express.json());

// const pathToFfmpeg = require("ffmpeg-static");
// ffmpeg.setFfmpegPath(pathToFfmpeg);

app.post("/process-video", async (req, res) => {
    // GET bucket AND fileName FROM THE CLOUD PUB/SUB MESSAGE (MESSAGE QUEUE)
    let data;
    try {
        const message = Buffer.from(req.body.message.data, 'base64').toString('utf-8');
        data = JSON.parse(message);
        if (!data.name) {
            throw new Error('Inavalid message payload received.');
        }
    } catch (error) {
        console.error(error);
        return res.status(400).send('Bad Requesr: missing filename.');
    }

    const inputFileName = data.name;
    const outputFileName = `processed-${inputFileName}`;

    // DOWNLOAD THE RAW VIDEO FROM CLOUD STORAGE
    await downloadRawVideo(inputFileName);

    // CONVERT THE VIDEO TO 360P
    try {
        convertVideo(inputFileName, outputFileName);
    } catch (err) { 
        // parallel await
        await Promise.all([   
            deleteRawVideo(inputFileName),
            deleteProcessedVideo(outputFileName)
        ]);
        // series await
        // await deleteRawVideo(inputFileName);
        // await deleteProcessedVideo(outputFileName);
        
        console.error(err)
        return res.status(500).send('Internal Server Error: Video Processing Failed');
    }

    // UPLOAD THE PROCESSED VIDEO TO CLOUD STORAGE
    await uploadProcessedVideo(outputFileName);
    await Promise.all([   
        deleteRawVideo(inputFileName),
        deleteProcessedVideo(outputFileName)
    ]);

    return res.status(200).send('Processing Finished Successfully');
});

const port = process.env.PORT || 3000 //Best practice to use ENV variables. Checks if exists else uses 3000
app.listen(port, () => {
    console.log(`Video Processing Service Listening at http://localhost:${port}`);
});