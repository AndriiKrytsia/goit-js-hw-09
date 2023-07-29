import { getRandomHexColor } from "./helper";

const refs = {
  btnStart: document.querySelector("[data-start]"),
  btnStop: document.querySelector("[data-stop]")
}

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);
let idInterval; 
  
function onBtnStartClick() {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;

  idInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000)
}


function onBtnStopClick() {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
  clearInterval(idInterval)
}




