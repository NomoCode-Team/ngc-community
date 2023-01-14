function initHeroEntities() {
 
    createNewNamedEntityWithValues('heroBody', {
        'array': {
            'scene': [
                'all'
            ]
        },
        'flag': [
            'controller',
            'moveable',
            'setCollideWithWorldBoundary',
            'hero',
            'rotatable',
            'omophone',
            'overlapWithBuilding',
            'overlapWithCharacter',
            'setCameraFocalPoint',
            'spawn'
        ],
        'number': {
            'scale': 0.75,
            'x': 500,
            'y': 500
        },
        'string': {
            'imageName': 'hero_body',
            'visible': 'true'
        }
    })
    
}