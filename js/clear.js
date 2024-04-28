'use strict';

function checkClear() {
  for (let i = 0; i < tiles.length; i++) {

    if (tiles[i].index != tiles[i].value - 1) {
      return;
    }
  }

  clearInterval(timerId);
  openModal();
}