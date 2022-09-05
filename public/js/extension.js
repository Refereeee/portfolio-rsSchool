const progress = document.querySelector('.progress');
const volume = document.querySelector('.volume');
const video = document.querySelector('.viewer');
const svgPlay = document.querySelector('#main_play');
const playBtn = document.querySelector('#control_play');
const pauseBtn = document.querySelector('#control_pause');
const isVolume = document.querySelector('#isVolume');
const noVolume = document.querySelector('#noVolume');
const mainVid = document.querySelector('.video__img');
const ranges = document.querySelectorAll('.ranges');

document.querySelector('.controls').addEventListener('click',(e)=>console.log(e.target.className))


volume.addEventListener('input', useVolume);
video.addEventListener('click',playPause);
playBtn.addEventListener('click',playPause);
pauseBtn.addEventListener('click', playPause);
svgPlay.addEventListener('click', playPause);
isVolume.addEventListener('click',onVolume)
noVolume.addEventListener('click',muteVolume)
noVolume.addEventListener('click',useVolumeOn)


mainVid.addEventListener('click', (e) => {
    if (document.querySelector('.video__img img').style.display != 'none') {
        document.querySelector('.video__img img').style.display = 'none'
        document.querySelector('#main_play').style.display='none'
        video.play();
    }
})



function useVolumeOn(){
    video.volume = 0.5;
    volume.style.background = `linear-gradient(to right, #536872 0%, #536872 ${50}%, #82CFD0 ${50}%, #82CFD0 100%)`;
    volume.value = 50;
}

function useVolume(){
    video[this.name] = this.value/100;
    const percent = (this.value/100)*100;
    volume.style.background = `linear-gradient(to right, #F4CA16 0%, #F4CA16 ${percent}%, #82CFD0 ${percent}%, #82CFD0 100%)`;
    console.log(this.value);
    console.log(this.name);
    video.volume==0 ? onVolume() : muteVolume()
    this.addEventListener('mouseup',()=>{
        volume.style.background = `linear-gradient(to right, #536872 0%, #536872 ${percent}%, #82CFD0 ${percent}%, #82CFD0 100%)`;
    })
}
function muteVolume(){
        noVolume.style.display='none';
        isVolume.style.display='block';

}
function onVolume(){
    isVolume.style.display='none';
    noVolume.style.display='block';

    volume.style.background = `linear-gradient(to right, #536872 0%, #536872 ${0}%, #82CFD0 ${0}%, #82CFD0 100%)`;
    volume.value = 0;
    video.volume = 0;
}




function pauseVideo(){
    svgPlay.style.display='block';
    playBtn.style.display='block';
    pauseBtn.style.display='none';
}
let handlep;
function playPause(){
    const method = video.paused ? 'play' : 'pause';
    video[method]()

    if(video.paused){
        svgPlay.style.display='block';
        playBtn.style.display='block';
        pauseBtn.style.display='none';
        clearInterval(handlep)
    }
    else{
        svgPlay.style.display='none';
        playBtn.style.display='none';
        pauseBtn.style.display='block';
        handlep = window.setInterval(handleProgress,200)
        progress.addEventListener('mousedown',()=>{
            clearInterval(handlep)
            progress.addEventListener('input',()=>{
                progress.style.background = `linear-gradient(to right, #F4CA16 0%, #F4CA16 ${progress.value}%, #82CFD0 ${progress.value}%, #82CFD0 100%)`;
            })
            pauseVideo()
            video['pause']();
            progress.addEventListener('mouseup',()=>{
            const percent = progress.value;

                progress.style.background = `linear-gradient(to right, #536872 0%, #536872 ${percent}%, #82CFD0 ${percent}%, #82CFD0 100%)`;
                video.currentTime = video.duration/100 * progress.value;
            })
        })
    }
}


function handleProgress(){
    const percent = Math.floor((video.currentTime/video.duration)*100);
    progress.style.background = `linear-gradient(to right, #536872 0%, #536872 ${percent}%, #82CFD0 ${percent}%, #82CFD0 100%)`;
    progress.value=percent;
}










