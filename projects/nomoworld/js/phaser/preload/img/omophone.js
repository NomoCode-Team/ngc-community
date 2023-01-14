function preloadOmophoneImages(Scene) {
    G.omophone.imageNames.forEach(s_name => {
        Scene.load.image(s_name, `./asset/img/omophone/${s_name}.png`)
    })
}