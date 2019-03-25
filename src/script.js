// let myInput = document.querySelector('.myModal-main-second-num2-input');
// // console.log(myInput);

// // function checkIfNotEmpty(e) {
// //     e.preventDefault();
// //     if(myInput.length > 0) {
// //         console.log(myInput);
// //     }
// // }

// const form = document.querySelector('form')
// form.addEventListener('submit', evt => {
//   evt.preventDefault()

// })

// const value = input.value.trim();
// input.addEventListener('input', evt => {
//   const value = input.value.trim()
//   if (value) {
//     input.dataset.state = 'valid'
//     myInput.classList.add('purple')
//   } else {
//     input.dataset.state = 'invalid'
//   }
// })

function addClassFunc() {
  let checkWrapper = document.querySelector('.check-wrapper');
  let firstPage = document.querySelector('.first-page');
  let myModalContent = document.querySelector('.myModal-content');

  checkWrapper.classList.add('shown');
  checkWrapper.classList.remove('hidden');

  firstPage.classList.add('hidden');
  firstPage.classList.remove('shown');
  myModalContent.classList.add('myModal-big-content');

  
}


function changeClass() {
  let niceToMeet = document.querySelector('.nice-to-meet');
  let checkWrapper = document.querySelector('.check-wrapper');

  niceToMeet.classList.add('shown');
  niceToMeet.classList.remove('hidden');

  checkWrapper.classList.add('hidden');
  checkWrapper.classList.remove('shown');
}

function goToCart() {
  let checkWrapper = document.querySelector('.check-wrapper');
  let cartWrapper = document.querySelector('.cart-wrapper-approved');
  
  checkWrapper.classList.add('hidden');
  checkWrapper.classList.remove('shown');

  cartWrapper.classList.add('shown');
  cartWrapper.classList.remove('hidden');
}

function showDeclined() {
  let cartWrapperApproved = document.querySelector('.cart-wrapper-approved');
  let declinedWreapper = document.querySelector('.cart-wrapper-declined');

  cartWrapperApproved.classList.add('hidden');
  cartWrapperApproved.classList.remove('shown');

  declinedWreapper.classList.add('shown');
  declinedWreapper.classList.remove('hidden');
}