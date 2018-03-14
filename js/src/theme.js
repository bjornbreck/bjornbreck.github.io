import $ from 'jquery';
import tippy from 'tippy.js';

let tooltip = $('.tooltip');
let tipInfo = $('.tipInfo');

$(document).ready(function () {
  // tippy(tooltip);
  tippy('.tooltipMe', {
    html: document.querySelector('.myFace'), // Direct element option
    arrow: true,
    arrowType: 'sharp',
    inertia: true,
    animation: 'shift-away',
    distance: 15,
    theme: 'awesome',
    arrowTransform: 'scale(2)',
    sticky: true
  });

  tippy('.tooltipLocation', {
    html: document.querySelector('.myLocation'),
    arrow: true,
    arrowType: 'sharp',
    inertia: true,
    animation: 'shift-away',
    distance: 15,
    theme: 'awesome',
    arrowTransform: 'scale(2)',
    trigger: 'click',
    sticky: true,
    interactive: true
  });

  tippy('.tooltipRealLocation', {
    arrow: true,
    arrowType: 'sharp',
    inertia: true,
    animation: 'shift-away',
    distance: 15,
    theme: 'awesome',
    arrowTransform: 'scale(2)',
    sticky: true
  });

  tippy('.tooltipMountainBking', {
    html: document.querySelector('.mountainBiking'),
    arrow: true,
    arrowType: 'sharp',
    inertia: true,
    animation: 'shift-away',
    distance: 15,
    theme: 'awesome',
    arrowTransform: 'scale(2)',
    sticky: true
  });

  tippy('.tooltipJam', {
    html: document.querySelector('.jam'),
    arrow: true,
    arrowType: 'sharp',
    inertia: true,
    animation: 'shift-away',
    distance: 15,
    theme: 'awesome',
    arrowTransform: 'scale(2)',
    sticky: true
  });

  tippy('.tooltipNeature', {
    html: document.querySelector('.neature'),
    arrow: true,
    arrowType: 'sharp',
    inertia: true,
    animation: 'shift-away',
    distance: 15,
    theme: 'awesome',
    arrowTransform: 'scale(2)',
    trigger: 'click',
    sticky: true,
    interactive: true
  });

  let colors;
  let color = 0;
  
  $('.color-text').click(function(e) {
    e.preventDefault();

    let colors = [
      '#7a5650',
      '#435454',
      '#1d6b8b',
      '#f2a66f',
      '#e9683d',
      '#db3b29'
    ];

    let randomColorOne = colors[Math.floor(Math.random()*colors.length)];
    let randomColorTwo = colors[Math.floor(Math.random()*colors.length)];

    $(this).children().first().css('color', randomColorOne);
    $(this).children().last().css('color', randomColorTwo);
  })


});