function values(obj){
    let ans=[]

    for(feature in obj){
        ans.push(obj[feature])
    }

    return ans
}

module.exports=values