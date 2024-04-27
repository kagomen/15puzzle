'use strict';

const newGameBtn = document.getElementById('new-game');

newGameBtn.addEventListener('click', () => {
  for (let i = 0; i < 1000; i++) {
    click({ target: { index: Math.floor(Math.random() * 16) } });
  }
});