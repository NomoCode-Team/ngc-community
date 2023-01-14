function SYSTEM_rotation(Scene) { 

    for (const [s, o] of Object.entries(ECS.E)) {

        if (o.flag.includes('rotatable')) {
            const obj = getAttachedPhaserObjFromComponentByEntity(o)
            rotateObjectToLookInMouseDirection(obj, Scene)
        }
        
        if (o.flag.includes('setRotation')) {
            const obj = getAttachedPhaserObjFromComponentByEntity(o)
            obj.setRotation(o.number.rotation)
            removeFlagComponentFromNamedEntity('setRotation', s)
        }

    }

}


function rotateObjectToLookInMouseDirection(obj, scene) {
    const c1 = scene.input.mousePointer.x + scene.cameras.main.scrollX
    const c2 = scene.input.mousePointer.y + scene.cameras.main.scrollY
    obj.setRotation(Phaser.Math.Angle.Between(obj.x, obj.y, c1, c2) - Math.PI / 2)
}