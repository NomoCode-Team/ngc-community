function checkIfStringComponentInNamedEntity(s_componentName, s_entityName) {
    let b = true
    if (checkIfKeyNotInObject(s_entityName, ECS.E)) {b = false; logError(`entity with name '${s_entityName}' does not exist`)} 
    if (b) {
        return (checkIfKeyInObject(s_componentName, ECS.E[s_entityName]['string']))
    }
}


function checkIfArrayComponentInNamedEntity(s_componentName, s_entityName) {
    let b = true
    if (checkIfKeyNotInObject(s_entityName, ECS.E)) {b = false; logError(`entity with name '${s_entityName}' does not exist`)} 
    if (b) {
        return (checkIfKeyInObject(s_componentName, ECS.E[s_entityName]['array']))
    }
}


function checkIfNumberComponentInNamedEntity(s_componentName, s_entityName) {
    let b = true
    if (checkIfKeyNotInObject(s_entityName, ECS.E)) {b = false; logError(`entity with name '${s_entityName}' does not exist`)} 
    if (b) {
        return (checkIfKeyInObject(s_componentName, ECS.E[s_entityName]['number']))
    }
}


function checkIfFlagComponentInNamedEntity(s_componentName, s_entityName) {
    let b = true
    if (checkIfKeyNotInObject(s_entityName, ECS.E)) {b = false; logError(`entity with name '${s_entityName}' does not exist`)} 
    if (b) {
        return (checkIfValueInArray(s_componentName, ECS.E[s_entityName]['flag']))
    }
}

/* !! -
function checkIfBoolComponentInNamedEntity(s_componentName, s_entityName) {
    let b = true
    if (checkIfKeyNotInObject(s_entityName, ECS.E)) {b = false; logError(`entity with name '${s_entityName}' does not exist`)} 
    if (b) {
        return (checkIfValueIn???????(s_componentName, ECS.E[s_entityName]['bool']))
    }
}

function checkIfStateComponentInNamedEntity(s_componentName, s_entityName) {
    let b = true
    if (checkIfKeyNotInObject(s_entityName, ECS.E)) {b = false; logError(`entity with name '${s_entityName}' does not exist`)} 
    if (b) {
        return (checkIfValueIn???????(s_componentName, ECS.E[s_entityName]['state']))
    }
}
*/
