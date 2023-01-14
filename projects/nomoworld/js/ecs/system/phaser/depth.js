function SYSTEM_depth(Scene) {
 
    for (const [s, o] of Object.entries(ECS.E)) {

        if (o.flag.includes('bringLayerToFront')) {
            //!! - move layer to front
            removeFlagComponentFromNamedEntity('bringLayerToFront', s)
        }

        if (o.flag.includes('moveLayerBackward')) {
            //!! - move layer backward
            removeFlagComponentFromNamedEntity('moveLayerBackward', s)        
        }

        if (o.flag.includes('moveLayerForward')) {
            //!! - move layer forward
            removeFlagComponentFromNamedEntity('moveLayerForward', s)
        }

        if (o.flag.includes('sendLayerToBack')) {
            //!! - move layer to back
            removeFlagComponentFromNamedEntity('sendLayerToBack', s)
        }
        
    }

    //!! - if dialouge is true, then bring to front
    //!! - higher number depth is in front
    
}