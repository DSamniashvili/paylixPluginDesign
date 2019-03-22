let myInput = document.querySelector('.myModal-main-second-num2-input');
// console.log(myInput);

// function checkIfNotEmpty(e) {
//     e.preventDefault();
//     if(myInput.length > 0) {
//         console.log(myInput);
//     }
// }

const form = document.querySelector('form')
form.addEventListener('submit', evt => {
  evt.preventDefault()

})

const value = input.value.trim();
input.addEventListener('input', evt => {
  const value = input.value.trim()
  if (value) {
    input.dataset.state = 'valid'
    myInput.classList.add('purple')
  } else {
    input.dataset.state = 'invalid'
  }
})