function SYSTEM_scale(Scene) {

    for (const [s, o] of Object.entries(ECS.E)) {

        if (o.number.scale) {
            const obj = getAttachedPhaserObjFromComponentByEntity(o)
            obj.setScale(o.number.scale)
        }
        
    }

    //!! - resize the dialog bar based on screen size?

}