function initBuildingEntities() {

    G.buildings.forEach(o => {
        
        createNewNamedEntityWithValues(o.name, {
            'array': {
                'scene': [
                    'plaza'
                ]
            },
            'flag': [
                'building', 
                'exterior', 
                'phaser', 
                'spawn',
                'setDisabledAlpha'
            ],
            'number': {
                'scale': o.scale,
                'x': o.x,
                'y': o.y
            },
            'string': {
                'imageName': o.name,
                'visible': 'true'
            }
        })

    })

}