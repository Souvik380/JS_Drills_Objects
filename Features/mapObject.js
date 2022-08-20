function mapObject(obj, cb) {
    for(feature in obj){
        obj[feature]=cb(obj[feature])
    }

    return obj
}

module.exports=mapObject