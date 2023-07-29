import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { convertMs } from "./helper";
import Notiflix from 'notiflix';

const refs = {
  btnStart: document.querySelector("[data-start]"),
  dataDays: document.querySelector("[data-days]"),
  dataHours: document.querySelector("[data-hours]"),
  dataMinutes: document.querySelector("[data-minutes]"),
  dataSeconds: document.querySelector("[data-seconds]"),
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    refs.btnStart.disabled = new Date() > selectedDates[0];
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure("Please choose a date in the future");
    }
    selectedDate = selectedDates[0];
  },
};

flatpickr("#datetime-picker", options)

refs.btnStart.addEventListener('click', onBtnStartClick);
let selectedDate;


// function onBtnStartClick() {
//   refs.btnStart.disabled = true;
  
//    let intervalId = setInterval(() => {
//     const diff = convertMs(selectedDate - new Date());
//     if (selectedDate - new Date() < 1000) {
//       clearInterval(intervalId)
//     }
//     renderTimer(diff);
//   }, 1000)
// }

function onBtnStartClick() {
  refs.btnStart.disabled = true;

   let intervalId = setInterval(() => {
    const diff = convertMs(selectedDate - new Date());
    renderTimer(diff);
   }, 1000)
  
  setTimeout(() => {
    clearInterval(intervalId);
  }, selectedDate - new Date())
}

function renderTimer({days, hours, minutes, seconds}) {
  refs.dataDays.textContent = days;
  refs.dataHours.textContent = hours;
  refs.dataMinutes.textContent = minutes;
  refs.dataSeconds.textContent = seconds;
}