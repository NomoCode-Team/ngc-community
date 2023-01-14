//!! ? - Possible solution is to store in its own camera? -- https://phaser.io/examples/v3/view/game-objects/graphics/multiple-cameras

function SYSTEM_dialog(Scene) { 

    //!! f - hide HUD when dialog is true, show when it's false (and it's not hidden because of any other settings, like phone being off)

    const g = ECS.E.globals.string

    let modalName, modalBody, modalImage

    if (g.phaserDialogSequence === 'started') {

        getCurrentDialogDataBasedOnScene()
        changeDialogBasedOnObject()

        g.phaserDialogSequence = 'running'

    }

    // ---------------------------------------------------------------------------- //

    function getCurrentDialogDataBasedOnScene() {

        const s_name = g.heroOverlappingWithCharacter
        const s_scene = g.currentPhaserScene

        switch (true) {
            case (s_scene === 'plaza'):
                const obj = (G.dialog[`${s_name}PlazaIntro`])
                modalName = obj.name
                modalBody = obj.dialog[0]
                modalImage = obj.image
                break
            default:
                logError(`Dialog match not found for name '${s_name}' and scene '${s_scene}'`)
        }

    }

    function changeDialogBasedOnObject() {

        for (const [s, o] of Object.entries(ECS.E)) {
             
            const obj = getAttachedPhaserObjFromComponentByEntity(o)

            if (g.heroOverlappingWithCharacter) {

                //!! o - if intersecting with only this particular character
                //!! o - don't loop through entities with for obj entries, just get by entity name

                if (s === 'dialogModalBodyText') {
                    changeStringComponentValueInNamedEntity('textReferenceValue', modalBody, s)
                    //!! o - move into text changing system, and only add flag to trigger this system here
                    obj.text = modalBody
                }

                if (s === 'dialogModalNameText') {
                    changeStringComponentValueInNamedEntity('textReferenceValue', modalName, s)
                    //!! o - move into text changing system, and only add flag to trigger this system here
                    obj.text = modalName
                }

                if (s === 'dialogModalProfilePic') {
                    changeStringComponentValueInNamedEntity('imageName', modalImage, s)
                    //!! o - move into image changing system, and only add flag to trigger this system here
                    obj.setTexture(modalImage)
                    //!! r - use flags to set only once here
                    //!! o - set only once for scene then make invisible
                    const s_charName = ECS.E.globals.string.heroOverlappingWithCharacter
                    obj.displayWidth = G.dialogPFP[s_charName].width
                    obj.displayHeight = G.dialogPFP[s_charName].height
                    obj.setScale(G.dialogPFP[s_charName].scale)
                }

                //!! f - (can't add until E holding down is changed to state) - createNewStringComponentWithValueInNamedEntity('playSound', 'start_new_dialog', 'globals')

                //!! f - set modal background picture based on the scene

            }

        }

    }


}