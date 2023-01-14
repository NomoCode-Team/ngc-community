function changeNumberComponentValueInNamedEntity(s_name, n_value, s_entity) {

    let b = true

    if (checkIfKeyNotInObject(s_entity, ECS.E)) {b = false; logError(`entity with name '${s_key}' does not exist`)} 
    if (checkIfKeyNotInObject(s_name, ECS.E[s_entity]['number'])) {b = false; logError(`number component '${s_name}' does not exist in entity '${s_entity}'`)} 
    if (typeof n_value !== 'number') {b = false; logError(`expected type number for ${n_value}`)}

    if (b) {
        const old_value = ECS.E[s_entity]['number'][s_name]
        ECS.E[s_entity]['number'][s_name] = n_value
        logSuccess(`changed number component '${s_name}' value from '${old_value}' to '${n_value}'`)
    }
    
}


function changeStringComponentValueInNamedEntity(s_name, s_value, s_entity) {

    let b = true

    if (checkIfKeyNotInObject(s_entity, ECS.E)) {b = false; logError(`entity with name '${s_key}' does not exist`)} 
    if (checkIfKeyNotInObject(s_name, ECS.E[s_entity]['string'])) {b = false; logError(`string component '${s_name}' does not exist in entity '${s_entity}'`)} 
    if (typeof s_value !== 'string') {b = false; logError(`expected type string for ${s_value}`)}

    if (b) {
        const old_value = ECS.E[s_entity]['string'][s_name]
        ECS.E[s_entity]['string'][s_name] = s_value
        logSuccess(`changed string component '${s_name}' value from '${old_value}' to '${s_value}'`)
    }
    
}

function changeArrayComponentValueInNamedEntity(s_name, a_values, s_entity) {

    let b = true

    if (checkIfKeyNotInObject(s_entity, ECS.E)) {b = false; logError(`entity with name '${s_key}' does not exist`)} 
    if (checkIfKeyNotInObject(s_name, ECS.E[s_entity]['array'])) {b = false; logError(`array component '${s_name}' does not exist in entity '${s_entity}'`)} 
    if (typeof a_values !== 'object') {b = false; logError(`expected type array for ${a_values}`)}

    if (b) {
        const old_value = ECS.E[s_entity]['array'][s_name]
        ECS.E[s_entity]['array'][s_name] = a_values
        logSuccess(`changed array component '${s_name}' value from '${old_value}' to '${a_values}'`)
    }
    
}