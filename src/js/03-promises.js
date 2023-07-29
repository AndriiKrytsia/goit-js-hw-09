import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form')
}

refs.form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
if (shouldResolve) {
    resolve({position, delay})
  } else {
      reject({position, delay})
  }
    }, delay)
  })
}

function onFormSubmit(e) {
  e.preventDefault()

  const firstDelay = +e.target.elements.delay.value;
  const delayStep = +e.target.elements.step.value;
  const amount = +e.target.elements.amount.value;
  for (let i = 0; i < amount; i += 1){
    createPromise(i + 1, firstDelay + delayStep * i)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
}
  
