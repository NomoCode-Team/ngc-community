function SYSTEM_position(Scene) {
    
    for (const [s, o] of Object.entries(ECS.E)) {

        if (o.flag.includes('moveable')) {
            const obj = getAttachedPhaserObjFromComponentByEntity(o)
            moveObjectBasedOnControllerInput(obj)
        }
        
    }

}

function moveObjectBasedOnControllerInput(obj) {

    const x = getXAxisMovementBasedOnControllerKeysDown()
    const y = getYAxisMovementBasedOnControllerKeysDown()
    setPlayerXAndYVelocityBasedOnIfShiftIsDownSoNot(x, y, obj)

    // --------------------------------------------------- // 

    function getXAxisMovementBasedOnControllerKeysDown() {
        let x
        switch (true) {
            case ((L_KEYBOARD_KEYS[G.keybind.moveLeft].isDown) && (L_KEYBOARD_KEYS[G.keybind.moveRight].isDown)):
            default:
                x = 0
                break
            case (L_KEYBOARD_KEYS[G.keybind.moveLeft].isDown):
                x = -1
                break
            case (L_KEYBOARD_KEYS[G.keybind.moveRight].isDown):
                x = 1
                break
        }
        return x
    }

    function getYAxisMovementBasedOnControllerKeysDown() {
        let y
        switch (true) {
            case ((L_KEYBOARD_KEYS[G.keybind.moveUp].isDown) && (L_KEYBOARD_KEYS[G.keybind.moveDown].isDown)):
            default:
                y = 0
                break
            case (L_KEYBOARD_KEYS[G.keybind.moveUp].isDown):
                y = -1
                break
            case (L_KEYBOARD_KEYS[G.keybind.moveDown].isDown):
                y = 1
                break
        }
        return y
    }

    function setPlayerXAndYVelocityBasedOnIfShiftIsDownSoNot(x, y, objToMove) {

        const n_diagonalAdjustmentAmount = 0.85

        const n_diagonal = ((x !== 0) && (y !== 0)) ? n_diagonalAdjustmentAmount : 1
        const n_speed = (L_CURSOR_KEYS.shift.isDown) ? G.player_run_speed : G.player_walk_speed

        const n_xValue = (x * n_speed * n_diagonal)
        const n_yValue = (y * n_speed * n_diagonal)

        objToMove
            .setVelocityX(n_xValue)
            .setVelocityY(n_yValue)
 
    }

}