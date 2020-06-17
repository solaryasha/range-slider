'use strict'
const wrapper = document.querySelector('.wrapper');
const minRange = document.querySelector('.left');
const maxRange = document.querySelector('.right');
const minValue = document.querySelector('.min-value');
const maxValue = document.querySelector('.max-value');

const startPoint = Math.ceil(minRange.getBoundingClientRect().left);
const endPoint = Math.ceil(maxRange.getBoundingClientRect().right - startPoint);

wrapper.addEventListener('click', e => {
  const distance = e.pageX - startPoint;
  const diffMin = Math.abs(distance - getProperInputNumber(minRange.value));
  const diffMax = Math.abs(distance - getProperInputNumber(maxRange.value));
  if (diffMin < diffMax) {
    minRange.value = getProperRange(distance);
    minValue.value = distance;
  } else {
    maxRange.value = getProperRange(distance);
    maxValue.value = distance;
  }
});

minRange.addEventListener('mousemove', onMouseMoveMin);
minRange.addEventListener('mouseup', e => {
  minRange.removeEventListener('mousemove', onMouseMoveMin);
});

maxRange.addEventListener('mousemove', onMouseMoveMax);
maxRange.addEventListener('mouseup', e => {
  maxRange.removeEventListener('mousemove', onMouseMoveMax);

})

minValue.addEventListener('input', e => {
  if (e.target.value < 0 ) {
    e.target.value = 0;
  }

  minRange.value = getProperRange(e.target.value);
});

maxValue.addEventListener('input', e => {
  if (e.target.value < 0 ) {
    e.target.value = 0;
  }
  maxRange.value = getProperRange(e.target.value);
  
});

const getProperRange = input => Math.floor((input / endPoint) * 100);
const getProperInputNumber = input => Math.floor(input * endPoint / 100);

function onMouseMoveMin (e) {
  if (minRange.value >= maxRange.value) {
    console(maxRange.dis)
    return;
  }
  minValue.value = (event.clientX - startPoint >= 0) 
  ? event.clientX - startPoint
  : 0;

  

  if (minValue.value > endPoint) {
    minValue.value = endPoint;
  }

  

}

function onMouseMoveMax (e) {
  maxValue.value = (e.clientX - startPoint <= endPoint) 
  ? event.clientX - startPoint
  : endPoint;

  if (maxValue.value < 0) {
    maxValue.value = 0;
  } 
}