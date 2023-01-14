function SYSTEM_input(Scene) {

    const g = ECS.E.globals.string
    const c = Scene.cameras.main
    const k = L_KEYBOARD_KEYS

    /* !! f -
        'hideHotbarOnMouseUp',
        'hideOmophoneOnMouseUp',
        'showHotbarOnMouseUp',
        'showOmophoneOnMouseUp',
        'toggleMusicOnMouseUp',
        'toggleSoundOnMouseUp',
        'toggleGPSOnMouseUp',
        'togglePulseOnMouseUp',
        'toggleFullscreenOnMouseUp'
    */

    // if on mouse down and mouse over the square? and 

    /*
    if (Scene.input.activePointer.isDown) {


        console.log('true')
    }

    */

    if (k[G.keybind.interact].isUp) {

        if (g.phaserDialogSequence === 'running') {

            g.phaserDialogSequence = false
            for (const [s, o] of Object.entries(ECS.E)) {
                if (
                    (o.flag.includes('dialog')) &&
                    (o.flag.includes('modal')) &&
                    (!o.flag.includes('dialogProfilePic'))) {
                        createNewFlagComponentInNamedEntity('makeInvisible', s)
                }
                if (s === 'dialogModalProfilePic') {
                    createNewFlagComponentInNamedEntity('makeInvisible', s)
                }
            }

        }

    }

    if (k[G.keybind.interact].isDown) {

        if (!g.transitioningPhaserScene) {

            switch (true) {

                case (g.heroOverlappingWithCharacter !== 'none'):
                    g.phaserDialogSequence = 'started'
                    for (const [s, o] of Object.entries(ECS.E)) {
                        if (
                            (o.flag.includes('dialog')) && 
                            (o.flag.includes('modal')))
                        {
                            createNewFlagComponentInNamedEntity('makeVisible', s)
                        }
                    }
                    break

                case (g.heroOverlappingWithBuilding !== 'none'):
                    g.transitioningPhaserScene = true
                    createNewStringComponentWithValueInNamedEntity('playSound', 'entering_new_building', 'dialogModalBodyBackdrop')
                    c.fadeOut(G.fade_out_time_ms)

                    c.once('camerafadeoutcomplete', () => {
                        c.fadeIn(G.fade_in_time_ms) 
                        attachTagToAllEntitiesWithConnectedPhaserObjects('invisible')

                        c.once('camerafadeincomplete', () => { 
                            // initAllPhaserObjectEntities()
                            g.transitioningPhaserScene = false
                            // g.currentPhaserScene = g.heroOverlappingWithBuilding
                        })

                    })
                    break

                //!! - I believe this isn't working b/c the array generate new graphic system uses an array rather than an object, so once we delete, it throws the indexing off

                //!! - createNewFlagComponentInNamedEntity('spawn', s)
                //!! - initAllPhaserObjectEntities() {

            }

        }
    }

    if (k[G.keybind.toggleFullscreen].isDown) {
        if (ECS.E.globals.fullscreenToggleState === 'on') { 
            createNewFlagComponentInNamedEntity('toggleFullscreenOff', 'globals')
        }
        if (ECS.E.globals.fullscreenToggleState === 'off') { 
            createNewFlagComponentInNamedEntity('toggleFullscreenOn', 'globals')
        }
    }
    
}


//!! - write and use a entityComponent algorithm for this instead
function attachTagToAllEntitiesWithConnectedPhaserObjects(s_tag) {
    for (const [s, o] of Object.entries(ECS.E)) {
        if (s !== 'globals') {
            createNewFlagComponentInNamedEntity(s_tag, s)
        }
    }
}