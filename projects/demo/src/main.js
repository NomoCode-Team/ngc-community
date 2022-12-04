const PHENOTYPE_LENGTH = 100
const MUTATION_RATE = 0.05

const MUTATION_STRENGTH_COOR = 100
const MUTATION_STRENGTH_COLOR = 100

var c = null
var ctx = null

var c2 = null
var ctx2 = null


let X_COOR_LIMIT = [0, 100]
let Y_COOR_LIMIT = [0, 100]
let COLOR_LIMIT  = [0, 255]

function saturate(val, limits) {
    if(val < limits[0]) return limits[0]
    if(val > limits[1]) return limits[1]
    return val
}

function mutateValue(x, strength, limits) {
    return saturate(x + Math.round((Math.random() - 0.5)*strength), limits)
}

function mutationFunction(phenotype) {
	// get number of genes to mutate
    const N = PHENOTYPE_LENGTH*MUTATION_RATE
    for(var i=0;i<N;i++) {
        // select random gene to mutate
        const idx = Math.floor(Math.random()*PHENOTYPE_LENGTH)

        // mutate
        coors = phenotype[idx][0]
        color = phenotype[idx][1]

        // mutate coordinates
        for(var j=0;j<coors.length;j++) {
            coors[j].x = mutateValue(coors[j].x, MUTATION_STRENGTH_COOR, X_COOR_LIMIT)
            coors[j].y = mutateValue(coors[j].y, MUTATION_STRENGTH_COOR, Y_COOR_LIMIT)
        }
        // mutate color
        color.r = mutateValue(color.r, MUTATION_STRENGTH_COLOR, COLOR_LIMIT)
        color.g = mutateValue(color.g, MUTATION_STRENGTH_COLOR, COLOR_LIMIT)
        color.b = mutateValue(color.b, MUTATION_STRENGTH_COLOR, COLOR_LIMIT)
        color.a = mutateValue(color.a, MUTATION_STRENGTH_COLOR, COLOR_LIMIT)
    }
    return phenotype
}

function crossoverFunction(phenotypeA, phenotypeB) {
	// move, copy, or append some values from a to b and from b to a
    const half = Math.floor(PHENOTYPE_LENGTH/2)

    child1 = [...phenotypeA.slice(0, half), ...phenotypeB.slice(half)]
    child2 = [...phenotypeB.slice(0, half), ...phenotypeA.slice(half)]

	return [ phenotypeA , phenotypeB ]
}


function color2String(c) {
    const color = '#' + c.r.toString(16) + c.g.toString(16) + c.b.toString(16) + c.a.toString(16)
    console.log(color)
    return color
}

function drawPhenotype(p) {
    ctx.clearRect(0, 0, c.width, c.height);
    for(var i=0; i<p.length; i++) {
        const [coors, color] = p[i]

        // the triangle
        ctx.beginPath();
        ctx.moveTo(coors[0].x, coors[0].y);
        ctx.lineTo(coors[1].x, coors[1].y);
        ctx.lineTo(coors[2].x, coors[2].y);
        ctx.closePath();

        // the fill color
        ctx.fillStyle = color2String(color)
        ctx.fill();
    }
}


var IMG_DATA = []

function ctx2imgData(c) {
    return c.getImageData(0, 0, c.canvas.width, c.canvas.height).data;
}

const img = new Image();
img.onload = function() {
  
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    
    c2 = document.getElementById("myCanvas2");
    ctx2 = c2.getContext("2d");
    
    
    X_COOR_LIMIT = [0, this.width]
    Y_COOR_LIMIT = [0, this.height]
    COLOR_LIMIT  = [0, 255]
  
  ctx2.canvas.width = this.width
  ctx2.canvas.height = this.height
  ctx2.drawImage(img, 0, 0);

  IMG_DATA =  ctx2imgData(ctx2)

  ctx.canvas.width = this.width
  ctx.canvas.height = this.height
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);




    var firstPhenotype = []
    for(var i=0;i<PHENOTYPE_LENGTH;i++) firstPhenotype.push(getRandomGene())

    var geneticAlgorithmConstructor = require('geneticalgorithm')

    var geneticAlgorithm = geneticAlgorithmConstructor({
        mutationFunction: mutationFunction,
        crossoverFunction: crossoverFunction,
        fitnessFunction: fitnessFunction,
        population: [ firstPhenotype ]
    });

    console.log("Starting with:")
    console.log( firstPhenotype )

    setInterval(() => {
        geneticAlgorithm.evolve()
    }, 5000)



    // var best = geneticAlgorithm.best()
    // delete best.score
    // console.log("Finished with:")
    // console.log(best)

}
img.src = 'gentlecat.png';



function fitnessFunction(phenotype) {
    drawPhenotype(phenotype)
    const drawingData = ctx2imgData(ctx)

	var score = 0

    for(var i=0; i<IMG_DATA.length; i+=4) {
        score -= Math.abs(drawingData[i] - IMG_DATA[i])
        score -= Math.abs(drawingData[i+1] - IMG_DATA[i+1])
        score -= Math.abs(drawingData[i+2] - IMG_DATA[i+2])
    }

	// use your phenotype data to figure out a fitness score
	return score
}

function getRandomValue(limits) {
    return Math.round(Math.random()*limits[1])
}

function getRandomCoor() {
    return {x: getRandomValue(X_COOR_LIMIT), y: getRandomValue(Y_COOR_LIMIT)}
}

function getRandomColor() {
    return {
        r: getRandomValue(COLOR_LIMIT),
        g: getRandomValue(COLOR_LIMIT),
        b: getRandomValue(COLOR_LIMIT),
        a: getRandomValue(COLOR_LIMIT),
    }
}

function getRandomGene() {
    return [
        [
            getRandomCoor(),
            getRandomCoor(),
            getRandomCoor()
        ],
        getRandomColor()
    ]
}
