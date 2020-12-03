// d3.json("samples.json").then(function(data) {
//   console.log(data);
// })
  


function Metadata (sample){

  d3.json("samples.json").then(function(data){

    var meta = data.metadata.filter(m => m.id.toString() === sample)[0];

    var demo = d3.select("#sample-metadata");

    demo.html("");



    Object.entries(meta).forEach(([key, value]) => {

        demo.append('h5').text(`${key}: ${value}`);

   });
  

  });
}






function charts(sample_id){

  d3.json("samples.json").then(function(data){

  var samples = data.samples.filter(m => m.id.toString() === sample_id)[0];



  var x_val = samples.otu_ids.reverse().slice(0,10);
  var y_val = samples.sample_values.slice(0,10).reverse();
  var otu_id = x_val.map(d=> "OTU " + d);

  var trace1 = {


    x: y_val,
    y: otu_id,
    text: x_val,
    type: 'bar',
    orientation: 'h'
  }



  var chartData = [trace1];

  var layout= {
    title: "test",
    margin: {
     l:100,
     r:100,
     t:100,
     b:100
    }

  } 


     Plotly.newPlot("bar", chartData, layout);

  });










//bubule








}


function optionChanged(id){
    Metadata(id);
    charts(id)


}









function init(){

    var dropdown = d3.select("#selDataset");
    
      d3.json("samples.json").then((data)=>{
    
    
        var sampleNames = data.names;
    
        sampleNames.forEach(sample => {
          dropdown
              .append("option")
              .text(sample)
              .property("value", sample);
        
        }); 
    
      });
    
    };
    
    
    init();