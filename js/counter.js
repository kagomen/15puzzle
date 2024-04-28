'use strict';

const counter = document.getElementById('count');
let count = 0;

tiles.forEach(tile => {
  tile.addEventListener('click', (e) => {
    click(e);
    if (moveFailed == false) {
      count++;
      counter.textContent = count;
    }
    moveFailed = false;
  })
});
