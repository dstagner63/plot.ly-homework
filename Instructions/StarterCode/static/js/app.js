d3.json("samples.json").then(function(data) {

    // Grab values from the response json object to build the plots
    var id = data.samples.id.map(row => row[0]);
    var otuIds = data.samples.otu_ids.map(row => row[1]);
    var sampleValues = data.samples.sample_values.map(row => row[2]);
    var otuLabels = data.samples.otu_labels.map(row => row[3]);
  
    //  Create the Traces
      var trace1 = {
        x: sampleValues,
        y: otuIds,
        type: "bar", 
        boxpoints: "all"
      };
    
      // Create the data array for the plot
      var data = [trace1];
    
      // Define the plot layout
      var layout = {
        title: "",
        xaxis: { title: "" },
        yaxis: { title: "OTU" id }
      };
    
      // Plot the chart to a div tag with id "plot"
      Plotly.newPlot("plot", data, layout);
    });
    
  
  
  // d3.json("samples.json").then(function(data) {
  //   console.log(data);
  // });