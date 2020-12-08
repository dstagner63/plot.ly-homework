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

  var chartData1 = [trace1];

  var layout= {
    margin: {
     l:100,
     r:100,
     t:100,
     b:50
    }

  } 

     Plotly.newPlot("bar", chartData1, layout);

  });

  d3.json("samples.json").then(function(data){

    var samples = data.samples.filter(m => m.id.toString() === sample_id)[0];
  
    var x_val = samples.otu_ids;
    var y_val = samples.sample_values;
    var otu_id = x_val.map(d=> + d);
    var otu_labels = samples.otu_labels;

    var trace2 = {
      x: otu_id,
      y: y_val,
      mode: 'markers',
      marker: {
        size: y_val, 
        colors: otu_id, 
        text: otu_labels
      }
    }
  
    var chartData2 = [trace2];
  
    var layout= {
      xaxis: {
        text: 'OTU ID',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
          }
      },
      margin: {
      l:25,
      r:0,
      t:50,
      b:100
      }
  
    }
  
      Plotly.newPlot("bubble", chartData2, layout);
  });


    // This block of code is for the gauge chart. Need new function.
  d3.json("samples.json").then(function(data){

    var washing = data.metadata.wfreq;

    // var value = metadata.wfreq;
    // var y_val = samples.sample_values;
    // var otu_id = x_val.map(d=> + d);
    // var otu_labels = samples.otu_labels;

    var trace3 = [
      {
        // domain: { x: [0, 1], y: [0, 1] },
        value: washing,
        title: { text: "Belly Button Washing Frequency" },
        type: "indicator",
        mode: "gauge"
      }
    ];
    
    var chartData3 = [trace3];
  
    var layout= {
      xaxis: {
        text: 'OTU ID',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
          }
      },
      margin: {
        l:25,
        r:0,
        t:50,
        b:100
      }
  
    }; 
  
        Plotly.newPlot('gauge', chartData3, layout);
  
  });

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
