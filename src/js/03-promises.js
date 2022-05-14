import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
}

refs.form.addEventListener('submit', onclickBtn);

function onclickBtn(e) {
  e.preventDefault();
  let delay = Number(refs.form.delay.value);
  let step = Number(refs.form.step.value);
  let amount = Number(refs.form.amount.value);
  
  getPromises (delay, step, amount)
}
  
function getPromises (delay, step, amount) {
  for (let i = 1; i <= amount; i += 1) {
    
    let position = i;
    createPromise(position, delay)
    delay += step;
  }
}  

function createPromise(position, delay) {
 
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3; 
      
      setTimeout(() => {
         
      if (shouldResolve) {
    // Fulfill
       resolve({ position,delay, })
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
      reject ({ position, delay, }) 
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        } 
         
    }, delay)  
  })
  
}

Promise.all(getPromises)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
