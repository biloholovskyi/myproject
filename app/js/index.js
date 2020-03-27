import 'normalize.css';
import {nextSlid, prevSlid, calcSlid} from "./slider";

$(document).ready(function(){
  calcSlid();

	$('.slider__nav .next').on('click', (event) => nextSlid(event));
	$('.slider__nav .prev').on('click', (event) => prevSlid(event));
});

$(window).resize(function () {

});