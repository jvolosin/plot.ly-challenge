/* The following is an example on how you might structure your code.
This is not the only way to complete this assignment.
Feel free to disregard and create your own code */

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

        // Parse and filter the data to get the sample's OTU data
        // Pay attention to what data is required for each chart

        // Create bar chart in correct location

        // Create bubble chart in correct location
    
}

// Define function that will run on page load
function init() {

    // Read json data

        // Parse and filter data to get sample names

        // Add dropdown option for each sample

    // Use first sample to build metadata and initial plots

}

function optionChanged(newSample){

    // Update metadata with newly selected sample

    // Update charts with newly selected sample

}

// Initialize dashboard on page load
init();

