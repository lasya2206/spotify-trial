// Initialise the Variables
let songIndex = 0;
let audioElement = new Audio('./Songs/Kyun Main Jaagoon.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
// let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { SongName: "Kyu Main Jaagoon", filePath: "Songs/Kyun Main Jaagoon.mp3", coverPath: "Covers/kyu mai jagu.jpg" },
    { SongName: "GetUp Jawani", filePath: "./Songs/Get Up Jawani.mp3", coverPath: "Covers/get-up-jawani.jpg" },
    { SongName: "Angreji Beat", filePath: "Songs/Angreji Beat.mp3", coverPath: "Covers/angreji beat.jpg" },
    { SongName: "Barbaadiyan", filePath: "Songs/Barbaadiyan.mp3", coverPath: "Covers/Barbaadiyan.jpg" },
    { SongName: "Channa Ve", filePath: "Songs/Channa Ve.mp3", coverPath: "Covers/Channa Ve.jpg" },
    { SongName: "Dope Shope", filePath: "Songs/dope shope.mp3", coverPath: "Covers/Dope-Shope.jpg" },
    { SongName: "Hare Krishna Hare Rama", filePath: "Songs/Hare-Krishna-Hare-Rama.mp3", coverPath: "Covers/Hare-Krishna-Hare-Rama.jpg" },
    { SongName: "Hum Dum", filePath: "Songs/Hum Dum.mp3", coverPath: "Covers/Hum Dum.jpg" },
    { SongName: "Mere Ghar Ram Aaye Hai", filePath: "Songs/Mere Ghar Ram Aaye Hai.mp3", coverPath: "Covers/Mere-Ghar-Ram-Aaye-Hain.jpg" },
    { SongName: "Shiddat", filePath: "Songs/Shiddat.mp3", coverPath: "Covers/Shiddat.jpg" }
]
// songItems.forEach((element, i) => {
    
//     element.getElementsByTagName('img')[0].src = songs[i].coverPath;
//     element.getElementsByClassName('SongName')[0].innerText = songs[i].SongName;
// })
// audioElement.play()

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
// const makeAllPlays = () =>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//         element.classList.add('fa-circle-play');
//         element.classList.remove('fa-circle-pause');
//     })
// }
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         audioElement.src = `./Songs/${songIndex+1}.mp3`
        
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');
//     })
// })