const CrashC = document.getElementById("CrashC");
const Kick = document.getElementById("Kick");
const RideCymbal = document.getElementById("RideCymbal");
const Snare = document.getElementById("Snare");
const Splash = document.getElementById("Splash");
const TomFloor = document.getElementById("TomFloor");

CrashC.addEventListener('mouseenter', e => {
    CrashC.innerText = 'Playing CrashC';
    audioCrashC();
});
CrashC.addEventListener('mouseleave', e => {
    CrashC.innerText = 'CrashC';
});

Kick.addEventListener('mouseenter', e => {
    Kick.innerText = 'Playing Kick';
    audioKick();
});
Kick.addEventListener('mouseleave', e => {
    Kick.innerText = 'Kick';
});

RideCymbal.addEventListener('mouseenter', e => {
    RideCymbal.innerText = 'Playing RideCymbal';
    audioRideCymbal();
});
RideCymbal.addEventListener('mouseleave', e => {
    RideCymbal.innerText = 'RideCymbal';
});

Snare.addEventListener('mouseenter', e => {
    Snare.innerText = 'Playing Snare';
    audioSnare();
});
Snare.addEventListener('mouseleave', e => {
    Snare.innerText = 'Snare';
});

Splash.addEventListener('mouseenter', e => {
    Splash.innerText = 'Playing Splash';
    audioSplash();
});
Splash.addEventListener('mouseleave', e => {
    Splash.innerText = 'Splash';
});

TomFloor.addEventListener('mouseenter', e => {
    TomFloor.innerText = 'Playing TomFloor';
    audioTomFloor();
});
TomFloor.addEventListener('mouseleave', e => {
    TomFloor.innerText = 'TomFloor';
});

var audioCrashC = function() {
    var audio = new Audio();
    audio.src = "Crash C 3.wav";
    audio.play();
}

var audioKick = function() {
    var audio = new Audio();
    audio.src = "Kick 4.wav";
    audio.play();
}

var audioRideCymbal = function() {
    var audio = new Audio();
    audio.src = "Ride Cymbal 4.wav";
    audio.play();
}

var audioSnare = function() {
    var audio = new Audio();
    audio.src = "Snare 9.wav";
    audio.play();
}

var audioSplash = function() {
    var audio = new Audio();
    audio.src = "Splash 2.wav";
    audio.play();
}

var audioTomFloor = function() {
    var audio = new Audio();
    audio.src = "Tom Floor 4.wav";
    audio.play();
}