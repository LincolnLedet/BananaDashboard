
async function readcsv() {
    const csvUrl = '/static/BananaDash/DOLE.csv'; // Replace this with the URL to your CSV file
    const response = await fetch(csvUrl);
    const csvText = await response.text();
  
    // Parse the CSV text
    // If using PapaParse:
    const parsedData = Papa.parse(csvText, {header: false, dynamicTyping: true}).data;
    
    // Without PapaParse, you would manually split the text into lines and values:
    // const parsedData = csvText.split('\n').map(row => row.split(','));
  
    return parsedData; // This is an array of arrays, similar to your static data format
  }

var datesAndStonksArray = [];

readcsv().then(parsedData => {
    for (let i = 0; i < parsedData.length; i++) {
        datesAndStonksArray.push([parsedData[i][1], parsedData[i][6]]);
    }
}).then(() => {
    // This code runs after the previous .then() has completed
    console.log('data: ' + datesAndStonksArray);


    anychart.onDocumentReady(function () {

        

        // create a data set on our data
        var dataSet = anychart.data.set(getData());

        // map data for the first series,
        // take x from the zero column and value from the first column
        var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });

        // map data for the second series,
        // take x from the zero column and value from the second column
        var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });

        // map data for the third series,
        // take x from the zero column and value from the third column
        var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });

        // map data for the fourth series,
        // take x from the zero column and value from the fourth column
        var fourthSeriesData = dataSet.mapAs({ x: 0, value: 4 });

        // create a line chart
        var chart = anychart.line();

        // turn on the line chart animation
        chart.animation(true);

        // configure the chart title text settings
        chart.title('Common banana stocks ');

        // set the y axis title
        chart.yAxis().title('stock price');

        // turn on the crosshair
        chart.crosshair().enabled(true).yLabel(false).yStroke(null);

        // create the first series with the mapped data
        var firstSeries = chart.line(firstSeriesData);
        firstSeries
        .name('Dole')
        .stroke('3 #f49595')
        .tooltip()
        .format('Dole : {%value}%');

        // create the second series with the mapped data

        // create the third series with the mapped data


        // create the fourth series with the mapped data

        // turn the legend on
        chart.legend().enabled(true);

        // set the container id for the line chart
        chart.container('container');

        // draw the line chart
        chart.draw();

    });

    function getData() {
        return datesAndStonksArray;
    }
});