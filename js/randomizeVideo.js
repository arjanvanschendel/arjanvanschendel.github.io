refreshVideo();
document.getElementById("videoCount").innerHTML = "Currently there are " + countVideos() + " videos in rotation.";


function refreshVideo(){
    var videos = thisFunctionIsAnUglyWayToStoreAnArrayBecauseYouCannotReadJSONInFrontendJavascript();    
    var index = Math.floor(Math.random() * videos.length);
    var html = '<iframe width="720" height="480"   src="https://www.youtube.com/embed/' + videos[index] + '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
    document.getElementById("actualVideo").innerHTML = html;
}

function thisFunctionIsAnUglyWayToStoreAnArrayBecauseYouCannotReadJSONInFrontendJavascript(){
    return [
        "va3LkB4Zvig",
        "c-y3MWyJLGU",
        "CFHN3b2AIZE",
        "xg8qDPGeFMU",
        "2kUq0X8jJRI",
        "4gMuGWnpbg4",
        "KaqC5FnvAEc",
    ];
}

function countVideos(){
    return thisFunctionIsAnUglyWayToStoreAnArrayBecauseYouCannotReadJSONInFrontendJavascript().length;
}