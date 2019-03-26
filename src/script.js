let w = window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

let h = window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;


window.addEventListener('load', function () {
  changeOnMobile()
}, false);


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

function changeOnMobile() {
  let mobileV = document.querySelector('.desktop');
  if (viewportWidth > 768) {
    mobileV.classList.add('desktop');
    mobileV.classList.add('hidden-xs');
    mobileV.classList.remove('mobile');
    mobileV.classList.remove('visible-xs');
  } else {
    console.log('Small viewport');
    mobileV.classList.add('mobile');
    mobileV.classList.add('visible-xs');
    mobileV.classList.remove('desktop');
    mobileV.classList.remove('hidden-xs');

    mobileV.classList.add('myModal-mobile-content');
    mobileV.classList.remove('myModal-content');
  }

};