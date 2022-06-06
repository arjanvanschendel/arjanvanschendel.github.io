// Button handlers
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

function readMoreButtonOnClick(){
    currentLocation = window.location.href
    link = currentLocation.substr(0, currentLocation.lastIndexOf("\\") + 1) + "documents\\Thesis_Economic_Inequality.pdf#page=" + readMorePagenumber
    window.open(link)
}