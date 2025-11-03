document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const soundIcon = document.getElementById('soundIcon');
  
    playPauseButton.addEventListener("click", togglePlayPause);
    progressBar.addEventListener("input", updateProgressBar);
  
    function togglePlayPause() {
      if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor" /></svg>';
        // soundIcon.src = '../media/icons/pause.svg';
      } else {
        audioPlayer.pause();
        playPauseButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="currentColor" /></svg>';
      }
    }
  
    function updateProgressBar() {
      const value = progressBar.value;
      const duration = audioPlayer.duration;
  
      audioPlayer.currentTime = (value * duration) / 100;
    }
  
    audioPlayer.addEventListener("timeupdate", updateProgressBarUI);
  
    function updateProgressBarUI() {
      const duration = audioPlayer.duration;
      const currentTime = audioPlayer.currentTime;
  
      const progress = (currentTime / duration) * 100;
      progressBar.value = progress;
    }
  });
  