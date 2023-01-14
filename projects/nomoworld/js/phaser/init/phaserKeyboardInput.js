function initPhaserKeyboardInput() {

    let s_keys = ''
    for (const key of Object.keys(G.keybind)) {
        s_keys += `${G.keybind[key]},` 
    }

    L_KEYBOARD_KEYS = PS.input.keyboard.addKeys(s_keys)
    L_CURSOR_KEYS = PS.input.keyboard.createCursorKeys()

}