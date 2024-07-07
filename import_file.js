$(document).ready(function () {
    // Initialize the diagram component
    var diagram = $("#diagram").dxDiagram({
        nodes: {
            dataSource: []
        }
    }).dxDiagram("instance");

    // Trigger file input when import button is clicked
    $("#importButton").on("click", function () {
        $("#importFile").click();
    });

    // Handle file input change
    $("#importFile").on("change", function (event) {
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var content = e.target.result;
                console.log("File content:", content);

                // Attempt to parse the content as JSON
                try {
                    var diagramData = JSON.parse(content);
                    console.log("Parsed JSON data:", diagramData);
                    diagram.import(diagramData, true); // Use the import method to load the diagram data
                } catch (err) {
                    console.error("Error parsing JSON:", err);
                    alert("Failed to load the diagram. Please ensure the file is a valid JSON diagram.");
                }
            };
            reader.readAsText(file);
        }
    });
});
