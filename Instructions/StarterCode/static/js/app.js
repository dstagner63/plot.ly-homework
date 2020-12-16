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

    console.log(samples);

    var labels = []

    var i;
    for (i = 0; i < otu_labels.length; i ++) {
      labels[i] = "(" + x_val[i] + "," + y_val[i] + ")<br>" + otu_labels[i];
    }

    var trace2 = {
      x: otu_id,
      y: y_val,
      mode: 'markers',
      text: labels,
      marker: {
        size: y_val, 
        color: otu_id
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
    var samples = data.metadata.filter(entry => entry.id.toString() === sample_id)[0].wfreq;
    // var washing = data.metadata.wfreq;
    console.log(samples);

    var trace3 = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: samples,
        title: { text: "Belly Button Washing Frequency <br> Scrubs per Week" },
        type: "indicator",
        mode: "gauge+number",
        gauge: {
          range: [null, 9],
          tickvals: [0,1,2,3,4,5,6,7,8,9],
          steps: [
            {range: [0, 5], color: "rgb(151, 249, 249)"}
          ],
          threshold: {
            value: samples,
            line: {
              color: "black",
              width: 4
            },
            thickness: 0.75
          },
          bar: {
            color: "transparent"
          }
        }

      }
    ];
  
    var layout= {
      
      margin: {
        l:25,
        r:0,
        t:50,
        b:100
      }
  
    }; 
  
        Plotly.newPlot('gauge', trace3, layout);
  
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


// xaxis: {
//   text: 'OTU ID',
//   font: {
//     family: 'Courier New, monospace',
//     size: 18,
//     color: '#7f7f7f'
//     }
// },