document.getElementById("trackAudio").volume = 0.05;

const songList = [
    { songName: 'Notice Me More by SHUNTA', audioFile: 'Notice_Me_More.mp3', image: 'export-coralle.png', duration: '2:48'}, //https://opentracks.com/en/bgm/detail/23852
    { songName: 'Electro City Rock by Kazinchu', audioFile: 'Electro_City_Rock.mp3', image: 'export-kov.png', duration: '1:56'}, //https://opentracks.com/en/bgm/detail/20756
    { songName: 'Play Back 80\'s by Aguila Jata', audioFile: 'プレイバック・エイティーズ [Play Back 80s].mp3', image: 'export-spinvis.png', duration: '3:50'}, //https://opentracks.com/en/bgm/detail/19956
    { songName: 'Beautiful City by Flash Beat', audioFile: 'Beautiful_City.mp3', image: 'export-corpa.png', duration: '2:14'}, //https://opentracks.com/en/bgm/detail/14535
    { songName: 'A Detective\'s Daily Life by Yoshinori Tanaka', audioFile: '探偵の日常 [A Detective\'s Daily Life].mp3', image: 'export-watervis.png', duration: '3:17'}, //https://opentracks.com/en/bgm/detail/15766
];
let index = 0;
function pickPrevSong(songName) {
        if (playButton.classList.contains('playTheme')) {
        togglePlay();
        }
    if (index > 0) {
    index -= 1;
    } else {
    index = songList.length -1;
    }
    pickSong(songName);
}
function pickNextSong(songName) {
        if (playButton.classList.contains('playTheme')) {
        togglePlay();
        }
    if (songName.length -1 > index) {
    index++;
    } else {
    index = 0;
    }
    pickSong(songName);
}
function pickSong(songName) {
    const songNameData = songName[index];
    const songNameText = songNameData.songName;
    const audioFilePath = songNameData.audioFile;
    const imageName = songNameData.image;
    const durationValue = songNameData.duration;
    document.getElementById("trackName").textContent = songNameText;
    document.getElementById("trackAudio").src = '../sound/' + audioFilePath;
    document.getElementById("trackImg").src = '../images/' + imageName;
    document.getElementById("durationTime").textContent = durationValue;
    console.log('Song index number: ' + index + ', song: ' + songNameText + ' (' + audioFilePath + ')' );
        trackAudio.onerror = function() {
        document.getElementById("trackName").textContent = songNameText + ' [Not found! Nooooo]';
    };
    audioElement.addEventListener('timeupdate', () => {
        const currentTime = audioElement.currentTime;
        //console.log('current time in song is ' + currentTime);
        document.getElementById("currentSongTime").textContent = formatTime(currentTime);
    });
    function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return minutes + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
    }
}

const audioElement = document.getElementById("trackAudio");
const playButton = document.getElementById("playButton");
const spinningImage = document.getElementById("trackImg");

function togglePlay() {
  if (playButton.classList.contains('playTheme')) {
    audioElement.pause();
    spinningImage.style.animationPlayState = "paused";
    playButton.classList.remove('playTheme');
    playButton.textContent = ('▶');
  } else {
    audioElement.play();
    spinningImage.style.animationPlayState = "running";
    playButton.classList.add('playTheme');
    playButton.textContent = ('⏸');
  }
}
//autoplay to next song
audioElement.addEventListener("ended", function(){
    pickNextSong(songList);
    playButton.classList.remove('playTheme');
    togglePlay();
});