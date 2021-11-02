
// $leftArrow = $('#left-arrow-btn');
// $leftArrow.onClick(slide('left', 25, ));

// $righttArrow = $('#right-arrow-btn');
// $righttArrow.onClick(slide());

const slide = (sliderId, direction, width, step) => {
  let container = document.getElementById(`${sliderId}`);
  if (direction === 'right') {
    container.scrollLeft += step;
  } else {
    container.scrollLeft -= step;
  }
}

export default slide;