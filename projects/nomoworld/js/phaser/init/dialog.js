const c_background = '0x40270c'
const c_border = '0x755a00'
const s_fontSize = '36px'
const s_fontFamily = 'Courier'

// G.phaserSceneHeight
// G.phaserSceneWidth 
// make modal body with this - like 5%, then center

//!! - STOP RUNNING THE CODE HERE, MOVE IT TO RESIZE 

const n_modalBodyBackdropWidth = (G.phaserSceneWidth * 0.90)
const n_modalBodyBackdropX = (G.phaserSceneWidth / 2)
const n_modalBodyBackdropHeight = 300
const n_modalBodyBackdropAboveY = 80
const n_modalBodyBackdropY = (G.phaserSceneHeight - (n_modalBodyBackdropHeight / 2) - n_modalBodyBackdropAboveY)

const startVisible = 'false'

function initDialogEntities() {

    createNewNamedEntityWithValues('dialogModalNameBackdrop', {
        'array': {
            'scene': [
                'all'
            ]
        },
        'flag': [
            'dialog',
            'modal',
            'textBody',
            'phaser',
            'setHUD',
            'spawn',
            'backdrop'
        ],
        'number': {
            'phaserRectX': 316,
            'phaserRectY': 650, 
            'phaserRectWidth': 440,
            'phaserRectHeight': 100,
            'phaserRectStroke': 12,
            'phaserRectAlpha': 1
        },
        'string': {
            'phaserRectColor': c_background,
            'phaserRectStrokeColor': c_border,
            'visible': startVisible
        }
    })

    createNewNamedEntityWithValues('dialogModalBodyBackdrop', {
        'array': {
            'scene': [
                'all'
            ]
        },
        'flag': [
            'dialog',
            'modal',
            'textBody',
            'setHUD',
            'phaser', 
            'spawn',
            'backdrop'
        ],
        'number': {
            'phaserRectX': n_modalBodyBackdropX,
            'phaserRectY': n_modalBodyBackdropY, 
            'phaserRectWidth': n_modalBodyBackdropWidth,
            'phaserRectHeight': n_modalBodyBackdropHeight,
            'phaserRectStroke': 12,
            'phaserRectAlpha': 1
        },
        'string': {
            'phaserRectColor': c_background,
            'phaserRectStrokeColor': c_border,
            'visible': startVisible
        }
    })

    createNewNamedEntityWithValues('dialogModalImageBackdrop', {
        'array': {
            'scene': [
                'all'
            ]
        },
        'flag': [
            'dialog',
            'modal',
            'textBody',
            'setHUD',
            'phaser',
            'spawn',
            'backdrop'
        ],
        'number': {
            'phaserRectX': (G.phaserSceneWidth / 7),
            'phaserRectY': n_modalBodyBackdropY,
            'phaserRectWidth': (n_modalBodyBackdropHeight * 0.7),
            'phaserRectHeight': (n_modalBodyBackdropHeight * 0.7),
            'phaserRectStroke': 6, 
            'phaserRectAlpha': 1
        },
        'string': {
            'phaserRectColor': '0x2b3630',
            'phaserRectStrokeColor': '0x2b3630',
            'visible': startVisible
        }
    })

    createNewNamedEntityWithValues('dialogModalNameText', {
        'array': {
            'scene': [
                'all'
            ]
        },
        'flag': [
            'dialog', 
            'modal',
            'textName',
            'setHUD',
            'phaser', 
            'spawn',
            'text'
        ],
        'number': {
            'x': (G.phaserSceneWidth / 7) - 150,
            'y': n_modalBodyBackdropY - 215,
            'dialogSlide': 0
        },
        'string': {
            // 'align': 'center', //!! - why is this not doing anything?
            'fontFamily': s_fontFamily,
            'fontSize': s_fontSize,
            'fontStyle': 'bold',
            'textReferenceValue': 'Entrepreneur Flomo',
            'visible': startVisible
        }
    })

    createNewNamedEntityWithValues('dialogModalBodyText', {
        'array': {
            'scene': [
                'all'
            ]
        },
        'flag': [
            'dialog', 
            'modal',
            'textBody',
            'setHUD',
            'phaser',
            'spawn',
            'text'
        ],
        'number': {
            'x': (G.phaserSceneWidth / 7) + 150,
            'y': n_modalBodyBackdropY - 100,
            'dialogSlide': 0,
            'wordWrapWidth': (G.phaserSceneWidth * 0.73)
        },
        'string': {
            'fontFamily': s_fontFamily,
            'fontSize': s_fontSize,
            'useAdvancedWordwrap': 'true',
            'textReferenceValue': 'dialog test uestnohuetnoahuntseoahuntseohuntseoahunteoahunteohanuteohantu hnto u u u u u aehuntseo hanstu ehoasntu heosau hesntoa huentoa huosean',
            'visible': startVisible
        }
    })
    
}