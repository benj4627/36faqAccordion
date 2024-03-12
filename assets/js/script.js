//Fanger alle .accordionTitle elementer. De bliver tildelt variablen accordionEl.
let accordionsEl = document.querySelectorAll('.accordionTitle');
// let plusImgsEl = document.querySelectorAll('.plusSign img');

//looper igennem accordions og tildeler click event. 
//Når man klikker, skiftes der mellem class .active, som viser content af accordion. 
accordionsEl.forEach((accordionEl) => {
  accordionEl.addEventListener('click', () => {
    accordionEl.classList.toggle('active');

    // if (accordionItem.classList.contains('active')) {
    //     plusSignImg.src = './assets/images/icon-minus.svg';
    //   } else {
    //     plusSignImg.src = './assets/images/icon-plus.svg';
    //   }
  });
});