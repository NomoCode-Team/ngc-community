function createNewUnnamedEntity(o) {

    //!!c - make sure the inputed value matches the component expected typeof

    const b = checkIfProposedEntityComponentsAreValid(o)

    if (b) {
        ECS.E[G.entityUniqueIdCounter] = o
        G.entityUniqueIdCounter++
        addEmptyObjectsOfAllComponentTypes(s)
        logSuccess(`created new unnamed entity ${JSON.stringify(o, null, 4)}`)
    }

}


function createNewNamedEntity(s) {

    let b = true

    if (checkIfKeyInObject(s, ECS.E)) {b = false; logError(`'${s}' entity already exists`)} 

    if (b) {
        ECS.E[s] = {}
        addEmptyObjectsOfAllComponentTypes(s)
        logSuccess(`created new named entity ${s}`)
    }

}


function createNewNamedEntityWithValues(s, o) {

    //!!c - make sure both args aren't empty

    let b = true

    if (checkIfKeyInObject(s, ECS.E)) {b = false; logError(`'${s}' entity already exists`)} 
    if (b) {
        b = checkIfProposedEntityComponentsAreValid(o)
    }

    if (b) {
        ECS.E[s] = o
        addEmptyObjectsOfAllComponentTypes(s)
        logSuccess(`created new named entity ${s} = ${JSON.stringify(o, null, 4)}`)
    }

}


function addEmptyObjectsOfAllComponentTypes(s) {
    for (const [k, v] of Object.entries(G.componentDataTypes)) {
        if (checkIfKeyNotInObject(k, ECS.E[s])) {
            switch (v) {
                case 'array': 
                    ECS.E[s][k] = []
                    break
                case 'object': 
                    ECS.E[s][k] = {}
                    break
                default:
                    logError(`unexpected type ${k, v}`)
            }
        }
    }    
}


function checkIfProposedEntityComponentsAreValid(o) {
    b = true
    for (const [k, v] of Object.entries(o)) {
        switch (k) {
            case 'flag': 
                v.forEach(e => {
                    if (checkIfKeyNotInObject(e, ECS.C)) {b = false; logError(`key '${e}' is not in components`)}
                })
                break
            case 'array':
            case 'number':
            case 'string':
                for (const [key, value] of Object.entries(v)) {
                    if (checkIfKeyNotInObject(key, ECS.C)) {b = false; logError(`key '${key}' is not in components`)}
                }
                break
            default:
                logError(`unrecognized key ${k}`)
        }
    }
    return b
}


function deleteNamedEntity(s) {

    let b = true

    if (checkIfKeyNotInObject(s, ECS.E)) {b = false; logError(`entity with name '${s}' does not exist`)} 

    if (b) {
        delete ECS.E[s]
        logSuccess(`deleted entity '${s}'`)
    }

}