function invert(obj){
    let ans={}

    for(feature in obj){
        ans[obj[feature]]=feature
    }

    return ans
}

module.exports=invert