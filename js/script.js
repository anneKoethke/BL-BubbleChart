// ToDos: 
// - BubbleChart mit Force-Simulation der Fouls, roten und gelben Karten aller Bundesligavereine einer Saison (16/17)
// - Erweiterung der Darstellung über TABs im HTLM: 
//    (1) Timeline für jeweils einen Verein: F,G,R über einzelne Spieltage
//    (2) Auflistung der Vereine nebeneinander
//    Vorbild: https://archive.nytimes.com/www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html

(function() {
  var canvas_size = 500;
  var canvas = d3.select('body').append('svg')
    .attr('width', canvas_size)
    .attr('height', canvas_size);
  
  // um d3.queue zu ersetzen
  // Quelle: https://stackoverflow.com/questions/49534470/d3-js-v5-promise-all-replaced-d3-queue (05-Apr-2018)
  var file = ['../data/saison_16_17.json'];
  Promise.all(file.map(url => d3.json(url))).then(function(entries) {
    console.log(entries);
    
    //main(entries);
  })

})();