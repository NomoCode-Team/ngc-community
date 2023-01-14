function preloadEnvironmentImages(Scene) {
    
    const a = ['tree_1'] // 'flat_style_tree', 'ore', 'stone_flat', 'stump', 'cracked_stump']

    a.forEach(s_name => {
        Scene.load.image(s_name, `./asset/img/environment/${s_name}.png`)
    })

}