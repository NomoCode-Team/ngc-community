function preloadOmoGameImages(Scene) {
    for (const [s_name, a_parts] of Object.entries(G.omo.import)) {
        a_parts.forEach(s_part => {
            const s_imageName = (s_name + '_' + s_part)
            const s_imagePath = `./asset/img/omo/${s_name}/${s_imageName}.png`
            Scene.load.image(s_imageName, s_imagePath)
        })
    }
}

function preloadOmoPFPImages(Scene) {
    Object.keys(G.omo.import).forEach(s => {
        Scene.load.image(`pfp_${s}`, `./asset/img/dialog/profile/${s}/pfp_${s}.png`)
    })
}