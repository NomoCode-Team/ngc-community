G.grid = {}
G.grid.tileWidth = 100028
G.grid.tileHeight = 10028

G.grid.plaza = {}
G.grid.plaza.width = 4000
G.grid.plaza.height = 4000
G.grid.plaza.gridWidth = 3000
G.grid.plaza.gridHeight = 3000
G.grid.plaza.gridColor = '0x2b3630'//'0x383838  

// -- create interior buildings -- //

const a_gridColors = {
    'arcade': 'Ox5c2e2e',
    'business': 'Ox5c4c2e',
    'community_hub': 'Ox5c4c2e',
    'costumes': 'Ox2e5c4e',
    'courthouse': 'Ox2e515c',
    'gallery': 'Ox2e3e5c',
    'gymnasium': 'Ox2e315c',
    'laboratory': 'Ox3d2e5c',
    'library': 'Ox482e5c',
    'shop': 'Ox542e5c',
    'studio': 'Ox5c2e50',
    'university': 'Ox5c2e3a'
}

const n_interiorWidth = 1000
const n_interiorHeight = 1000

G.buildings.forEach((o, i) => {
    G.grid[o.name] = {}
    G.grid[o.name].gridWidth  = n_interiorWidth
    G.grid[o.name].gridHeight = n_interiorHeight
    G.grid[o.name].gridColor  = a_gridColors[o.name]
})