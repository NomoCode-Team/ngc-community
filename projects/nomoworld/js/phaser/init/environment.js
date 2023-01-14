function initEnvironmentEntities(Scene) {  

    const a = [
        [
            500, 300
        ], [
            800, 700
        ]
    ]

    let i = 0
    a.forEach(a => {
        i += 1

        const s_name = (`tree_${i}`)
        const x = a[0]
        const y = a[1]
        
        createNewNamedEntityWithValues(s_name, {
            'array': {
                'scene': [
                    'plaza'
                ]
            },
            'flag': [
                'environment', 
                'exterior', 
                'phaser', 
                'spawn',
            ],
            'number': {
                'scale': 1,
                'x': x,
                'y': y
            },
            'string': {
                'imageName': 'tree_1',
                'visible': 'true'
            }
        })

    })

}
