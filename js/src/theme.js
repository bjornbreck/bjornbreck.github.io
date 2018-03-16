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

  // let colors;
  let color = 0;
  let colors = [
    '#7a5650',
    '#435454',
    '#1d6b8b',
    '#f2a66f',
    '#e9683d',
    '#db3b29'
  ];

  let randomColorFour = colors[Math.floor(Math.random()*colors.length)];

  $('.color-text').click(function(e) {
    e.preventDefault();

    let randomColorOne = colors[Math.floor(Math.random()*colors.length)];
    let randomColorTwo = colors[Math.floor(Math.random()*colors.length)];
    let randomColorThree = colors[Math.floor(Math.random()*colors.length)];

    $(this).children().first().css('color', randomColorOne);
    $(this).children('.color-me:nth-child(2)').css('color', randomColorTwo);
    $(this).children('.color-me:nth-child(3)').css('color', randomColorThree);

  });


  $.ripple('.color-text', {
    // debug: false, // Turn Ripple.js logging on/off
    // on: 'e', // The event to trigger a ripple effect

    opacity: 0.9, // The opacity of the ripple
    color: randomColorFour, // Set the background color. If set to "auto", it will use the text color
    multi: true, // Allow multiple ripples per element

    // duration: 0.7, // The duration of the ripple

    // Filter function for modifying the speed of the ripple
    // rate: function(pxPerSecond) {
    //   return pxPerSecond;
    // },

    easing: 'linear' // The CSS3 easing function of the ripple
  });

  // let randomColorThree = colors[Math.floor(Math.random()*colors.length)];



});