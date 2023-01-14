function createNewFlagComponentInNamedEntity(s_flagName, s_entityName) {

    let b = true

    if (checkIfKeyInObject(s_flagName, ECS.E)) {b = false; logError(`entity with name '${s_flagName}' already exists`)}
    if (checkIfKeyNotInObject(s_flagName, ECS.C)) {b = false; logError(`component '${s_flagName}' doesn't exist`)}

    if (b) {
        ECS.E[s_entityName]['flag'].push(s_flagName)
        logSuccess(`created new flag component '${s_flagName}'`)
    }

}


function createNewNumberComponentWithValueInNamedEntity(s_key, n_value, s_entityName) {

    let b = true

    if (checkIfKeyInObject(s_key, ECS.E)) {b = false; logError(`entity with name '${s_key}' already exists`)} 
    if (typeof n_value !== 'number') {b = false; logError(`expected type number for ${n_value}`)}
    if (checkIfKeyNotInObject(s_key, ECS.C)) {b = false; logError(`component '${s_key}' doesn't exist`)}

    if (b) {
        const o = {s_key: n_value}
        ECS.E[s_entityName]['number'][s_key] = n_value
        logSuccess(`created new number component '${s_key}' with value ${n_value}`)
    }

}


function createNewStringComponentWithValueInNamedEntity(s_key, s_value, s_entityName) {

    let b = true

    if (checkIfKeyInObject(s_key, ECS.E)) {b = false; logError(`entity with name '${s_key}' already exists`)} 
    if (typeof s_value !== 'string') {b = false; logError(`expected type string for ${s_value}`)}
    if (checkIfKeyNotInObject(s_key, ECS.C)) {b = false; logError(`component '${s_key}' doesn't exist`)}

    if (b) {
        const o = {s_key: s_value}
        ECS.E[s_entityName]['string'][s_key] = s_value
        logSuccess(`created new string component '${s_key}' with value ${s_value}`)
    }

}


function createNewArrayComponenWithValuetInNamedEntity(s_key, a_values, s_entityName) {

    let b = true

    if (checkIfKeyInObject(s_key, ECS.E)) {b = false; logError(`entity with name '${s_key}' already exists`)} 
    if (typeof a_values !== 'object') {b = false; logError(`expected type array for ${a_values}`)}

    if (b) {
        const o = {s_key: a_values}
        ECS.E[s_entityName]['array'][s_key] = a_values
        logSuccess(`created new array component '${s_key}' with value ${a_values}`)
    }

}


function createNewBoolComponenWithValuetInNamedEntity(s_key, b_value, s_entityName) {

    let b = true

    if (checkIfKeyInObject(s_key, ECS.E)) {b = false; logError(`entity with name '${s_key}' already exists`)} 
    if (typeof b_value !== 'boolean') {b = false; logError(`expected type boolean for ${b_value}`)}

    if (b) {
        const o = {s_key: b_value}
        ECS.E[s_entityName]['bool'][s_key] = b_value
        logSuccess(`created new boolean component '${s_key}' with value ${b_value}`)
    }

}