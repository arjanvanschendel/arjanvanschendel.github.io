var container = document.getElementById("network");
var data = {
    nodes: nodes,
    edges: edges,
};
var options = {};
var network = new vis.Network(container, data, options);

network.on('click', function() {    
    if(network.getSelection().nodes.length > 0){
        updateColorsForNodesSelection()
        updateSidebarForNodesSelection()
    }
    else if(network.getSelection().edges.length > 0){
        updateColorsForEdgesSelection()
        updateSidebarForEdgesSelection()
    }
    else{
        resetColors()
        updateSidebarElements("","", false)
    }
});

resetColors()
generalButtonOnClick()