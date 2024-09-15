let p = new Promise ((resolve, reject) => {
    const a = 1 + 1;
    if(a == 2) {
        resolve(square(a));
    } else {
        reject(linestring());
    }
})

// FUNCTION CALLED WHEN PROMISE IS RESOLVED
function square(val:any) {
    return val*val; // sent to .then()
};

// FUNCTION CALLED WHEN PROMISE IS REJECTED
function linestring() {
    return 'Failed'; // sent to .catch()
};

// Promise.then() ACCEPTS RETURN OF RESOLVED FUNCTION
p.then((resolved) => {
    console.log(`The promise was resolved and the square of a is ${resolved}`)
}).catch((rejected) => {
    console.log(`The Promise was rejected and the linestring has ${rejected}`)
});

// DEFINING NEW PROMISE
let q = new Promise ((resolve, reject) => {
    resolve('Promise 2 resolved')
})

// DEFINING NEW PROMISE
let r = new Promise ((resolve, reject) => {
    resolve('Promise 3 resolved')
})

// RUNNING ALL PROMISES ASYNCHRONOUSLY
Promise.all([
    p, q, r
]).then((messages) => {
    console.log(messages)
}).catch((messages) => {})

// ONLY SHOW OUTPUT OF FASTEST PROMISE EXECUTION
Promise.race([
    p, q, r
]).then((message) => {
    console.log(message)
}).catch((messages) => {})

