'use strict';
const table = document.getElementById('table');
const tiles = [];
let moveFailed = false;

window.addEventListener('load', init());

function init() {
  createTiles();
  shuffle();
}

function click(e) {
  const index = e.target.index;
  // 上が空マスの場合
  if (index - 4 >= 0 && tiles[index - 4].value == 16) {
    swap(index, index - 4);
    // 下が空マスの場合
  } else if (index + 4 <= 15 && tiles[index + 4].value == 16) {
    swap(index, index + 4);
    // 左が空マスの場合
  } else if (index % 4 != 0 && tiles[index - 1].value == 16) {
    swap(index, index - 1);
    // 右が空マスの場合
  } else if (index % 4 != 3 && tiles[index + 1].value == 16) {
    swap(index, index + 1);
  } else {
    moveFailed = true;
  }
}

function swap(index, empty) {
  const n = tiles[index].value;
  tiles[index].value = 16;
  tiles[index].textContent = "";
  tiles[empty].value = n;
  tiles[empty].textContent = n;
}

function createTiles() {
  for (let i = 0; i < 4; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < 4; j++) {
      const td = document.createElement('td');
      const n = i * 4 + j;
      td.index = n;
      td.value = n + 1;
      td.textContent = n == 15 ? "" : n + 1;
      td.classList.add('tile');
      tiles.push(td);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

function shuffle() {
  for (let i = 0; i < 3000; i++) {
    click({ target: { index: Math.floor(Math.random() * 16) } });
  }
  moveFailed = false;
}