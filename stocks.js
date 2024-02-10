
async function readcsv() {
    const csvUrl = 'DOLE.csv'; // Replace this with the URL to your CSV file
    const response = await fetch(csvUrl);
    const csvText = await response.text();
  
    // Parse the CSV text
    // If using PapaParse:
    const parsedData = Papa.parse(csvText, {header: false, dynamicTyping: true}).data;
    
    // Without PapaParse, you would manually split the text into lines and values:
    // const parsedData = csvText.split('\n').map(row => row.split(','));
  
    return parsedData; // This is an array of arrays, similar to your static data format
  }

console.log(typeof(readcsv()));

readcsv().then(parsedData => {
    console.log(parsedData[1][1]); // This will log the actual parsed data
  });


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
    var secondSeries = chart.line(secondSeriesData);
    secondSeries
      .name('Chaquiita')
      .stroke('3 #f9eb97')
      .tooltip()
      .format('Chaquiita : {%value}%');

    // create the third series with the mapped data
    var thirdSeries = chart.line(thirdSeriesData);
    thirdSeries
      .name('Del Monte')
      .stroke('3 #a8d9f6')
      .tooltip()
      .format('Del Monte : {%value}%');

    // create the fourth series with the mapped data
    var fourthSeries = chart.line(fourthSeriesData);
    fourthSeries
      .name('Fyffes')
      .stroke('3 #e2bbfd')
      .tooltip()
      .format('Fyffes: {%value}%');

    // turn the legend on
    chart.legend().enabled(true);

    // set the container id for the line chart
    chart.container('container');

    // draw the line chart
    chart.draw();

  });

  function getData() {
    return [
      ['1990',16.9,12.2,10.2,5.2],
      ['1991',17,17.8,10,4.8],
      ['1993',26.5,23.8,16.8,6.6],
      ['1994',28.7,22,17.3,9.1],
      ['1996',35.7,24,22.6,9.2],
      ['1998',37.2,24.6,22.4,11.2],
      ['2000',36.5,26.2,23.7,9.9],
      ['2002',40,34.4,23.8,16.4],
      ['2004',33.3,28.8,32.5,14.3],
      ['2006',40.2,32.1,27.5,15.1],
      ['2008',49.3,37.2,31.4,17.1],
      ['2010',51.9,42.5,36.1,28.5],
      ['2012',53.1,43.8,36,24.6],
      ['2014',63.7,45.9,44.7,31.3],
      ['2016',66.3,52,42.3,37.2],
      ['2018',70.1,57.7,49.2,39]
    ];
  }