function keys(obj){
    let ans=[]

    for(feature in obj){
        ans.push(feature)
    }

    return ans
}

module.exports=keys