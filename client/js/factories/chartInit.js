<<<<<<< HEAD
google.charts.load('current', { 'packages': ['corechart', 'table'] });
=======

google.charts.load('current', {'packages':['corechart', 'table']});
>>>>>>> luccas_sprint2
// google.charts.load('current', {'packages':['table']});
// google.charts.setOnLoadCallback(updateCharts);
// google.charts.setOnLoadCallback();
// google.charts.setOnLoadCallback(drawSecondChart);
// google.charts.setOnLoadCallback(drawTable);

<<<<<<< HEAD
function updateCharts(jsonData) {
    // drawFirstChart(jsonData);
    // drawSecondChart(jsonData);
=======
function updateCharts(jsonData){
    drawFirstChart(jsonData);
    drawSecondChart(jsonData);
>>>>>>> luccas_sprint2
    drawTable(jsonData);
}

function drawFirstChart(jsonData) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Trend');
    data.addColumn('number', 'Volume');
<<<<<<< HEAD
    if (jsonData != undefined) {
        for (i = 1; i < jsonData.length; i++) {

=======
    if(jsonData != undefined){
        for(i = 1; i < jsonData.length - 1; i++){
            
>>>>>>> luccas_sprint2
            data.addRows([
                [jsonData[i].topic, jsonData[i].volume],
            ]);
        }
    }
    var options = {
        title: 'Global Trends',
        hAxis: { title: 'Top Trends', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 }
    };
    var chart = new google.visualization.Histogram(document.getElementById("time-chart"));
    chart.draw(data, options);
}

function drawSecondChart(jsonData) {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Trend');
    data.addColumn('number', 'Volume');
<<<<<<< HEAD
    if (jsonData != undefined) {
        for (i = 1; i < jsonData.length; i++) {

=======
    if(jsonData != undefined){
        for(i = 1; i < jsonData.length; i++){
            
>>>>>>> luccas_sprint2
            data.addRows([
                [jsonData[i].topic, jsonData[i].volume]
            ]);
        }
    }

    var options = {
        title: 'Topics',
        width: 400,
        height: 300
    };

    var chart = new google.visualization.PieChart(document.getElementById('second-chart'));
    chart.draw(data, options);
}

function drawTable(jsonData) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Trend');
    data.addColumn('number', 'Volume');
<<<<<<< HEAD
    if (jsonData != undefined) {
        for (i = 1; i < jsonData.length; i++) {

=======
    if(jsonData != undefined){
        for(i = 1; i < jsonData.length; i++){
            
>>>>>>> luccas_sprint2
            data.addRows([
                [jsonData[i].topic, jsonData[i].volume]
            ]);
        }
    }

    var table = new google.visualization.Table(document.getElementById('table_div'));
    table.draw(data, { showRowNumber: true, width: '100%', height: '100%' });
}
