function SYSTEM_camera(Scene) {
    
    for (const [s, o] of Object.entries(ECS.E)) {

        const obj = getAttachedPhaserObjFromComponentByEntity(o)

        if (o.flag.includes('setHUD')) {
            obj.setScrollFactor(0)
            createNewFlagComponentInNamedEntity('HUD', s)
            removeFlagComponentFromNamedEntity('setHUD', s)
        }

        if (o.flag.includes('setCameraFocalPoint')) {
            PS.cameras.main.startFollow(obj)
            PS.cameras.main.setZoom(G.cameraZoom)
            createNewFlagComponentInNamedEntity('cameraFocalPoint', s)
            removeFlagComponentFromNamedEntity('setCameraFocalPoint', s)
        }
        
    }

    //!!f - fullscreenToggle()

}

function fullscreenToggle() {

    // if global

    // Fullscreen


    /*
    // fullscreenToggleState
        Scene.scale.stopFullscreen() : 
        Scene.scale.startFullscreen()
    */

}