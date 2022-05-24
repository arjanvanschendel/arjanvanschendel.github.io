var nodes = new vis.DataSet([
    { id: 1, label: "Disconnection", explanation: "Lorem ipsum dolor sit amet" },
    { id: 2, label: "Democratic power" },
    { id: 3, label: "Unawareness" },
    { id: 4, label: "Stratification" },
    { id: 5, label: "Education" },
    { id: 6, label: "Policy approval" },
    { id: 7, label: "Measurements" },
    { id: 8, label: "Economic growth" },
    { id: 9, label: "Health" },
    { id: 10, label: "Inequality of opportunity" },
    { id: 11, label: "Wealth transfers" },
    { id: 12, label: "Mobility" },
    { id: 13, label: "Real estate" },
    { id: 14, label: "Wealth inequality" },
    { id: 15, label: "Financialization" },
    { id: 16, label: "Income inequality" },
    { id: 17, label: "Technology" },
    { id: 18, label: "Globalization" },
    { id: 19, label: "Welfare state" },
    { id: 20, label: "Labour bargaining" },
    { id: 21, label: "Taxes & benefits" },
    { id: 22, label: "Undocumented inequality" },
    { id: 23, label: "Public perception" },
    { id: 24, label: "Data collection" },
    { id: 25, label: "Economic inequality" },
]);

var edges = new vis.DataSet([
    { from: 1, to: 2, dashes: true, explanation: "Lorem ipsum dolor sit amet" },
    { from: 2, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 25 },
    { from: 2, to: 6 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 4, to: 9 },
    { from: 4, to: 12 },
    { from: 5, to: 9 },
    { from: 5, to: 12 },
    { from: 6, to: 7 },
    { from: 7, to: 22 },
    { from: 8, to: 25 },
    { from: 9, to: 10 },
    { from: 9, to: 25 },
    { from: 10, to: 11 },
    { from: 11, to: 14 },
    { from: 11, to: 12 },
    { from: 12, to: 13 },
    { from: 12, to: 16 },
    { from: 13, to: 14 },
    { from: 14, to: 15 },
    { from: 14, to: 16 },
    { from: 14, to: 21 },
    { from: 15, to: 16 },
    { from: 16, to: 17 },
    { from: 16, to: 18 },
    { from: 16, to: 19 },
    { from: 16, to: 20 },
    { from: 16, to: 21 },
    { from: 20, to: 21 },
    { from: 21, to: 22 },
    { from: 21, to: 23 },
    { from: 22, to: 23 },
    { from: 23, to: 24 },
]);

var container = document.getElementById("network");
var data = {
    nodes: nodes,
    edges: edges,
};
var options = {};
var network = new vis.Network(container, data, options);

network.on( 'click', function(properties) {
    var ids = properties.nodes;
    var clickedNodes = nodes.get(ids);
    console.log('clicked nodes:', clickedNodes);
    if(clickedNodes.length > 0){
        node = clickedNodes[0]
        document.getElementById("sidebarTitle").innerHTML = node["label"]
        document.getElementById("sidebarContent").innerHTML = node["explanation"]
        $("#infoModal").modal();
    }
    else if(clickedNodes.length == 0){
        document.getElementById("sidebarTitle").innerHTML = ""
        document.getElementById("sidebarContent").innerHTML = ""
    }
});