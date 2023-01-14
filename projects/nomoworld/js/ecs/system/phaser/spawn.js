function SYSTEM_spawn(Scene) {

    for (const [s, o] of Object.entries(ECS.E)) {

        if (
            (o.flag.includes('spawn')) &&
            ((ECS.E.globals.string.currentPhaserScene === 'plaza') ||
            (ECS.E.globals.string.currentPhaserScene === 'all'))
        ) {

            let obj

            switch (true) {
                case (o.flag.includes('sceneFloorBackground')): 
                    obj = createNewPhaserRect(Scene, {
                        'x': o.number.x,
                        'y': o.number.y, 
                        'width': o.number.width,
                        'height': o.number.height,
                        'color': o.string.color,
                        'stroke': 1,
                        'strokeColor': o.number.color,
                        'alpha': 1
                    })
                    Scene.physics.world.enable(obj)
                    break
                case (o.flag.includes('phaserGrid')):
                    obj = Scene.add.grid(
                        o.number.x,
                        o.number.y,
                        o.number.width,
                        o.number.height,
                        o.number.tileWidth,
                        o.number.tileHeight, 
                        o.string.color
                    )
                    break
                case (
                    o.flag.includes('textName') && 
                    o.flag.includes('text') && 
                    o.flag.includes('modal')):
                    obj = Scene.add.text(
                        o.number.x,
                        o.number.y,
                        o.string.textReferenceValue, {
                            'align': o.string.align,
                            'fontFamily': o.string.fontFamily,
                            'fontSize': o.string.fontSize,
                            'fontStyle': o.string.fontStyle
                        }
                    )
                    GRP_DIALOG.add(obj)
                    break
                case (
                    o.flag.includes('textBody') && 
                    o.flag.includes('text') && 
                    o.flag.includes('modal')):
                    obj = Scene.add.text(
                        o.number.x,
                        o.number.y,
                        o.string.textReferenceValue, {
                            'fontFamily': o.string.fontFamily,
                            'fontSize': o.string.fontSize,
                            'wordWrap': { 
                                'width': o.number.wordWrapWidth,
                                'useAdvancedWordwrap': o.string.useAdvancedWordwrap
                            }
                        }
                    )
                    GRP_DIALOG.add(obj)
                    break
                case (o.flag.includes('modal') && o.flag.includes('backdrop')):
                    obj = createNewPhaserRect(Scene, {
                        'x': o.number.phaserRectX,
                        'y': o.number.phaserRectY, 
                        'width': o.number.phaserRectWidth,
                        'height': o.number.phaserRectHeight,
                        'color': o.string.phaserRectColor,
                        'stroke': o.number.phaserRectStroke,
                        'strokeColor': o.number.phaserRectStrokeColor,
                        'alpha': o.number.phaserRectAlpha
                    })
                    GRP_DIALOG.add(obj)
                    break
                default:
                    //!! - confirm sprite has an imageName
                    obj = Scene.physics.add.sprite(
                        o.number.x,
                        o.number.y,
                        o.string.imageName
                    )
                    break
            }

            if ('visible' in o.string) {
                if (o.string.visible === 'false') {
                    createNewFlagComponentInNamedEntity('makeInvisible', s)
                }
            }

            setAndAddUniquephaserObjectUniqueId(obj, s)

            removeFlagComponentFromNamedEntity('spawn', s)
            logSuccess(`created phaser object ${s}`)

        }

    }

}

function setAndAddUniquephaserObjectUniqueId(obj, s) {
    G.imageCounter++
    G.phaserObjects[G.imageCounter] = obj
    //!! -- function(if already exists than change, else create new)
    createNewNumberComponentWithValueInNamedEntity('phaserObjectUniqueId', G.imageCounter, s)
}