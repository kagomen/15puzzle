'use strict';
const table = document.getElementById('table');
const tiles = [];

for (let i = 0; i < 4; i++) {
  const tr = document.createElement('tr');
  for (let j = 0; j < 4; j++) {
    const td = document.createElement('td');
    const n = i * 4 + j;
    td.index = n;
    td.value = n;
    td.textContent = n == 0 ? "" : n;
    td.classList.add('tile');
    tiles.push(td);
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

for (let i = 0; i < 1000; i++) {
  click({ target: { index: Math.floor(Math.random() * 16) } });
}

function click(e) {
  let index = e.target.index;
  // 上が空マスの場合
  if (index - 4 >= 0 && tiles[index - 4].value == 0) {
    swap(index, index - 4);
    // 下が空マスの場合
  } else if (index + 4 <= 15 && tiles[index + 4].value == 0) {
    swap(index, index + 4);
    // 左が空マスの場合
  } else if (index - 1 >= 0 && tiles[index - 1].value == 0) {
    swap(index, index - 1);
    // 右が空マスの場合
  } else if (index + 1 <= 15 && tiles[index + 1].value == 0) {
    swap(index, index + 1);
  }
}

function swap(index, empty) {
  const n = tiles[index].value;
  tiles[index].value = 0;
  tiles[index].textContent = "";
  tiles[empty].value = n;
  tiles[empty].textContent = n;
}
