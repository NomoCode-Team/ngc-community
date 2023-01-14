function F_getDisplayLeft(object) { 
    return (object['x'] - (object['displayWidth'] / 2))
}

function F_getDisplayRight(object) { 
    return (object['x'] + (object['displayWidth'] / 2))
}

function F_getDisplayTop(object) {
    return (object['y'] - (object['displayHeight'] / 2))
}

function F_getDisplayBottom(object) {
    return (object['y'] + (object['displayHeight'] / 2))
}

const F_setDisplayTop    = Phaser.Display.Bounds.SetTop
const F_setDisplayLeft   = Phaser.Display.Bounds.SetLeft
const F_setDisplayBottom = Phaser.Display.Bounds.SetBottom
const F_setDisplayRight  = Phaser.Display.Bounds.SetRight


function simulateMouseClickSoPhaserAudioWillStartAutoplaying() {
    const simulateClick = (elem) => {
        const evt = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        })
        // If cancelled, don't dispatch our event
        const canceled = !elem.dispatchEvent(evt)
    }
    const someLink = document.querySelector('body')
    simulateClick(someLink)
}


function p3_changeImageTint(o, c_hex) {    
    o.tint = `0x${c_hex}`
}


function getAttachedPhaserObjFromComponentByEntity(o) {
    const n_id = o.number.phaserObjectUniqueId
    const obj = G.phaserObjects[n_id]
    return obj
}

/*
    if (!temp_didActionOnce) {
        const n_timeInMs = Math.round(PS.time.now)
        if (n_timeInMs >= 2000) {
            PS.sound.play('made_a_purchase')
            temp_didActionOnce = true
        }
    }
*/