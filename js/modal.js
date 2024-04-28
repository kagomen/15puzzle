
const mask = document.getElementById('mask');
const modal = document.getElementById('clear-screen');

const timeScore = document.getElementById('time-score')
const countScore = document.getElementById('count-score')

function openModal() {
  mask.hidden = false;
  modal.hidden = false;

  timeScore.textContent = timer.textContent;
  countScore.textContent = count;
}

document.getElementById('close').addEventListener('click', () => {
  mask.hidden = true;
  modal.hidden = true;
});