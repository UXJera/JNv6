// $(document).ready(function() {
//   $('.sub-nav').on('click', function() {
//     $('.page-wrapper').toggleClass('isOpen');
//   });
//   $('.closing').on('click', function() {
//     $('.page-wrapper').toggleClass('isOpen');
//   });
// });

const subnav = document.getElementByClass('sub-nav');
const closing = document.getElementByClass('closing');
const pageWrapper = document.getElementByClass('page-wrapper');
subnav.addEventListener('click', toggleOpen());

function toggleOpen() {
  if (pageWrapper.classList) {
    pageWrapper.classList.toggle(isOpen);
  } else {
    let classes = pageWrapper.className.split(' ');
    let existingIndex = classes.indexOf(isOpen);

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);

    pageWrapper.className = classes.join(' ');
  }
}
