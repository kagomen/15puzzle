'use strict';

const bgm = new Howl({
  src: ['assets/bgm.mp3'],
  loop: true,
  volume: 0.4,
});

const se = new Howl({
  src: ['assets/SE.mp3'],
  volume: 0.1,
});

const onBtn = document.getElementById('on');
const offBtn = document.getElementById('off');
const tds = document.querySelectorAll('td');

onBtn.addEventListener('click', () => {
  bgm.play();
  se.mute(false);

  tds.forEach(td => {
    td.addEventListener('click', () => {
      se.play();
    });
  });

  onBtn.disabled = true;
  offBtn.disabled = false;
});

offBtn.addEventListener('click', () => {
  bgm.stop();
  se.mute(true);

  onBtn.disabled = false;
  offBtn.disabled = true;
});