//!! f - on resize, move phone inward, means phone is stuck to 80 left

let sceneName

function SYSTEM_resize(Scene) {

    sceneName = Scene

    if (
        (window.innerWidth !== G.previousWidth) ||
        (window.innerHeight!== G.previousHeight)) {
        runSystemCodeThatTriggersWhenSceneHasBeenResized()
    }

    // update previous width / height values
    G.previousWidth = window.innerWidth
    G.previousHeight = window.innerHeight

}

function runSystemCodeThatTriggersWhenSceneHasBeenResized() { 

    //!! o - if dialog modal is visible, then:
    resizeDialogModal()

}

function resizeDialogModal() {

    for (const [s, o] of Object.entries(ECS.E)) {

        //!! - get the height scale % amount compared to original
        //!! - get the width scale % amount compared to origianl
        //!! - resize heights based on above number
        //!! - resize width based on above number
        //!! - move original center x * % of original
        //!! - move original center y * % of original

        // or just way to adjust scale of entire group

        sceneName.scale.width = Math.round(width);
        sceneName.scale.height = Math.round(height);
        
        sceneName.scale.canvas.style.width = Math.round(width) + 'px';
        sceneName.scale.canvas.style.height = Math.round(height) + 'px';
        sceneName.canvas.style.width = width + 'px';
        sceneName.canvas.style.height = height + 'px';

        // https://stackoverflow.com/questions/58839190/phaser-3-low-image-quality-after-resize

        const obj = getAttachedPhaserObjFromComponentByEntity(o)

        switch(s) {
            case 'dialogModalNameBackdrop':
                break
            case 'dialogModalBodyBackdrop':
                break
            case 'dialogModalImageBackdrop':
                break
            case 'dialogModalNameText':
                break
            case 'dialogModalBodyText':
                break
            // createNewFlagComponentInNamedEntity(s_ta g, s)
        }

    }

}