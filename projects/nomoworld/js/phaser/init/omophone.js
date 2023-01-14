function initOmophoneEntities() {

    const o = G.omophone.init

    createNewNamedEntityWithValues('omophoneOn', {
        'array': {
            'scene': [
                'all'
            ]
        },
        'flag': [
            'setHUD',
            'invisible',
            'omophone',
            'spawn',
            'setDisabledAlpha',
            'hideHotbarOnMouseUp',
            'hideOmophoneOnMouseUp'
        ],
        'number': {
            'scale': o.scale,
            'x': o.x,
            'y': o.y
        },
        'string': {
            'omophoneState': 'on',
            'imageName': 'omophone_on',
            'visible': 'true'
        }
    })

    createNewNamedEntityWithValues('omophoneOff', {
        'array': {
            'scene': [
                'all'
            ]
        },
        'flag': [
            'setHUD',
            'omophone',
            'spawn',
            'setDisabledAlpha',
            'showHotbarOnMouseUp',
            'showOmophoneOnMouseUp'
        ],
        'number': {
            'scale': o.scale,
            'x': o.x,
            'y': o.y
        },
        'string': {
            'omophoneState': 'off',
            'imageName': 'omophone_off',
            'visible': 'true'
        }
    })

}