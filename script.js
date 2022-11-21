function playIt(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector( `.key[data-key="${e.keyCode}"]` );
  if (!audio) return; //stops the funciton all together
  audio.currentTime=0; // rewind to the start
  audio.play();
  key.classList.add('playing');
};

function rmvtransition(e){
  if (e.propertyName !== 'transform') return; //skip if not a transform property.
  this.classList.remove('playing');
}

const keys= document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',rmvtransition));
keys.forEach(key => key.addEventListener('mouseover', rmvtransition));
window.addEventListener("keydown", playIt);
