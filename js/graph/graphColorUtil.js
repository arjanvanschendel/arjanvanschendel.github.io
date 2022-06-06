function countConnections(id, edges){
    count = 0;
    edges.forEach(edge =>{
        if(edge["from"] == id || edge["to"] == id){
            count++
        }
    })
    return Math.min(count, COLOR_BLUES.length-1);
}

function findNodeBackgroundColor(node){
    return COLOR_BLUES[countConnections(node["id"], edges)]
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
        setNodeColors(node, findNodeBackgroundColor(node), COLOR_BLACK);
    })
}

function setColorsGreyedOut(){
    nodes.get().forEach(node => {
        setNodeColors(node, COLOR_LIGHTGRAY, COLOR_SEMILIGHTGRAY)
    })
}

function updateColorsForNodesSelection(){    
    setColorsGreyedOut()
    network.getConnectedNodes(network.getSelection().nodes[0]).forEach(node => {
        setNodeColors(nodes.get(node), findNodeBackgroundColor(node), COLOR_BLACK);
    })
}

function updateColorsForEdgesSelection(){
    setColorsGreyedOut()
    edge = edges.get(network.getSelection().edges[0])
    nodeFrom = nodes.get(edge.from)
    nodeTo = nodes.get(edge.to)
    setNodeColors(nodeFrom, findNodeBackgroundColor(nodeFrom), COLOR_BLACK);
    setNodeColors(nodeTo, findNodeBackgroundColor(nodeTo), COLOR_BLACK);
}