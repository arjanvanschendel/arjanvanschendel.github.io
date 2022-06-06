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
        content = ""
        link = undefined
        if(explanationLanguages == "nl" && node["explanationNL"]) {
            content = node["explanationNL"]
            link = node["linkToPageNL"]
        }     
        else if(node["explanation"]) {
            content = node["explanation"]
            link = node["linkToPageGlobal"]
        }
        content = content + getConnectedNodesText(connectedNodes)
        updateSidebarElements(title, content, link)
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
        link = undefined
        if(explanationLanguages == "nl" && edge["explanationNL"]) {
            content = edge["explanationNL"]
            link = edge["linkToPageNL"]
        }
        else if(edge["explanation"]) {
            content = edge["explanation"]
            link = edge["linkToPageGlobal"]
        }
        updateSidebarElements(title, content, link)
    }
}

function updateSidebarForSelection(){
    if(network.getSelection().nodes.length > 0) updateSidebarForNodesSelection()
    else if(network.getSelection().edges.length > 0) updateSidebarForEdgesSelection()
    else updateSidebarElements("","", false)
}

function updateSidebarElements(title, content, buttonYesNo){
    document.getElementById("sidebarTitle").innerHTML = title;
    document.getElementById("sidebarContent").innerHTML = content;
    readMorePagenumber = buttonYesNo;
    document.getElementById("readMoreButton").style.display = buttonYesNo ? "block" : "none";
}