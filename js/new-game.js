'use strict';

const newGameBtn = document.getElementById('new-game');

newGameBtn.addEventListener('click', () => {
  shuffle();
  count = 0;
  counter.textContent = '0';
  clearInterval(timerId);
  timer.textContent = "0";
});