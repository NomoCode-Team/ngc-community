function initHotbarEntities(Scene) {

    const n_itemBoxScale = 0.35

    const o = {
        'totalTileCount': 5,
        'spaceBetweenEachTile': 65,
        'center': (G.phaserSceneWidth / 2),
        'tileSpaceFromBottomOfScreen': 80
    }

    const a_names = [
        'item_box_pulse',
        'item_box_gps', 
        'item_box_music',
        'item_box_sound',
        'item_box_fullscreen'
    ]

    const a_event = [
        'togglePulseOnMouseUp',
        'toggleGPSOnMouseUp',
        'toggleMusicOnMouseUp',
        'toggleSoundOnMouseUp',
        'toggleFullscreenOnMouseUp'
    ]

    const a_itemInItemBoxScale = [
        0.35, 0.35, 0.35, 0.35, 0.35
    ]

    const n_leftFirstTileCenter = o.center - (o.spaceBetweenEachTile * (o.totalTileCount - 1))

    for (i = 0; i < o.totalTileCount; i++) {
    
        const x = (n_leftFirstTileCenter + ((i*2) * o.spaceBetweenEachTile))
        const y = (G.phaserSceneHeight - o.tileSpaceFromBottomOfScreen)

        createNewNamedEntityWithValues(`hotbarItemBox_${i}`, {
            'array': {
                'scene': [
                    'all'
                ]
            },
            'flag': [
                'setHUD',
                'hotbar',
                'itemBox',
                'spawn',
                a_event[i]
            ],
            'number': {
                'scale': n_itemBoxScale,
                'x': x,
                'y': y
            },
            'string': {
                'imageName': 'item_box',
                'visible': 'true'
            }
        })

        createNewNamedEntityWithValues(`hotbar_${a_names[i]}`, {
            'array': {
                'scene': [
                    'all'
                ]
            },
            'flag': [
                'setHUD',
                'hotbar',
                'itemInItemBox',
                'spawn',
                'setDisabledAlpha',
                a_event[i]
            ],
            'number': {
                'scale': a_itemInItemBoxScale[i],
                'x': x,
                'y': y
            },
            'string': {
                'imageName': a_names[i],
                'visible': 'true'
            }
        })

    }

}