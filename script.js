// Initialise the Variables
let songIndex = 0;
let audioElement = new Audio('./Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songs = [
    { SongName: "Angreji Beat", filePath: "Songs/1.mp3", coverPath: "Covers/angreji beat.jpg" },   
    { SongName: "Barbaadiyan", filePath: "Songs/2.mp3", coverPath: "Covers/Barbaadiyan.jpg" },
    { SongName: "Channa Ve", filePath: "Songs/3.mp3", coverPath: "Covers/Channa Ve.jpg" },
    { SongName: "Dope Shope", filePath: "Songs/4.mp3", coverPath: "Covers/Dope-Shope.jpg" },
    { SongName: "GetUp Jawani", filePath: "./Songs/5.mp3", coverPath: "Covers/get-up-jawani.jpg" },
    { SongName: "Hare Krishna Hare Rama", filePath: "Songs/6.mp3", coverPath: "Covers/Hare-Krishna-Hare-Rama.jpg" },
    { SongName: "Hum Dum", filePath: "Songs/7.mp3", coverPath: "Covers/Hum Dum.jpg" },
    { SongName: "Kyu Main Jaagoon", filePath: "Songs/8.mp3", coverPath: "Covers/kyu mai jagu.jpg" }, 
    { SongName: "Mere Ghar Ram Aaye Hai", filePath: "Songs/9.mp3", coverPath: "Covers/Mere-Ghar-Ram-Aaye-Hain.jpg" },
    { SongName: "Shiddat", filePath: "Songs/10.mp3", coverPath: "Covers/Shiddat.jpg" }
]


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update SeekBar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `./Songs/${songIndex+1}.mp3`
        masterSongName.innerText = songs[songIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})