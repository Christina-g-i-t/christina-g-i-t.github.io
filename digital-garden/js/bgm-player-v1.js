// onclick="pickRandomSong(songList)"

document.getElementById("trackAudio").volume = 0.05;

const songList = [
    { songName: 'Notice Me More by SHUNTA', audioFile: 'Notice_Me_More.mp3', image: 'export-coralle.png', duration: '2:48'}, //https://opentracks.com/en/bgm/detail/23852
    { songName: 'Play With Sand by Hotaru Sounds', audioFile: 'Play_With_Sand.mp3', image: 'export-dragonfish.png', duration: '5:18'}, //https://opentracks.com/en/bgm/detail/5197
    { songName: 'Butterfly Dream by Hotaru Sounds', audioFile: 'Butterfly_Dream.mp3', image: 'export-elve.png', duration: '3:18'}, //https://opentracks.com/en/bgm/detail/20289
    { songName: 'Electro City Rock by Kazinchu', audioFile: 'Electro_City_Rock.mp3', image: 'export-kov.png', duration: '1:56'}, //https://opentracks.com/en/bgm/detail/20756
];
//randomness not neededdddddd
//use list as regular list instead of shuffleling everythingggggg
let previousSongIndex = -1;
function pickRandomSong(songName) {
    let index;
    do {
        index = Math.floor((Math.random() * songName.length + (new Date().getTime())) % songName.length);
    } while (index === previousSongIndex);
    previousSongIndex = index;
    const randomSongNameData = songName[index];
    const songNameText = randomSongNameData.songName;
    const audioFilePath = randomSongNameData.audioFile;
    const imageName = randomSongNameData.image;
    const durationValue = randomSongNameData.duration;
    document.getElementById("trackName").textContent = songNameText;
    document.getElementById("trackAudio").src = '../sound/' + audioFilePath;
    document.getElementById("trackImg").src = '../images/' + imageName;
    document.getElementById("durationTime").textContent = durationValue;
    console.log('Song index number: ' + index + ', song: ' + songNameText + ' (' + audioFilePath + ')' );
        trackAudio.onerror = function() {
        document.getElementById("trackName").textContent = songNameText + ' [Not found! Nooooo]';
    };
}

function togglePlay() {
const audioElement = document.getElementById("trackAudio");
const playButton = document.getElementById("playButton");
const spinningImage = document.getElementById("trackImg");
  if (playButton.classList.contains('playTheme')) {
    audioElement.pause();
    spinningImage.style.animationPlayState = "paused";
    playButton.classList.toggle('playTheme');
    playButton.textContent = ('▶');
  } else {
    audioElement.play();
    spinningImage.style.animationPlayState = "running";
    playButton.classList.toggle('playTheme');
    playButton.textContent = ('⏸');
  }
}