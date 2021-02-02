var video = document.querySelector('.video');
var progressfilled = document.querySelector('.progress-filled');
// vars not initialized, must initialize in functions

function togglePlay() {
    video = document.querySelector('.video');
    var playicon = document.getElementById('playicon');
    var pauseicon = document.getElementById('pauseicon');
    if (video.paused) {
        video.play()
        pauseicon.style.display = "inline-block";
        playicon.style.display = "none";
    }
    else {
        video.pause();
        pauseicon.style.display = "none";
        playicon.style.display = "inline-block";
    }
    video.addEventListener('timeupdate', function() {
        updateProgressBar();
    })
}

function toggleMute() {
    video = document.querySelector('.video');
    var volumeupicon = document.getElementById('volumeupicon');
    var volumeofficon = document.getElementById('volumeofficon');
    video.muted = !video.muted;
    if (video.muted) {
        volumeofficon.style.display = "inline-block";
        volumeupicon.style.display = "none";
    }
    else {
        volumeupicon.style.display = "inline-block";
        volumeofficon.style.display = "none";
    }
}

function forward() {
    video = document.querySelector('.video');
    video.currentTime = video.currentTime + 5;
    updateProgressBar();
}

function backward() {
    video = document.querySelector('.video');
    video.currentTime = video.currentTime - 5;
    updateProgressBar();
}

function toggleFullscreen() {
    video = document.querySelector('.video');
    var fullscreenicon = document.getElementById('fullscreenicon');
    var fullscreenexiticon = document.getElementById('fullscreenexiticon');
    var videocontainer = document.getElementById('videocontainer');
    
    if (fullscreenexiticon.style.display == "inline-block") {
        // exit full screen
        document.exitFullscreen();
        fullscreenicon.style.display = "inline-block";
        fullscreenexiticon.style.display = "none";
    }
    else {
        // enter full screen
        videocontainer.requestFullscreen();
        fullscreenexiticon.style.display = "inline-block";
        fullscreenicon.style.display = "none";
    }
}

function updateProgressBar() {
    progressfilled = document.querySelector('.progress-filled');
    var progressPos = video.currentTime / video.duration;
        progressfilled.style.width = progressPos * 100 + "%";
}