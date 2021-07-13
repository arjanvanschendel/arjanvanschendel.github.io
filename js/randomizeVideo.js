const videoArray = [
    "va3LkB4Zvig",
    "c-y3MWyJLGU",
    "CFHN3b2AIZE",
    "xg8qDPGeFMU",
    "2kUq0X8jJRI",
    "4gMuGWnpbg4",
    "KaqC5FnvAEc",
    "N-e8j3X-5i4",
];

refreshVideo();
document.getElementById("videoCount").innerHTML = "Currently there are " + videoArray.length + " videos in rotation.";

function refreshVideo(){   
    var index = Math.floor(Math.random() * videoArray.length);
    var html = '<iframe width="720" height="480"   src="https://www.youtube.com/embed/' + videoArray[index] + '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
    document.getElementById("actualVideo").innerHTML = html;
}