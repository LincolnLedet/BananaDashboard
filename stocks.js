anychart.onDocumentReady(function () {
    // Create an instance of a chart, in this case, a column chart
    var chart = anychart.column();

    // Define the data for the chart
    var data = [
        {x: "Apples", value: 1000},
        {x: "Oranges", value: 1200},
        {x: "Bananas", value: 1500},
        {x: "Lemons", value: 1300},
        {x: "Limes", value: 1100},
    ];

    // Add data to the chart
    chart.data(data);

    // Set the chart title
    chart.title("Fruit Consumption");

    // Draw the chart in the container with id "myChart"
    chart.container('myChart');
    chart.draw();
});