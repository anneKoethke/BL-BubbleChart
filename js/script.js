// ToDos: 
// - BubbleChart mit Force-Simulation der Fouls, roten und gelben Karten aller Bundesligavereine einer Saison (16/17)
// - Erweiterung der Darstellung über TABs im HTLM: 
//    (1) Timeline für jeweils einen Verein: F,G,R über einzelne Spieltage (HF, HY, HR, AF, AY, AR)
//    (2) Auflistung der Vereine nebeneinander
//    Vorbild: https://archive.nytimes.com/www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html

function init() {
  // pseudo-globale Variabeln
  var canvas_size;
  // in d3v5 wird JS Promise verwendet, um externe Daten einzulesen
  // siehe: https://bl.ocks.org/GerardoFurtado/f08993c9c729b0b3452ef1803ad9dcbf/c4b45c5acce6033085a667cbb7d34203d15de0f0 (04.05.18)
  // Quelle: https://stackoverflow.com/questions/49534470/d3-js-v5-promise-all-replaced-d3-queue (04.05.2018)
  var file = ["data/saison_16_17.json"];
  Promise.all(file.map(url => d3.json(url))).then(function(values) {
    console.log(values[0]['saison_16_17'][0]); // -> ein Spiel
    var data = values[0]['saison_16_17'];
    ready(data);
  });
}

// SVG with Group-Element
function initSvg() {
  console.log("in initSvg()");
  canvas_size = 500;
  var canvas = d3.select('body').append('svg')
    .attr('width', canvas_size)
    .attr('height', canvas_size)
    .append('g')
    .attr("transform", "translate(0,0)");
}

// Quelle: https://www.dashingd3js.com/d3js-scales (04.05.18)
function initScale(data) {
  console.log("in initScale()");
  var scaleRadius = d3.scaleSqrt()
    .domain([d3.min(data), d3.max(data)]) // was von Data? vorher Fouls, red und yellow card zählen?
    .range([1,100]);  
}

function initForce() {
  console.log("in initForce");
  console.log(canvas_size);
  var simulation = d3.forceSimulation()
    .force("x", d3.forceX(canvas_size/2).strength(0.05))
    .force("y", d3.forceY(canvas_size/2).strength(0.05))
    .force("collide", d3.forceCollide(function(d) {
      return scaleRadius(d.sales); // hier noch falsch, weil aus meinem Car_Bubble geliehen
    }))
}


function makeBubbles(data) {
  console.log("in makeBubbles");
  var fouls = 0;
}

// main function: data ready
function ready(data) {
  console.log("in ready(data)");
  // Youtube-Video-Anleitung
  initSvg();
  // hier muss eine Function hin, die F,R,Y Team-weise aus data holt
  initScale(data); // anhand was von den Daten skalieren?
  initForce();
  makeBubbles(data);
}

// start der Anwendung -> nachher besser mit korrektem NameSpacing
init();
