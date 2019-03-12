google.charts.load('current', {'packages':['corechart']});
google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawFirstChart);
google.charts.setOnLoadCallback(drawSecondChart);
google.charts.setOnLoadCallback(drawTable);


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

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Trend');
    data.addColumn('number', 'Volume');
    if(jsonData != undefined){
        for(i = 1; i < 50; i++){
            
            data.addRows([
            [jsonData[i].topic, jsonData[i].volume]
            ]);
            }
        
    }

    
    var options = {title:'Classes Topics',
                   width:400,
                   height:300};


    var chart = new google.visualization.PieChart(document.getElementById('second-chart'));
    chart.draw(data, options);
  }


 

  function drawTable(jsonData) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Trend');
    data.addColumn('number', 'Volume');
    if(jsonData != undefined){
        for(i = 1; i < 50; i++){
            
            data.addRows([
            [jsonData[i].topic, jsonData[i].volume]
            ]);
            }
        
    }
    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
  }