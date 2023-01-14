function initGlobalEntity() {
    createNewNamedEntityWithValues('globals', {
        'flag': ['phaser'],
        'string': {
            'currentPhaserScene': 'plaza',
            'transitioningPhaserScene': false,
            'phaserDialogSequence': false,
            'heroOverlappingWithBuilding': 'none',
            'heroOverlappingWithCharacter': 'none',
            'fullscreenToggleState': false
        }
    })
}