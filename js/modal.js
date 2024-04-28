
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

document.getElementById('try-again').addEventListener('click', () => {
  shuffle();
  mask.hidden = true;
  modal.hidden = true;
  count = 0;
  counter.textContent = "0";
  timer.textContent = "0";
});


document.getElementById('share').addEventListener('click', () => {

  let text = encodeURIComponent(`🧩 Just solved #15puzzle in ${count} moves and ${timeScore.textContent} seconds! Give it a try! 👾\n`);
  let url = encodeURIComponent('https://kagomen.github.io/15puzzle/');

  const tweetUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
  window.open(tweetUrl, '_blank');
});