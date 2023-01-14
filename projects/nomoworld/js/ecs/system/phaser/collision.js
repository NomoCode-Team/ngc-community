function SYSTEM_collision(Scene) {

    let b_overlappingWithAtLeastOneBuilding
    let b_overlappingWithAtLeastOneCharacter

    for (const [s, o] of Object.entries(ECS.E)) {

        const obj = getAttachedPhaserObjFromComponentByEntity(o)

        if (o.flag.includes('setCollideWithPlayerHeroBody')) {
            //!! - https://rexrainbow.github.io/phaser3-rex-notes/docs/site/arcade-body/
            const objToCollideWithHero = obj
            const heroBody = getAttachedPhaserObjFromComponentByEntity(ECS.E.heroBody)
            Scene.physics.add.collider(objToCollideWithHero, heroBody)
            obj.body.immovable = true
            console.log(obj)
            createNewFlagComponentInNamedEntity('collideWithPlayerHeroBody', s)
            removeFlagComponentFromNamedEntity('setCollideWithPlayerHeroBody', s)
        }

        if (o.flag.includes('setCollideWithWorldBoundary')) {
            obj.body.collideWorldBounds = true
            createNewFlagComponentInNamedEntity('collideWithWorldBoundary', s)
            removeFlagComponentFromNamedEntity('setCollideWithWorldBoundary', s)
        }

        if (o.flag.includes('overlapWithBuilding')) {

            G.buildings.forEach(o => {
                const s_name = o.name
                const n_id = ECS.E[s_name].number.phaserObjectUniqueId
                const phaserObj = G.phaserObjects[n_id]

                Scene.physics.add.overlap(obj, phaserObj, (body1, body2) => {
                    changeStringComponentValueInNamedEntity('visible', 'true', s)
                    changeStringComponentValueInNamedEntity('heroOverlappingWithBuilding', o.name, 'globals')
                    b_overlappingWithAtLeastOneBuilding = true
                    ECS.E.globals.string.heroOverlappingWithBuilding = s_name
                })

                //!! - createNewStringComponentWithValueInNamedEntity('playSound', 'entering_new_building', 'dialogModalBodyBackdrop')
            })
            removeFlagComponentFromNamedEntity('overlapWithBuilding', s)

        }

        b_overlappingWithAtLeastOneCharacter = heroOverlapWithCharacter(s, o, obj, Scene)

    }

    if (!b_overlappingWithAtLeastOneBuilding) {
        changeStringComponentValueInNamedEntity('heroOverlappingWithBuilding', 'none', 'globals')
    }

    if (!b_overlappingWithAtLeastOneCharacter) {
        changeStringComponentValueInNamedEntity('heroOverlappingWithCharacter', 'none', 'globals')
    }

}

function heroOverlapWithCharacter(s, o, obj, Scene) {

    let b_overlappingWithAtLeastOneCharacter = false

    if (o.flag.includes('overlapWithCharacter')) {
            
        for (const [s_name, o] of Object.entries(G.OMO_STATES)) {

            if (G.OMO_STATES[s_name] === 'enabled') {

                const objRef = `omo_NPC_${s_name}_body`
                const n_id = ECS.E[objRef].number.phaserObjectUniqueId
                const phaserObj = G.phaserObjects[n_id]

                Scene.physics.add.overlap(obj, phaserObj, (body1, body2) => {
                    changeStringComponentValueInNamedEntity('visible', 'true', s)
                    changeStringComponentValueInNamedEntity('heroOverlappingWithCharacter', objRef, 'globals')
                    b_overlappingWithAtLeastOneCharacter = true
                    ECS.E.globals.string.heroOverlappingWithCharacter = s_name
                })

                //!! - createNewStringComponentWithValueInNamedEntity('playSound', 'starting_new_dialog', 'dialogModalBodyBackdrop')
            }

        }

        removeFlagComponentFromNamedEntity('overlapWithCharacter', s)

    }

    return b_overlappingWithAtLeastOneCharacter

}