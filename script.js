// console.log("Welcome to spotify");

//Initialise variables
let songIndex = 0;
let audioElement = new Audio('Assets/Audio.mp3');
let masterPlay = document.getElementById('masterPlay');
let songProgressBar = document.getElementById('songProgressBar');
let gif= document.getElementById('gif');
let songs = [
    { songName: "Ghosts", filePath: "Assets/Audio.mp3", coverPath: "Assets/albumcover.jpg" },
    { songName: "Ghosts", filePath: "Assets/Audio.mp3", coverPath: "Assets/albumcover.jpg" },
    { songName: "Ghosts", filePath: "Assets/Audio.mp3", coverPath: "Assets/albumcover.jpg" },
    { songName: "Ghosts", filePath: "Assets/Audio.mp3", coverPath: "Assets/albumcover.jpg" },
    { songName: "Ghosts", filePath: "Assets/Audio.mp3", coverPath: "Assets/albumcover.jpg" },
    { songName: "Ghosts", filePath: "Assets/Audio.mp3", coverPath: "Assets/albumcover.jpg" },
    { songName: "Ghosts", filePath: "Assets/Audio.mp3", coverPath: "Assets/albumcover.jpg" },
    { songName: "Ghosts", filePath: "Assets/Audio.mp3", coverPath: "Assets/albumcover.jpg" },
    { songName: "Ghosts", filePath: "Assets/Audio.mp3", coverPath: "Assets/albumcover.jpg" },
    { songName: "Ghosts", filePath: "Assets/Audio.mp3", coverPath: "Assets/albumcover.jpg" },
]





//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else if (audioElement.play) {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }

})



//Listen to Events

audioElement.addEventListener('timeupdate', () => {
    progress= parseInt(((audioElement.currentTime)/(audioElement.duration))*100);
    songProgressBar.value=progress;
})

songProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= (songProgressBar.value*audioElement.duration)/100;

})