'use strict'

const minRange = document.querySelector('.left');
const maxRange = document.querySelector('.right');
const minValue = document.querySelector('.min-value');
const maxValue = document.querySelector('.max-value');

const startPoint = Math.ceil(minRange.getBoundingClientRect().left);

minRange.addEventListener('mousedown', e => {
const shiftX = (event.clientX -startPoint >= 0)
  ? event.clientX -startPoint
  : 0;
minValue.value = shiftX;
});

maxRange.addEventListener('mousedown', e => {
const shiftX = (event.clientX -startPoint >= 0)
  ? event.clientX -startPoint
  : 0;
maxValue.value = shiftX;
});

