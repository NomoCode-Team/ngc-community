const n_scale = 0.5
const n_yAdjust = 900

setBuildingData()
adjustYCoorOfBuildings()

// ----------------------------------- //

function setBuildingData() {

    G.buildings = [
        {   'name': 'arcade',
            'x': 600,
            'y': 400,
            'scale': n_scale
        },
        {
            'name': 'business',
            'x': 3400,
            'y': 2800,
            'scale': n_scale
        },
        {   'name': 'studio',
            'x': 600,
            'y': 1200,
            'scale': 1.05
        },
        {
            'name': 'community_hub',
            'x': 3400,
            'y': 2000,
            'scale': 0.2
        },
        {   'name': 'costumes',
            'x': 600,
            'y': 2000,
            'scale': n_scale
        },
        {
            'name': 'courthouse',
            'x': 600,
            'y': 2800,
            'scale': n_scale
        }, 
        {   
            'name': 'gallery',
            'x': 2000,
            'y': 460,
            'scale': n_scale
        }, 
        {   'name': 'gymnasium',
            'x': 2000,
            'y': 1220,
            'scale': n_scale
        }, 
        {
            'name': 'shop',
            'x': 2000,
            'y': 2000,
            'scale': n_scale
        },
        {
            'name': 'laboratory',
            'x': 2000,
            'y': 2800,
            'scale': n_scale
        }, 
        {
            'name': 'library',
            'x': 3400,
            'y': 400,
            'scale': n_scale
        },
        {
            'name': 'university',
            'x': 3400,
            'y': 1200,
            'scale': n_scale
        }
    ]

}

function adjustYCoorOfBuildings() {

    G.buildings.forEach((o, i) => {
        G.buildings[i].y += n_yAdjust
    })

}