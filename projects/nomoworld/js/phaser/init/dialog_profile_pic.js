function initDialogProfilePicEntities() {

    createNewNamedEntityWithValues('dialogModalProfilePic', {
        'array': {
            'scene': [
                'all'
            ]
        },
        'flag': [
            'dialog',
            'modal',
            'dialogProfilePic',
            'phaser',
            'setHUD',
            'spawn'
        ],
        'number': {
            'x': 275,
            'y': 850, 
            'scale': 0.80,
        },
        'string': {
            'imageName': 'pfp_robo',
            'visible': 'false'
        }
    })

}