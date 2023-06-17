'use strict';

if( window.innerWidth >= 769) {
  let i = 0;
  const animTargetsA = document.querySelectorAll(".js-animTargetA");
  
  animTargetsA.forEach(animTargetA => {
    animTargetA.style.transitionDelay = 0 + i + 's';
    i += 0.3;
  });

  i = 0;
  const animTargetsB = document.querySelectorAll(".js-animTargetB");
  
  animTargetsB.forEach(animTargetB => {
    animTargetB.style.transitionDelay = 0 + i + 's';
    i += 0.3;
  });
}

function scrollObserver(elements, timimg) {
  const options = {
      root: null,
      rootMargin: `0px 0px ${timimg}px 0px`,
      threshold: [0]
  }

  function callback(entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('fadeIn');
          }
      });
  }

  const observer = new IntersectionObserver(callback, options);

  elements.forEach(element => {
      observer.observe(element);
  });
}

// DOM取得
const targetsPc = document.querySelectorAll('.js_scrollPc');
const targetsSp = document.querySelectorAll('.js_scrollSp');
const timelineItem = document.querySelectorAll('.js_scroll');
console.log(timelineItem);

if( window.innerWidth >= 769) {
  scrollObserver(targetsPc, -400); 
} else {
  scrollObserver(targetsSp, -200);
}

scrollObserver(timelineItem, -150);
