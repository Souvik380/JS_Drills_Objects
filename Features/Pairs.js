function pairs(obj) {
   let ans=[]
   for(feature in obj){
        let temp=[]
        temp.push(feature)
        temp.push(obj[feature])
        ans.push(temp)
   }

   return ans
}

module.exports=pairs