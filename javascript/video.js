// init html ele 
const videoContainer = document.querySelector('.video__container');
const mainVedeo = document.querySelector('video');
const playPauseBtn = document.querySelector('.play-pause');
const progressBar = document.querySelector('.progress-bar');
const skipBackward = document.querySelector('.skip-backward i');
const skipForward = document.querySelector('.skip-forward i');
const volumeBtn = document.querySelector('.vlume-btn i');

playPauseBtn.addEventListener('click', ()=> {
    if(mainVedeo.paused) {
        mainVedeo.play();
        
    } else {
        mainVedeo.pause();
    }
})

mainVedeo.addEventListener('play', ()=> {
    playPauseBtn.classList.replace('fa-play', 'fa-pause')
})

mainVedeo.addEventListener('pause', ()=> {
    playPauseBtn.classList.replace('fa-pause', 'fa-play')
})

mainVedeo.addEventListener('timeupdate', (e)=> {
    let {currentTime, duration} = e.target

    let percent = (currentTime/ duration) * 100
    progressBar.style.width = `${percent}%`;
})

skipBackward.addEventListener('click', ()=> {
    mainVedeo.currentTime -= 5
})

skipForward.addEventListener('click', ()=> {
    mainVedeo.currentTime += 5
})

volumeBtn.addEventListener('click', ()=> {
    if(!volumeBtn.classList.contains('fa-volume-high')) {
        mainVedeo.volume = 0.5
        volumeBtn.classList.replace('fa-volume-xmark', 'fa-volume-high')
    } else {
        mainVedeo.volume = 0.0
        volumeBtn.classList.replace('fa-volume-high', 'fa-volume-xmark')
    }
})