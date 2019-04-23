google.charts.load('current', {'packages':['corechart', 'table']});
// google.charts.load('current', {'packages':['table']});
 //google.charts.setOnLoadCallback(updateCharts);
// google.charts.setOnLoadCallback();
//  google.charts.setOnLoadCallback(drawTable);
    google.charts.setOnLoadCallback(drawBarChart);
    google.charts.setOnLoadCallback(drawSecondChart);
// function updateCharts(jsonData){
//     // drawFirstChart(jsonData);
//     // drawSecondChart(jsonData);
//     drawTable(jsonData);
//     //drawFirstChart(jsonData);
//     drawBarChart(jsonData);
//     drawSecondChart(jsonData);
// }

function drawFirstChart(jsonData) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Trend');
    data.addColumn('number', 'Volume');
    if(jsonData != undefined){
        for(i = 1; i < jsonData.length; i++){

            data.addRows([
            [jsonData[i].topic, jsonData[i].volume]
            ]);
            }


    }
    var options = {
        title: 'Global Trends',
        hAxis: {title: 'Top Trends',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0}
    };
    chart = new google.visualization.Histogram(document.getElementById("time-chart"));
    chart.draw(data, options);
}

function drawSecondChart(jsonData) {

    var data = google.visualization.arrayToDataTable([
      ["Topic", "Volume"],
      ["#ElDebateDecisivo", 66832],
      ["#DebateAtresmedia", 47689],
      ["#TVOI", 10118],
      ["Shane Long", 18546],
      ["Chiefs", 40980],
      ["#WorldBookDay", 122732],
      ["#LulaLivreJá", 18977],
      ["#CSKvSRH", 51181],
      ["#Sinceramente", 20930],
      ["#RepublicansForImpeachment", 109700],
      ["#AlavésBarça", 12985],
      ["#DíaDelIdioma", 10057],
      ["#DiaInternacionalDelLibro", 23590],
      ["#23Abr", 88149]
    ]);
/*
    if(jsonData != undefined){
        for(i = 1; i < jsonData.length; i++){

            data.addRows([
            [jsonData[i].topic, jsonData[i].volume]
            ]);
            }

    }
*/

    var options = {title:'Topics',
                   width:600,
                   height:500,
                   pieSliceText: "none" //removes percentages because don't appear well on front end
                 };


    var chart = new google.visualization.PieChart(document.getElementById('pie-chart'));
    chart.draw(data, options);
  }

function drawBarChart() {

  var data = google.visualization.arrayToDataTable([
    ["Topic", "Volume"],
    ["#ElDebateDecisivo", 66832],
    ["#DebateAtresmedia", 47689],
    ["#TVOI", 10118],
    ["Shane Long", 18546],
    ["Chiefs", 40980],
    ["#WorldBookDay", 122732],
    ["#LulaLivreJá", 18977],
    ["#CSKvSRH", 51181],
    ["#Sinceramente", 20930],
    ["#RepublicansForImpeachment", 109700],
    ["#AlavésBarça", 12985],
    ["#DíaDelIdioma", 10057],
    ["#DiaInternacionalDelLibro", 23590],
    ["#23Abr", 88149]
  ]);

  /*
  var string = JSON.stringify(jsonData);
  console.log(jsonData);

  if(jsonData != undefined) {
      for(i = 1; i < jsonData.length; i++){

          data.addRows([
          [string[i].topic, string[i].volume]
          ]);
          }

  }
*/

      var view = new google.visualization.DataView(data);


      var options = {
        title: "Volume of Trending Twitter Topics",
        width: 800,
        height: 600,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        hAxis: { title: 'Topic', textPosition: 'none' },
        vAxis: { title: 'Volume'}
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("bar-chart"));
      chart.draw(view, options);
}


  function drawTable(jsonData) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Trend');
    data.addColumn('number', 'Volume');
    if(jsonData != undefined){
        for(i = 1; i < jsonData.length; i++){

            data.addRows([
            [jsonData[i].topic, jsonData[i].volume]
            ]);
            }

    }
    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
  }
