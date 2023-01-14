**ECS**

Component: piece of data, of type: array, flag, number, string (planned to add bool, state types later on)
Entities: object that references different components
System: loops each update, if objects has matching component(s) for this system, then this system acts on the object

# Component
./data/game/components.js
- pushComponentsIntoMulitArrayFromSingleArrayComponentTypes: storage for all components by name (all referenced component names are stored in this file / variable)

./js/ecs/component/component.js
- registerNewComponent: creating new component
- registerNewECSComponentsByMultiArray: creating multiple components at the same time

# Entity
./js/ecs/entity/entity.js: creating / deleting Entities

# Commands
./js/ecs/entityComponent/cmd/changeComponent.js: change the value of a component in a specific entity
./js/ecs/entityComponent/cmd/createComponent.js: create new component of a specific type 
./js/ecs/entityComponent/cmd/removeComponent.js: delete component from entity (removes from associated object in object of entities)

# Functions
./js/ecs/entityComponent/func/checkComponent.js: checks if entity has component
./js/ecs/entityComponent/func/getValueComponent.js: get the value of a specific component from a specific entity

# Systems
./js/ecs/system/phaser/...js: phaser update loops through each of these every cycle