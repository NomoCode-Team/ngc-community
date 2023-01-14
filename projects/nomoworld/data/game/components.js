G.componentDataTypes = {
    'array': 'object',
    'bool': 'object',
    'flag': 'array', 
    'number': 'object',
    'state': 'object',
    'string': 'object'
}

G.ma_components = pushComponentsIntoMulitArrayFromSingleArrayComponentTypes()

// -------------------------------- //

function pushComponentsIntoMulitArrayFromSingleArrayComponentTypes() {

    let a = []

    const a_listOfBoolComponents = []

    const a_listOfFlagComponents = [
        'align',
        'artist_flomo',
        'backdrop',
        'beaker',
        'body',
        'book',
        'bringLayerToFront',
        'brush',
        'building',
        'cameraFocalPoint',
        'collideWithPlayerHeroBody',
        'collideWithWorldBoundary',
        'communityHat',
        'controller',
        'crown',
        'delete',
        'dialog',
        'dialogProfilePic',
        'dialogSlide',
        'dj_flomo',
        'environment',
        'exterior',
        'flomo',
        'flomosNomocoin',
        'flower',
        'fontFamily',
        'fontSize',
        'fontStyle',
        'fullscreenToggleState',
        'gavel',
        'headband',
        'headpiece',
        'headphones',
        'hero',
        'hotbar',
        'HUD',
        'jomo',
        'leftHand',
        'makeInvisible',
        'makeVisible',
        'invisible',
        'itemBox',
        'itemInItemBox',
        'modal',
        'moveable',
        'moveLayerBackward',
        'moveLayerForward',
        'npc',
        'nomo',
        'omo',
        'omophone',
        'palette',
        'phaser',
        'phaserGrid',
        'phaserObjectUniqueId',
        'phaserRectX',
        'phaserRectY',
        'phaserRectAlpha',
        'phaserRectColor',
        'phaserRectHeight',
        'phaserRectStroke',
        'phaserRectStrokeColor',
        'phaserRectWidth',
        'player',
        'professorClipboard',
        'professorGlasses',
        'rightHand',
        'robo',
        'romo',
        'rotatable',
        'sceneFloorBackground',
        'setCameraFocalPoint',
        'setCollideWithPlayerHeroBody',
        'setCollideWithWorldBoundary',
        'setDisabledAlpha',
        'setHUD',
        'setRotation',
        'sendLayerToBack',
        'shades',
        'spawn', 'flag',
        'suitcase',
        'text',
        'textBody',
        'textName',
        'textReferenceValue',
        'toggleFullscreenOff',
        'toggleFullscreenOn',
        'togglingFullscreenOff',
        'togglingFullscreenOn',
        'tree',
        'useAdvancedWordwrap',
        'videoGameController',
        'waterBottle',
        'wordWrapWidth',
        'librarian_nomo',
        'community_nomo',
        'entrepreneur_flomo',
        'gamer_jomo',
        'showbiz_jomo',
        'scientist_jomo',
        'workout_romo',
        'director_romo',
        'judge_romo',
        'professor_nomo',
        'hideHotbarOnMouseUp',
        'hideOmophoneOnMouseUp',
        'showHotbarOnMouseUp',
        'showOmophoneOnMouseUp',
        'toggleMusicOnMouseUp',
        'toggleSoundOnMouseUp',
        'toggleGPSOnMouseUp',
        'togglePulseOnMouseUp',
        'toggleFullscreenOnMouseUp'
    ]

    const a_listOfArrayComponents = [
        'scene'
    ]

    const a_listOfNumberComponents = [
        'cooldownTogglingFullscrednOff',
        'cooldownTogglingFullscrednOn',
        'height',
        'rotation',
        'scale',
        'tileHeight',
        'tileWidth',
        'width',
        'x',
        'y',
        'z'
    ]

    const a_listOfStateComponents = []

    const a_listOfStringComponents = [
        'color',
        'currentPhaserScene',
        'phaserDialogSequence',
        'heroOverlappingWithBuilding',
        'heroOverlappingWithCharacter',
        'imageName',
        'omophoneState',
        'overlapWithBuilding',
        'overlapWithCharacter',
        'playSound',
        'transitioningPhaserScene',
        'visible'
    ]

    a_listOfArrayComponents.forEach(e => {a.push([e, 'array'])})
    a_listOfBoolComponents.forEach(e => {a.push([e, 'bool'])})
    a_listOfFlagComponents.forEach(e => {a.push([e, 'flag'])})
    a_listOfNumberComponents.forEach(e => {a.push([e, 'number'])})
    a_listOfStateComponents.forEach(e => {a.push([e, 'state'])})
    a_listOfStringComponents.forEach(e => {a.push([e, 'string'])})

    return a

}