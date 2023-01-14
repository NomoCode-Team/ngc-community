function registerNewComponent(s_name, s_type) {

    let b = true

    if (checkIfKeyInObject(s_name, ECS.C)) {b = false; logError(`'${s_name}' Component already exists`)} 
    if (checkIfKeyNotInObject(s_type, G.componentDataTypes)) {b = false; logError(`type '${s_type}' is not in expected component data types`)}

    if (b) {
        ECS.C[s_name] = s_type
        logSuccess(`created new component '${s_name}' with type '${s_type}'`)
    }

}

function registerNewECSComponentsByMultiArray(ma) {
    //!! c - check to make sure array input format is valid
    ma.forEach(a => {
        registerNewComponent(a[0], a[1])
    })
}

//!! - allow repeats in array component? (ie [a,a,a]) -- part of component settings
//!! - make this 2 specific types of arrays?? ^ (ie list vs array)