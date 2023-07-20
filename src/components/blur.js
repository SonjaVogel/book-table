export function addBlurEffect(selector) {
  const el = document.querySelector(selector);
  const containerEl = el.querySelector('.specials');

  function updateBlur() {
    if (el.scrollWidth > el.clientWidth && el.scrollLeft < (el.scrollWidth - el.clientWidth)) {
      el.classList.add('show-blur');
    } else {
      el.classList.remove('show-blur');
    }
  }

  updateBlur();
  el.addEventListener('scroll', updateBlur);
  window.addEventListener('resize', updateBlur);
}