'use strict';

document.getElementById('how-to-close').addEventListener('click', () => {
  document.getElementById('how-to-mask').hidden = true;
  document.getElementById('how-to-wrapper').hidden = true;

});

document.getElementById('how-to').addEventListener('click', () => {
  document.getElementById('how-to-mask').hidden = false;
  document.getElementById('how-to-wrapper').hidden = false;

});