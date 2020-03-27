const nextSlid = (event) => {
  const currentSlid = $('.item--active');
  // получить следующий слайд
  const nextSlid = currentSlid.next('.item').length > 0 ? currentSlid.next('.item') : $('.slider .item').eq(0);

  // скрыть текущий слайд
  currentSlid.removeClass('item--active');

  // показать следующий слайд
  nextSlid.addClass('item--active');

  // переключить счетчик
  const currentNumber = nextSlid.index() < 10 ? `0${nextSlid.index()}` : nextSlid.index();
  $('.slider__count .cur').html(currentNumber);
};

const prevSlid = () => {
  const currentSlid = $('.item--active');
  // получить следующий слайд
  const nextSlid = currentSlid.prev('.item').length > 0 ? currentSlid.prev('.item') : $('.slider .item').last();

  // скрыть текущий слайд
  currentSlid.removeClass('item--active');

  // показать следующий слайд
  nextSlid.addClass('item--active');

  // переключить счетчик
  const currentNumber = nextSlid.index() < 10 ? `0${nextSlid.index()}` : nextSlid.index();
  $('.slider__count .cur').html(currentNumber);
};

const calcSlid = () => {
  // получить список всех слайдов
  const length = $('.slider .item').length < 10 ? `0${$('.slider .item').length}` : $('.slider .item').length;

  // задать значение в каунтере
  $('.slider__count .all').html(length);
};

export {nextSlid, prevSlid, calcSlid}