let mapObject=require("../Features/mapObject")
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

function cb(x){
    return x+"ABC"
}

let obj=mapObject(testObject,cb)
console.log(obj)

