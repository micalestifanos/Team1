google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawFirstChart);
google.charts.setOnLoadCallback(drawSecondChart);


function drawFirstChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Video', 'PDF'],
        ['2013',  1000,      400],
        ['2014',  1170,      460],
        ['2015',  660,       1120],
        ['2016',  1030,      540]
    ]);

    var options = {
        title: 'Video vs PDF',
        hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0}
    };

    var chart = new google.visualization.AreaChart(document.getElementById("time-chart"));
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