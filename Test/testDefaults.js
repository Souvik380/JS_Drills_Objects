let defaults=require("../Features/Defaults")

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const defaultProps={
    'comics':'DC'
}


let ans=defaults(testObject,defaultProps)
console.log(ans)