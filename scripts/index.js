import { musicPlayerInit } from './musicPlayer.js';
import { radioPlayerInit } from './radioPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn'),
      playerBlock = document.querySelectorAll('.player-block'),
      temp = document.querySelector('.temp');

const deactivationPlayer = () => {
  playerBtn.forEach(item =>  item.classList.remove('active'));
  playerBlock.forEach(item =>  item.classList.remove('active'));
};


playerBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    temp.style.display = 'none';
    deactivationPlayer();
    btn.classList.add('active');
    playerBlock[i].classList.add('active');
  });
});

musicPlayerInit();
radioPlayerInit();
videoPlayerInit();