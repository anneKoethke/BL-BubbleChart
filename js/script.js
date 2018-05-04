// ToDos: 
// - BubbleChart mit Force-Simulation der Fouls, roten und gelben Karten aller Bundesligavereine einer Saison (16/17)
// - Erweiterung der Darstellung über TABs im HTLM: 
//    (1) Timeline für jeweils einen Verein: F,G,R über einzelne Spieltage (HF, HY, HR, AF, AY, AR)
//    (2) Auflistung der Vereine nebeneinander
//    Vorbild: https://archive.nytimes.com/www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html

function init() {
  // in d3v5 wird anscheinend JS Promise verwendet, um externe Daten einzulesen
  // siehe: https://bl.ocks.org/GerardoFurtado/f08993c9c729b0b3452ef1803ad9dcbf/c4b45c5acce6033085a667cbb7d34203d15de0f0 (04.05.18)
  // Quelle: https://stackoverflow.com/questions/49534470/d3-js-v5-promise-all-replaced-d3-queue (04.05.2018)
  var file = ["data/saison_16_17.json"];
  Promise.all(file.map(url => d3.json(url))).then(function(values) {
    console.log(values[0]['saison_16_17'][0]); // -> ein Spiel
    var data = values[0]['saison_16_17'];
    ready(data);
  });
}

function ready(data) {
  console.log("in ready(data)");
  initSvg();
  
}

function initSvg() {
  console.log("in initSvg()");
  var canvas_size = 500;
  var canvas = d3.select('body').append('svg')
    .attr('width', canvas_size)
    .attr('height', canvas_size);
}




// start der Anwendung -> nachher besser mit korrektem NameSpacing
init();
