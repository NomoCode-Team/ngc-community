function SYSTEM_sound(Scene) {

    //!! - move this into config for are sounds -- use defaults if not defined in sound data object
    config = {
        mute: false,
        volume: 0.05,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
    }

    for (const [s, o] of Object.entries(ECS.E)) {

        if (checkIfStringComponentInNamedEntity('playSound', s)) {

            Scene.sound.play(o.string.playSound, config)
            removeStringComponentFromNamedEntity('playSound', s)

        }

    }

}