// create an array with nodes
var nodes = new vis.DataSet([
    { id: 1, label: "Disconnection" },
    { id: 2, label: "Democratic power" },
    { id: 3, label: "Unawareness" },
    { id: 4, label: "Stratification" },
    { id: 5, label: "Education" },
    { id: 6, label: "Economic inequality" },
]);

// create an array with edges
var edges = new vis.DataSet([
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 2, to: 4 },
]);

// create a network
var container = document.getElementById("network");
var data = {
    nodes: nodes,
    edges: edges,
};
var options = {};
var network = new vis.Network(container, data, options);