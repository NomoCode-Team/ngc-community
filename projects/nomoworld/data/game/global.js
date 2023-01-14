let G = {}
let LOG = {}
let ECS = {}

ECS.C = {}
ECS.E = {}
ECS.S = {}

let L_KEYBOARD_KEYS
let L_CURSOR_KEYS

G.imageCounter = -1
G.phaserObjects = {}

G.previousWidth = window.innerWidth
G.previousHeight = window.innerHeight

G.OMO_STATES = {
    'nomo': 'enabled',
    'flomo': 'enabled',
    'romo': 'enabled',
    'jomo': 'enabled',
    'robo': 'enabled',
    'librarian_nomo': 'enabled',
    'community_nomo': 'enabled',
    'professor_nomo': 'enabled',
    'artist_flomo': 'enabled',
    'dj_flomo': 'enabled',
    'entrepreneur_flomo': 'enabled',
    'gamer_jomo': 'enabled',
    'showbiz_jomo': 'enabled',
    'scientist_jomo': 'enabled',
    'workout_romo': 'enabled',
    'director_romo': 'enabled',
    'judge_romo': 'enabled'
}