google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawFirstChart);
google.charts.setOnLoadCallback(drawSecondChart);


function drawFirstChart(jsonData) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Trend');
    data.addColumn('number', 'Volume');
    if(jsonData != undefined){
        for(i = 1; i < 50; i++){
            
            data.addRows([
            [jsonData[i].topic, jsonData[i].volume]
            ]);
            }

        var options = {
            title: 'Global Trends',
            hAxis: {title: 'Top Trends',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
        };
    }

    chart = new google.visualization.Histogram(document.getElementById("time-chart"));
    chart.draw(data, options);
}
function drawSecondChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mathematics', 2],
      ['English', 2],
      ['Physics', 2],
      ['Chemistry', 1],
      ['Biology', 3]
    ]);

    
    var options = {title:'Classes Topics',
                   width:400,
                   height:300};


    var chart = new google.visualization.PieChart(document.getElementById('second-chart'));
    chart.draw(data, options);
  }