const mainFunction = function (a:number, b:number, callback:(value:number)=>void):void {
    const product:number = a * b;
    callback(product)
}

const otherFunction = (val:number) => console.log(`The product the two values is ${val}`)

mainFunction(5, 6, otherFunction)

// GENERICS FUNCTION

function genericFunction <ElementType>(a:ElementType):ElementType{
    return a
}

const number_ = genericFunction(7)
const string_ = genericFunction("String")

// const genericFunction = function <Fetch Element Type>(a:Assign Element Type):Return Element Type{
//     return a
// }
