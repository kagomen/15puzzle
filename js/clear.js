'use strict';

function checkClear() {
  for (let i = 0; i < tiles.length; i++) {

    if (tiles[i].index != tiles[i].value) {
      return;
    }
  }

  clearInterval(timerId);

  // モーダルを表示
  document.getElementById('mask').hidden = false;
  document.getElementById('clear-screen').hidden = false;

  document.getElementById('time-score').textContent = timer.textContent;
  document.getElementById('count-score').textContent = count;

}