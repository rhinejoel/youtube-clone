// ASYNC AWAIT
let queryFunction = function (query:string) {
    return new Promise((resolve, reject) => {
        console.log(`Making query to ${query}`)
        if (query === "Google") {
            resolve("Connected to Google successfully");
        } else {
            reject("Cannot Query to anything other than Google");
        }
    });
};

let processFunction = function (response:string) {
    return new Promise((resolve, reject) => {
        console.log("Processing Query")
        resolve(`Here is some extra information ${response}`)
    })
}

// queryFunction("Facebook").then((response) => {
//     console.log(`${response}`)
//     return processFunction('Processed Query Successfully')
// }).then(response => {
//     console.log(`${response}`)
// }).catch(reject_message => {
//     console.log(`${reject_message}`)
// })

async function doWork() {
    try {
        const response = await queryFunction("Facebook")    // response stores the return of resolve() in queryFunction
        console.log(`${response}`)
        const processedResponse = await processFunction("Processed Query Successfully")     // processedResponse stores the return of resolve() in queryFunction()
        console.log(`${processedResponse}`)
    } catch(err) {
        console.log(`${err}`)
    }
}

doWork()