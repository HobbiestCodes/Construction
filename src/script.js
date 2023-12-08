const btn = document.querySelector('.btnMark');
const line = document.querySelector('.btnOpen');
const ulList = document.querySelector('nav');
const content = document.querySelector('.main-content');

const office = document.querySelector('.office');

function clickMe() {
   let oN = btn.classList.toggle('cross');
   let oFF = line.classList.toggle('open');

   if(oN) {
    ulList.classList.toggle('on');
    content.classList.toggle('on')
   }
   if(!oN) {
    ulList.classList.toggle('on')
    content.classList.toggle('on')
   }

}

function OpenOffice() {
   office.classList.toggle('appear');
}
