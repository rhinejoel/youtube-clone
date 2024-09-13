import express from "express";
import ffmpeg from "fluent-ffmpeg";

const app = express();
app.use(express.json());

const pathToFfmpeg = require("ffmpeg-static");

ffmpeg.setFfmpegPath(pathToFfmpeg);

app.post("/process-video", (req, res) => {
    // Get path of the input file from the request body
    const inputFilePath = req.body.inputFilePath
    const outputFilePath = req.body.outputFilePath

    // Error Handling
    if (!inputFilePath || !outputFilePath) {
        res.status(400).send("Bad Request: Missing File Path")
    }

    ffmpeg(inputFilePath)
        .outputOptions("-vf", "scale=-1:360") // 360p Conversion
        .on("end", () => {
            res.status(200).send("Processing Finished Successfully")
        }) 
        .on("error", (err) => {
            console.log(`An error occurred: ${err.message}`)
            res.status(500).send(`Internal Server Error: ${err.message}`)
        })
        .save(outputFilePath);
});

const port = process.env.PORT || 3000 //Best practice to use ENV variables. Checks if exists else uses 3000
app.listen(port, () => {
    console.log(`Video Processing Service Listening at http://localhost:${port}`);
});