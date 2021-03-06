var video = {
//variable at top
videoPlayer : document.querySelector('video'),
vidThumb : document.querySelectorAll('.vid-thumb'),
volumeIndicator : document.querySelector('.vol-indicator'),

volOn() {
  video.videoPlayer.muted = false;
  video.volumeIndicator.classList.replace('fa-volume-off', 'fa-volume-up');
},

volOff() {
  video.videoPlayer.muted = true;
  video.volumeIndicator.classList.replace('fa-volume-up', 'fa-volume-off');
},

popOverlay(){
  let overlay =  document.querySelector('.vid-overlay');
  overlay.classList.add('show-overlay');

  overlay.querySelector('i').addEventListener('click', video.replayVideo);
},

replayVideo() {
  video.videoPlayer.currentTime = 0;
  video.videoPlayer.play();

  let overlay = document.querySelector('.vid-overlay');
  overlay.classList.remove('show-overlay');

  overlay.querySelector('i').removeEventListener('click', video.replayedVideo);
},

fetchVideoThumbs(){
  //debugger;
  const url = '../includes/functions.php?getVideo=true';

  fetch(url) // stuff
  .then((resp) => resp.json())
  .then((data) => {video.loadVideoThumbs(data); })
  .catch(function(error){
    console,log(error);
  });
},

loadVideoThumbs(data){
  let thumbHolder = document.querySelector('.video/thumbs');

  data.forEach(thumb => {
let string =
  `li class="vid-thumb" role="button" data-videopath="mini_1">
      <img src="images/vid1.jpg" alt="mini commercial" class="responsive">
    </li>`
  });
},

loadNewVideo(){
  let videoPath = "video"

  video.videoPlayer.src = videoPath;
  video.videoPlayer.load();
  video.videoPlayer.play();
},
//functionaloity

init(){
  console.log('video module added');

  //event handlers
  video.videoPlayer.addEventListener("mouseover", video.volOn);
  video.videoPlayer.addEventListener("mouseout", video.volOff);
  video.videoPlayer.addEventListener("ended", video.popOverlay);
}
}
video.init();
