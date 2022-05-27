// Background color calculation

const blues = ["#cee9ea", "#b5d7db", "#9dc5cd", "#86b3c0", "#70a1b4", "#5a90a8", "#467e9c"]
const blackColor = "#000000"
const semiLightGray = "#555555"
const lightGray = "#888888"

function countConnections(id, edges){
    count = 0;
    edges.forEach(edge =>{
        if(edge["from"] == id || edge["to"] == id){
            count++
        }
    })
    return Math.min(count, blues.length-1);
}

function findNodeBackgroundColor(node){
    return blues[countConnections(node["id"], edges)]
}

function setNodeColors(node, backgroundColor, fontColor){
    node.color = {
        background: backgroundColor
    }
    node.font = {
        color: fontColor
    }
    nodes.update(node);
}

function resetColors(){
    nodes.get().forEach(node => {
        setNodeColors(node, findNodeBackgroundColor(node), blackColor);
    })
}

function setColorsGreyedOut(){
    nodes.get().forEach(node => {
        setNodeColors(node, lightGray, semiLightGray)
    })
}

function updateColorsForNodesSelection(){    
    setColorsGreyedOut()
    network.getConnectedNodes(network.getSelection().nodes[0]).forEach(node => {
        setNodeColors(nodes.get(node), findNodeBackgroundColor(node), blackColor);
    })
}

function updateColorsForEdgesSelection(){
    setColorsGreyedOut()
    edge = edges.get(network.getSelection().edges[0])
    nodeFrom = nodes.get(edge.from)
    nodeTo = nodes.get(edge.to)
    setNodeColors(nodeFrom, findNodeBackgroundColor(nodeFrom), blackColor);
    setNodeColors(nodeTo, findNodeBackgroundColor(nodeTo), blackColor);
}

// Region button handlers

var explanationLanguages = "general";

function generalButtonOnClick(){
    explanationLanguages = "general";
    updateSidebarForSelection()
    document.getElementById("generalButton").disabled = true
    document.getElementById("nlButton").disabled = false
}

function nlButtonOnClick(){
    explanationLanguages = "nl"
    updateSidebarForSelection()
    document.getElementById("generalButton").disabled = false
    document.getElementById("nlButton").disabled = true
}

// Sidebar update events

function getConnectedNodesText(connectedNodes){
    toReturn = "<br><br><b>Connected node" +
        (connectedNodes.length > 1 ? "s" : "") +
        ":</b> "
    connectedNodes.forEach(node => {
        toReturn = toReturn + nodes.get(node)["label"] + ", "
    })
    if(connectedNodes.length > 0){
        toReturn = toReturn.slice(0, -2)
    }
    return toReturn
}

function updateSidebarForNodesSelection(){
    selectedNodes = network.getSelection().nodes
    if(selectedNodes.length > 0) {
        node = nodes.get(selectedNodes[0])
        connectedNodes = network.getConnectedNodes(selectedNodes[0])
        title = node["label"]
        content = (explanationLanguages == "general" ? node["explanation"] : node["explanationNL"]) + getConnectedNodesText(connectedNodes)
        updateSidebarElements(title, content)
    }
}

function updateSidebarForEdgesSelection(){
    selectedEdges = network.getSelection().edges
    if(selectedEdges.length > 0){
        edge = edges.get(selectedEdges[0])
        nodeFrom = nodes.get(edge.from)
        nodeTo = nodes.get(edge.to)
        title = nodeFrom["label"] + " - " + nodeTo["label"]
        content = ""
        if(explanationLanguages == "nl"){
            if(edge["explanationNL"]) content = edge["explanationNL"]
        }
        else if(edge["explanation"]) content = edge["explanation"]
        updateSidebarElements(title, content)
    }
}

function updateSidebarForSelection(){
    if(network.getSelection().nodes.length > 0) updateSidebarForNodesSelection()
    else if(network.getSelection().edges.length > 0) updateSidebarForEdgesSelection()
    else updateSidebarElements("","")
}

function updateSidebarElements(title, content){
    document.getElementById("sidebarTitle").innerHTML = title;
    document.getElementById("sidebarContent").innerHTML = content
}

// Actual network construction

var container = document.getElementById("network");
var data = {
    nodes: nodes,
    edges: edges,
};
var options = {};
var network = new vis.Network(container, data, options);

resetColors()
generalButtonOnClick()

// onClick handler

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
        updateSidebarElements("","")
    }
});