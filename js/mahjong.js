const placeholder = "<<>>"
const imagesBase = "images/mahjong/" + placeholder + ".jpg"
const scoreText = "<h2>Berekende score: " + placeholder + "</h2>"
const maxSameStoneAllowed = 4
const singleStoneAllowed = ["flower", "season"]

// Add stones to selection
var selectedStones = []

stoneSelected = (id) => {
    if(!validateAddition(id)){
        alert('Maximum amount of available stones reached for ' + id)
        return
    }
    selectedStones.push(id)
    updateSelection()
}

function updateSelection(){
    let container = document.getElementById("selectedStoneContainer")
    container.innerHTML = ""
    for(var i = 0; i < selectedStones.length; i++) {
        let stone = selectedStones[i];
        let childElement = document.createElement("img")
        childElement.src = imagesBase.replace(placeholder, stone)
        childElement.width = 50
        childElement.onclick = function() { stoneUnselected(stone) }
        container.appendChild(childElement)
    }
}

function validateAddition(name){
    if(singleStoneAllowed.some(stone => name.includes(stone))){
        return !selectedStones.includes(name)
    }

    let count = 0
    for(const entry of selectedStones){
        if(entry === name){
            count++
        }
    }
    return count < maxSameStoneAllowed
}

// Setup selectable stones
var anchors = document.getElementsByClassName("selectable_stone");
for(var i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];
    anchor.onclick = function() {stoneSelected(this.id)}
    anchor.src = imagesBase.replace(placeholder, anchor.id)
}

// Remove stones from selection
function stoneUnselected(name){
    let index = selectedStones.indexOf(name)
    selectedStones.splice(index,1)
    console.log(selectedStones)
    updateSelection()
}

// Calculation
function calculate(){
    let score = 0

    document.getElementById("calculatedScore").innerHTML = scoreText.replace(placeholder, score)
}