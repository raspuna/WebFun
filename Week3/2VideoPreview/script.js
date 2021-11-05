console.log("page loaded...");

function playPreview(element) {
    element.muted = true;
    element.play();
    return 0;
}

function pausePreview(element) {
    element.pause();
    return 0;
}

function playVideo(element){
    element.muted = false;
    return 0;
}