'use strict';

const counter = document.getElementById('count');
let count = 0;

const timer = document.getElementById('time');
let startTime, elapsedTime, timerId;

tiles.forEach(tile => {
  tile.addEventListener('click', (e) => {
    click(e);

    // マス移動が失敗しなければカウンターを更新する
    if (moveFailed == false) {

      // はじめてのマス移動であればタイマーを始動する
      if (count == 0) {
        startTime = Date.now();
        timerId = setInterval(() => {
          elapsedTime = Date.now() - startTime;
          timer.textContent = Math.floor(elapsedTime / 1000);
        }, 1000);
      }

      count++;
      counter.textContent = count;
    }

    moveFailed = false;

    checkClear();
  })
});