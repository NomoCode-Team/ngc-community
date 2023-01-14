let PS = new Phaser.Scene('plaza')

let GRP_DIALOG

PS.init = () => {

    initPhaserKeyboardInput()
    initGlobalEntity()

    initAllPhaserObjectEntities(PS)

}

function initAllPhaserObjectEntities(PS) {

    initPhaserFloorEntity() //!!o - rename to phaserFloorBackground
    // initEnvironmentEntities()
    initBuildingEntities()
    initNPCOmoEntities()
    initNomocoinEntities()
    initOmophoneEntities()
    initHeroEntities()
    initHotbarEntities()
    initDialogEntities()
    initDialogProfilePicEntities()

}

PS.preload = () => {
    
    preloadBuildingImages(PS)
    preloadEnvironmentImages(PS)
    preloadHeroEntities(PS)
    preloadHotbarEntities(PS)
    preloadNomocoinEntity(PS)
    preloadOmophoneImages(PS)
    preloadOmoGameImages(PS)
    preloadOmoPFPImages(PS)
    preloadSounds(PS)
    preloadTravelImages(PS)

}

PS.create = () => {

    PS.physics.world.setBounds(
        0, 
        0,
        G.grid['plaza'].width, 
        G.grid['plaza'].height
    )

    PS.cameras.main
        .setBackgroundColor(G.plazaBackgroundColor)
        .fadeIn(G.fade_out_time_ms)

    GRP_DIALOG = PS.add.group()

    PS.sound.play('plazaMusic', {
        loop: true,
        volume: 0.1
    })

    PS.sound.pauseOnBlur = false // play even if window/tab is changed

    PS.input.keyboard.on('keyup_L', function (event) {
        console.log('tuesot')
        PS.scale.isFullscreen ?
            PS.scale.stopFullscreen() :
            PS.scale.startFullscreen()
    })

}

PS.update = (time, delta) => {

    SYSTEM_spawn(PS)
    // SYSTEM_resize(PS)
    SYSTEM_delete(PS)
    SYSTEM_sound(PS)
    SYSTEM_input(PS)
    SYSTEM_visibility(PS)
    SYSTEM_dialog(PS)
 
    const o = ECS.E.globals.string
    if (!o.transitioningPhaserScene) {
        if (!o.phaserDialogSequence) {
            SYSTEM_opacity(PS)
            SYSTEM_scale(PS)
            SYSTEM_camera(PS)
            SYSTEM_collision(PS)
            SYSTEM_position(PS)
            SYSTEM_rotation(PS)
        }
    }

    // SYSTEM_depth(PS)
    // SYSTEM_transition(PS)

}

let config = {
    type: Phaser.Scale.CENTER_BOTH,
    scale: {
        mode: Phaser.Scale.ENVELOP,
    },
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: G.phaserSceneWidth,
    height: G.phaserSceneHeight,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        },
    },
    scene: PS,
    canvas: document.querySelector('phaserGame')
}

let plaza = new Phaser.Game(config)

/*
In your init or preload function, you should choose your scale mode. 
Please check the documentation to understand the different options:

//Options here are: NO_SCALE, EXACT_FIT, SHOW_ALL, RESIZE and USER_SCALE
this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
Please also check if you want to set pageAlignHorizontally and pageAlignVertically to true:

this.scale.pageAlignHorizontally = true;
this.scale.pageAlignVertically = true;
In some cases, you will want to call the refresh method:

this.scale.refresh();
*/