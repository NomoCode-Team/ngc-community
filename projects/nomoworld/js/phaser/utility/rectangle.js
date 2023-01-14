function createNewPhaserRect(Scene, o) {

    const rect = Scene.add.rectangle( 
        o['x'],
        o['y'],
        o['width'],
        o['height'],
        o['color']
    )
    .setStrokeStyle(
        o['stroke'], 
        o['strokeColor']
    )
    .setAlpha(o['alpha'])

    logSuccess('created new phaser rectangle')

    return rect
    
}