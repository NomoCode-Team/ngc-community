function preloadSounds(Scene) {
    const s_filepath = '/asset/sfx/sound/kenney_nl/'
    const s_filetype = '.mp3'

    for (const [s_soundName, s_fileName] of Object.entries(G.soundImport)) {
        Scene.load.audio(s_soundName, `${s_filepath}${s_fileName}${s_filetype}`)
    }

    Scene.load.audio('plazaMusic', `/asset/sfx/music/RPG-Theme_v001_Looping.mp3`)
}