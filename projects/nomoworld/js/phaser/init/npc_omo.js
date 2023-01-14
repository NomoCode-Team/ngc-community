function initNPCOmoEntities() {

    //!! - spawn hand and crown position based on a percent from center, not by pixels (this way changing body scaling doesn't affect the result)

    let i = -1

    const o = G.omo.proportions

    for (const [s_name, o_parts] of Object.entries(G.omo.parts)) {

        i++

        for (const [s_partName, s_imageName] of Object.entries(o_parts)) {

            //!! - grid module
            let x_body, y_body
            if (i < 9) {
                x_body = ((i * 400) + 200)
                y_body = 200
            } else {
                x_body = (((i - 9) * 400) + 400)
                y_body = 850
            }
            
            let n_spawnScale
            let n_rotation = 0

            let x, y
            switch (s_partName) {
                case 'beaker':
                case 'book':
                case 'brush':
                case 'communityHat':
                case 'crown':
                case 'flomosNomocoin':
                case 'flower':
                case 'gavel':
                case 'headpiece':
                case 'headphones':
                case 'palette':
                case 'professorClipboard':
                case 'professorGlasses':
                case 'headband':
                case 'shades':
                case 'suitcase':
                case 'videoGameController':
                case 'waterBottle':
                    x = o.omo[s_partName][0] + x_body
                    y = o.omo[s_partName][1] + y_body
                    n_spawnScale = o.omo[s_partName][2]
                    n_rotation = o.omo[s_partName][3] //!! - use Phaser.Math.DegToRad() (!!- move to rotation instead)
                    break
                case 'body':
                    x = x_body
                    y = y_body
                    if (s_name === 'robo') {
                        n_spawnScale = o.robo.body[2]
                    } else {
                        n_spawnScale = o.omo.body[2]
                    }
                    break
                case 'leftHand':
                case 'rightHand':
                    if (s_name === 'robo') {
                        x = o.robo[s_partName][0] + x_body
                        y = o.robo[s_partName][1] + y_body
                        n_spawnScale = o.robo[s_partName][2]
                    } else {
                        x = o.omo[s_partName][0] + x_body
                        y = o.omo[s_partName][1] + y_body
                        n_spawnScale = o.omo[s_partName][2]
                    }
                    break
                default:
                    console.error('unrecognized part', s_part)
            }

            createNewNamedEntityWithValues(`omo_NPC_${s_name}_${s_partName}`, {
                'array': {
                    'scene': [ //!! - change scenes each omo npc is in
                        'all'
                    ]
                },
                'flag': [
                    s_name, 
                    s_partName,
                    'npc',
                    'omo',
                    'setRotation',
                    'spawn'
                ],
                'number': {
                    'rotation': n_rotation,
                    'scale': n_spawnScale,
                    'x': x,
                    'y': y,
                },
                'string': {
                    'imageName': s_imageName,
                    'visible': 'true'
                }
            })

            if (G.OMO_STATES[s_name] === 'disabled') {
                createNewFlagComponentInNamedEntity('setDisabledAlpha', `omo_NPC_${s_name}_${s_partName}`)
            }

        }
    }

}