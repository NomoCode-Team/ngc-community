function initPhaserFloorEntity() {

    const s_scene = ECS.E.globals.string.currentPhaserScene

    createNewNamedEntityWithValues('phaserGrid', {
        'array': {
            'scene': [
                'all'
            ]
        },
        'flag': [
            // 'phaserGrid',
            'sceneFloorBackground',
            'spawn',
            // 'setCollideWithPlayerHeroBody'
        ],
        'number': {
            'x': (G.grid[s_scene].width / 2),
            'y': (G.grid[s_scene].height / 2),
            'width': G.grid[s_scene].width,
            'height': G.grid[s_scene].height /*,
            'tileWidth': G.grid.tileWidth,
            'tileHeight': G.grid.tileHeight
            */
        },
        'string': {
            'color': G.grid[s_scene].gridColor,
            'visible': 'true'
        }
    })

}