function getValueOfFlagComponentInNamedEntity(s_entity) {
    let b = true
    if (checkIfKeyNotInObject(s_entity, ECS.E)) {b = false; logError(`entity with name '${s_entity}' does not exist`)} 
    if (b) {
        return ECS.E[s_entity]['flag']
    }
}


function getValueOfNumberComponentInNamedEntity(s_component, s_entity) {
    let b = true
    if (checkIfKeyNotInObject(s_entity, ECS.E)) {b = false; logError(`entity with name '${s_entity}' does not exist`)} 
    if (b) {
        return ECS.E[s_entity]['number'][s_component]
    }
}


function getValueOfStringComponentInNamedEntity(s_component, s_entity) {
    let b = true
    if (checkIfKeyNotInObject(s_entity, ECS.E)) {b = false; logError(`entity with name '${s_entity}' does not exist`)} 
    if (b) {
        return ECS.E[s_entity]['string'][s_component]
    }
}


function getValueOfArrayComponentInNamedEntity(s_component, s_entity) {
    let b = true
    if (checkIfKeyNotInObject(s_entity, ECS.E)) {b = false; logError(`entity with name '${s_entity}' does not exist`)} 
    if (b) {
        return ECS.E[s_entity]['array'][s_component]
    }
}