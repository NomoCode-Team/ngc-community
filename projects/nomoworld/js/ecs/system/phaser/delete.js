function SYSTEM_delete(Scene) {

    for (const [s, o] of Object.entries(ECS.E)) {

        if (o.flag.includes('delete')) {

            delete ECS.E[s]

            getAttachedPhaserObjFromComponentByEntity(o).destroy()
         
        }
        
    }
    
    // createNewFlagComponentInNamedEntity('spawn', s)
    
    //!! - initAllPhaserObjectEntities() {

}