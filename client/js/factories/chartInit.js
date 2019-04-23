google.charts.load('current', { 'packages': ['corechart', 'table'] });
google.charts.setOnLoadCallback(drawCharts);

function drawCharts(jsonData) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Trend');
    data.addColumn('number', 'Volume');
    if (jsonData != undefined) {
        for (i = 1; i < jsonData.length; i++) {
            data.addRows([
                [jsonData[i].topic, jsonData[i].volume]
            ]);
        }
    }

    var pieOptions = {
        title: 'Topics',
        width: 600,
        height: 500,
        pieSliceText: "none" //removes percentages because don't appear well on front end
    };

    var barOptions = {
        title: "Volume of Trending Twitter Topics",
        width: 800,
        height: 600,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
        hAxis: { title: 'Topic', textPosition: 'none' },
        vAxis: { title: 'Volume' }
    };

    var pieChart = new google.visualization.PieChart(document.getElementById('pie-chart'));
    pieChart.draw(data, pieOptions);

    var barChart = new google.visualization.ColumnChart(document.getElementById("bar-chart"));
    barChart.draw(data, barOptions);
}