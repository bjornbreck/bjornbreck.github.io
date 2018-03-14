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

    if (colors < 6) {
      colors++;
    } else if (colors < 6) {

    }
    else {
      colors = 0;
    }

    // console.log(colors);
    // console.log(color);

    switch(colors) {
      case 0:
        color = '#7a5650';
        break;
      case 1:
        color = '#435454';
        break;
      case 2:
        color = '#1d6b8b';
        break;
      case 3:
        color = '#f2a66f';
        break;
      case 4:
        color = '#e9683d';
        break;
      case 5:
        color = '#db3b29';
        break;
    }
    $(this).css('color', color);
    // $(this).children().first().css('color', color);
    // $(this).children().last().css('color', color);
  })


});