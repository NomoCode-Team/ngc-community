G.omo = {
    'import': {
        'flomo': ['hand', 'body', 'crown', 'flower', 'artist_brush', 'artist_palette', 'dj_headphones', 'entrepreneur_coin'],
        'jomo': ['hand', 'body', 'crown', 'scientist_beaker', 'scientist_headpiece', 'gamer_controller', 'showbiz_shades'],
        'nomo': ['hand', 'body', 'crown', 'librarian_book', 'professor_glasses', 'community_hat', 'professor_clipboard'],
        'robo': ['hand', 'body'],
        'romo': ['hand', 'body', 'crown', 'judge_gavel', 'workout_waterBottle', 'workout_headband', 'director_suitcase']
    },
    'scenes': {
        'flomo': ['plaza', 'costumes', 'gallery', 'shop'],
        'jomo': ['plaza', 'arcade', 'cinema', 'laboratory'],
        'romo': ['plaza', 'business', 'courthouse', 'gymnasium'],
        'nomo': ['plaza', 'community_hub', 'library', 'university'],
        'robo': ['plaza']
    },
    'parts': { // order defines layer depth, top prop of each object will be lowest depth
        'nomo': {
            'leftHand': 'nomo_hand',
            'rightHand': 'nomo_hand',
            'body': 'nomo_body',
            'crown': 'nomo_crown'
        },
        'flomo': {
            'leftHand': 'flomo_hand', 
            'rightHand': 'flomo_hand',
            'body': 'flomo_body', 
            'crown': 'flomo_crown',
            'flower': 'flomo_flower'
        },
        'jomo': {
            'leftHand': 'jomo_hand', 
            'rightHand': 'jomo_hand',
            'body': 'jomo_body', 
            'crown': 'jomo_crown'
        },
        'romo': {
            'leftHand': 'romo_hand',
            'rightHand': 'romo_hand',
            'body': 'romo_body', 
            'crown': 'romo_crown'
        },
        'robo': {
            'rightHand': 'robo_hand',
            'leftHand': 'robo_hand',
            'body': 'robo_body'
        },
        'professor_nomo': {
            'leftHand': 'nomo_hand', 
            'rightHand': 'nomo_hand',
            'body': 'nomo_body',
            'professorGlasses': 'nomo_professor_glasses',
            'professorClipboard': 'nomo_professor_clipboard'
        },
        'artist_flomo': {
            'leftHand': 'flomo_hand', 
            'rightHand': 'flomo_hand',
            'body': 'flomo_body',
            'palette': 'flomo_artist_palette',
            'brush': 'flomo_artist_brush',
            'flower': 'flomo_flower'
        },
        'gamer_jomo': {
            'leftHand': 'jomo_hand', 
            'rightHand': 'jomo_hand',
            'body': 'jomo_body',
            'videoGameController': 'jomo_gamer_controller'
        },
        'director_romo': {
            'suitcase': 'romo_director_suitcase',
            'leftHand': 'romo_hand', 
            'rightHand': 'romo_hand',
            'body': 'romo_body',
        }, 
        'scientist_jomo': {
            'leftHand': 'jomo_hand',
            'rightHand': 'jomo_hand',
            'body': 'jomo_body',
            'beaker': 'jomo_scientist_beaker',
            'headpiece': 'jomo_scientist_headpiece'
        },
        'workout_romo': {
            'leftHand': 'romo_hand', 
            'rightHand': 'romo_hand',
            'body': 'romo_body',
            'headband': 'romo_workout_headband',
            'waterBottle': 'romo_workout_waterBottle'
        },
        'librarian_nomo': {
            'leftHand': 'nomo_hand', 
            'rightHand': 'nomo_hand',
            'body': 'nomo_body',
            'book': 'nomo_librarian_book',
        },
        'dj_flomo': {
            'leftHand': 'flomo_hand', 
            'rightHand': 'flomo_hand',
            'body': 'flomo_body',
            'headphones': 'flomo_dj_headphones',
            'flower': 'flomo_flower'
        }, 
        'showbiz_jomo': {
            'leftHand': 'jomo_hand', 
            'rightHand': 'jomo_hand',
            'body': 'jomo_body',
            'shades': 'jomo_showbiz_shades'
        },
        'judge_romo': {
            'leftHand': 'romo_hand',
            'rightHand': 'romo_hand',
            'body': 'romo_body',
            'gavel': 'romo_judge_gavel'
        },
        'community_nomo': {
            'leftHand': 'nomo_hand', 
            'rightHand': 'nomo_hand',
            'body': 'nomo_body',
            'communityHat': 'nomo_community_hat'
        },
        'entrepreneur_flomo': {
            'leftHand': 'flomo_hand', 
            'rightHand': 'flomo_hand',
            'body': 'flomo_body',
            'flower': 'flomo_flower',
            'flomosNomocoin': 'flomo_entrepreneur_coin'
        },
    },
    'proportions': {
        'omo': {
            'beaker': [90, 47, 0.1, -50],
            'brush': [-90, 20, 0.23, 50],
            'body': [0, 0, 0.75],
            'book':  [-110, 60, 0.3, 25],
            'communityHat': [15, -60, 1],
            'crown': [0, -80, 0.75],
            'flomosNomocoin': [-100, 65, 1],
            'flower': [35, -20, 1],
            'gavel': [-110, 0, 0.25, 50],
            'headpiece': [-0, -35, 0.3, 0],
            'leftHand': [-70, 45, 1],
            'rightHand': [70, 45, 1],
            'headband': [0, -70, 0.8, 0],
            'headphones':  [0, -40, 0.7],
            'palette': [90, 80, 0.3, 9],
            'professorClipboard': [-100, 70, 0.3],
            'professorGlasses': [0, 40, 0.3],
            'shades': [0, 30, 0.5],
            'suitcase': [-100, 60, 0.5, 0],
            'videoGameController': [90, 65, 0.2, -180],
            'waterBottle': [-90, 50, 0.20, 50]
        },
        'robo': {
            'body': [0, 0, 0.70],
            'leftHand': [-80, 45, 1],
            'rightHand': [80, 45, 1]
        }
    }
}