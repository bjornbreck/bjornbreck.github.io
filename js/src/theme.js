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
    arrowTransform: 'scale(2)'
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
    trigger: 'click'
  });

  tippy('.tooltipRealLocation', {
    arrow: true,
    arrowType: 'sharp',
    inertia: true,
    animation: 'shift-away',
    distance: 15,
    theme: 'awesome',
    arrowTransform: 'scale(2)'
  });

  tippy('.tooltipMountainBking', {
    html: document.querySelector('.mountainBiking'),
    arrow: true,
    arrowType: 'sharp',
    inertia: true,
    animation: 'shift-away',
    distance: 15,
    theme: 'awesome',
    arrowTransform: 'scale(2)'
  });

  tippy('.tooltipJam', {
    html: document.querySelector('.jam'),
    arrow: true,
    arrowType: 'sharp',
    inertia: true,
    animation: 'shift-away',
    distance: 15,
    theme: 'awesome',
    arrowTransform: 'scale(2)'
  })
});