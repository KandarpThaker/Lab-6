function playSound(e){
    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    const key = document.querySelector(`div[data-keycode="${e.keyCode}"]`);
    key.classList.add('press');
    audio.currentTime = 0;
    audio.play();
}
function removeTransition(e){
    e.target.classList.remove('press');
}
const keys = [...document.querySelectorAll('.sound')];
keys.forEach(key => key.addEventListener('transitionend',removeTransition))

document.addEventListener('keydown',playSound);
