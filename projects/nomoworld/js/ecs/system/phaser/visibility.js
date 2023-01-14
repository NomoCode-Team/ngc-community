function SYSTEM_visibility(Scene) {

    for (const [s, o] of Object.entries(ECS.E)) {

        const obj = getAttachedPhaserObjFromComponentByEntity(o)

        switch (true) {

            case (o.flag.includes('makeInvisible')):
                obj.setVisible(false)
                removeFlagComponentFromNamedEntity('makeInvisible', s)
                changeStringComponentValueInNamedEntity('visible', 'false', s)
                break

            case (o.flag.includes('makeVisible')):
                obj.setVisible(true)
                removeFlagComponentFromNamedEntity('makeVisible', s)
                changeStringComponentValueInNamedEntity('visible', 'true', s)
                break

        }

    }

}