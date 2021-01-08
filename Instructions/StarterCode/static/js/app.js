/* The following is an example on how you might structure your code.
This is not the only way to complete this assignment.
Feel free to disregard and create your own code */

//Populate a dropdown menu with all of the Sample ID's. When an option is selected, this will update all of the charts.
//If you look in your index.html, the event function `optionChanged()` is already included. 
//This function takes the `value` of each dropdown `option`. You need to define this function in your javascript.

function optionChanged(id) {
    getPlot(id);
    getInfo(id);
}

function init() {
    var dropdownMenu = d3.select("#selDataset");
    d3.json("data/samples.json").then((data)=> {
        console.log(data)

        // Assign the value of the dropdown menu option to a variable
        data.names.forEach(function(name) {
            dropdownMenu.append("option").text(name).property("value");
        });

        var sample = names[0];
        metadata(sample);
        createchart(sample);
    });
}



// Define a function that will create metadata for given sample
function buildMetadata(id) {

    // Read the json data
    d3.json("samples.json").then(function(data) {
        var metadata = data.metadata;
        console.log(metadata)
    
        // Parse and filter the data to get the sample's metadata
        //i.e., an individual's demographic information - use id 
        var filteredMetadata = metadata.filter(meta => meta.id == id[0]);
        
        // Specify the location of the metadata and update it
        var demographicInfo = d3.select("#sample-metadata");
        demographicInfo.html("");
        Object.entries(filteredMetadata).forEach(([key,value])=> {
            demographicInfo.append("h5").text('${key}${value}');
        
        });
    });
    
};

// Define a function that will create charts for given sample
function buildCharts(sample) {

    // Read the json data
    d3.json("data/samples.json").then((data)=> {
        console.log(data)

        // Parse and filter the data to get the sample's OTU data
        // Pay attention to what data is required for each chart
        
        // Create bar chart in correct location
        
          
        // Plot the chart to a div tag with id "bar-plot"
        // Create bubble chart in correct location
        Plotly.newPlot("bar-plot", data, layout);
        Plotly.newPlot("bubble", bubbledata,bubblelayout);
        var bardata=[{
            x:sample.slice(0,10).reverse(),
            y:otu_ids.slice(0,10).map(otu_ids=>`OTU ${otu_ids}`).reverse(),
            text:otu_labels.slice(0,10).reverse(),
            type:"bar",
            orientation:"h"
        });
        var barlayout={
            title: "Top 10 OTUs",
            xaxis: { title: "Amount"}
            yaxis: { title: "OTUs"}
        };
        Plotly.newPlot("bar",bardata,barlayout)
        
       
        
    
}

// Define function that will run on page load
//function init() {

    // Read json data

        // Parse and filter data to get sample names

        // Add dropdown option for each sample

    // Use first sample to build metadata and initial plots

}

//function optionChanged(newSample){

    // Update metadata with newly selected sample

    // Update charts with newly selected sample

}

// Initialize dashboard on page load
init();

