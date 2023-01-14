function removeNumberComponentFromNamedEntity(s_componentName, s_entityName) {

    let b = true

    if (checkIfKeyNotInObject(s_entityName, ECS.E)) {b = false; logError(`entity with name '${s_entityName}' does not exist`)} 
    if (checkIfKeyNotInObject(s_componentName, ECS.E[s_entityName]['number'])) {b = false; logError(`component number '${s_componentName}' does not exist in entity '${s_entityName}'`)} 

    if (b) {
        delete ECS.E[s_entityName]['number'][s_componentName]
        logSuccess(`deleted component '${s_componentName}' from entity '${s_entityName}'`)
    }

}


function removeStringComponentFromNamedEntity(s_componentName, s_entityName) {

    let b = true

    if (checkIfKeyNotInObject(s_entityName, ECS.E)) {b = false; logError(`entity with name '${s_entityName}' does not exist`)} 
    if (checkIfKeyNotInObject(s_componentName, ECS.E[s_entityName]['string'])) {b = false; logError(`component string '${s_componentName}' does not exist in entity '${s_entityName}'`)} 

    if (b) {
        delete ECS.E[s_entityName]['string'][s_componentName]
        logSuccess(`deleted string '${s_componentName}' from entity '${s_entityName}'`)
    }

}


function removeArrayComponentFromNamedEntity(s_componentName, s_entityName) {

    let b = true

    if (checkIfKeyNotInObject(s_entityName, ECS.E)) {b = false; logError(`entity with name '${s_entityName}' does not exist`)} 
    if (checkIfKeyNotInObject(s_componentName, ECS.E[s_entityName]['array'])) {b = false; logError(`component array '${s_componentName}' does not exist in entity '${s_entityName}'`)} 

    if (b) {
        delete ECS.E[s_entityName]['array'][s_componentName]
        logSuccess(`deleted array '${s_componentName}' from entity '${s_entityName}'`)
    }

}


function removeFlagComponentFromNamedEntity(s_componentName, s_entityName) {

    let b = true

    if (checkIfKeyNotInObject(s_entityName, ECS.E)) {b = false; logError(`entity with name '${s_entityName}' does not exist`)} 
    if (checkIfValueNotInArray(s_componentName, ECS.E[s_entityName]['flag'])) {b = false; logError(`component flag '${s_componentName}' does not exist in entity '${s_entityName}'`)} 

    if (b) {
        const a_new = removeItemsFromArrayByMatch(ECS.E[s_entityName]['flag'], s_componentName)
        ECS.E[s_entityName]['flag'] = a_new
        logSuccess(`deleted flag '${s_componentName}' from entity '${s_entityName}'`)
    }

}