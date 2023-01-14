function preloadBuildingImages(Scene) {
    G.buildings.forEach(o => {
        const s_name = o.name
        Scene.load.image(s_name, `./asset/img/building/exterior/building_exterior_overhead_${s_name}.png`)
        logSuccess(`loaded phaser image '${s_name}'`)
    })
}