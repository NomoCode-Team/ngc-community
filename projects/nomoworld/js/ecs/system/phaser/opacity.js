function SYSTEM_opacity() {

    for (const [s, o] of Object.entries(ECS.E)) {

        if (o.flag.includes('setDisabledAlpha')) {
            getAttachedPhaserObjFromComponentByEntity(o).setAlpha(G.disabledAlphaValue) 
            removeFlagComponentFromNamedEntity('setDisabledAlpha', s)
        }

    }

}