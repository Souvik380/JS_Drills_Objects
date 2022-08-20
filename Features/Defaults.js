function defaults(obj, defaultProps) {

    for(feature in defaultProps){
        if(!obj[feature]){
            obj[feature]=defaultProps[feature]
            break
        }
    }
    return obj
}

module.exports=defaults