'use strict'

const minRange = document.querySelector('.left');
const maxRange = document.querySelector('.right');
const minValue = document.querySelector('.min-value');
const maxValue = document.querySelector('.max-value');

const startPoint = Math.ceil(minRange.getBoundingClientRect().left);
const endPoint = Math.ceil(maxRange.getBoundingClientRect().right - maxRange.getBoundingClientRect().left);
console.log(endPoint);

minRange.addEventListener('mousedown', e => {
const shiftX = (event.clientX -startPoint >= 0)
  ? event.clientX -startPoint
  : 0;

  minRange.addEventListener('mousemove', onMouseMoveMin);
  

  minValue.value = shiftX;
});

maxRange.addEventListener('mousemove', onMouseMoveMax);

const onMouseMoveMin = e => {
  minValue.value = (event.clientX -startPoint >= 0) 
  ? event.clientX -startPoint
  : 0;
}

function onMouseMoveMax (e) {
  maxValue.value = (e.clientX - startPoint <= endPoint) 
  ? event.clientX - startPoint
  : endPoint;
}

minValue.addEventListener('input', e => {
  if (e.target.value < 0 ) {
    e.target.value = 0;
  }

  minRange.value = Math.floor((e.target.value / endPoint)*100);
});

maxValue.addEventListener('input', e => {
  if (e.target.value < 0 ) {
    e.target.value = 0;
  }
  maxRange.value = Math.floor((e.target.value / endPoint) * 100);
  
});

console.log(maxRange.value);
