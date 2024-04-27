'use strict';

const counter = document.getElementById('count');
let count = 0;

tiles.forEach(tile => {
  tile.addEventListener('click', (e) => {
    click(e);
    count++;
    counter.textContent = count;
  })
});
