// init html ele 
const videoContainer = document.querySelector('.video__container');
const mainVedeo = document.querySelector('video');
const playPauseBtn = document.querySelector('.play-pause');
const progressBar = document.querySelector('.progress-bar');
const skipBackward = document.querySelector('.skip-backward i');
const skipForward = document.querySelector('.skip-forward i');
const volumeBtn = document.querySelector('.vlume-btn i');
const volumeSlider = document.querySelector('.left input');
const playButton = document.querySelector('.play-btn');
const xBtn = document.querySelector('.x-btn');

playButton.addEventListener('click', ()=> {
    videoContainer.classList.add('show-video');
})

xBtn.addEventListener('click', ()=> {
    videoContainer.classList.remove('show-video');
    mainVedeo.pause();
})


playPauseBtn.addEventListener('click', ()=> {
    if(mainVedeo.paused) {
        mainVedeo.play();
        
    } else {
        mainVedeo.pause();
    }
})

volumeSlider.addEventListener('input', (e)=> {
    mainVedeo.volume = e.target.value * 1
    if (mainVedeo.volume === 0) {
        volumeBtn.classList.replace('fa-volume-high', 'fa-volume-xmark')
    } else {
        volumeBtn.classList.replace('fa-volume-xmark', 'fa-volume-high')
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

    volumeSlider.value = mainVedeo.volume
})

