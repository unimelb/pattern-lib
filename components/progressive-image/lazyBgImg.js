export default function lazyBgImg(el, binding) {
  el.style.backgroundImage = `url(${binding.value.placeholder})`;
  el.classList.add('lazy-bgimg--loading');

  const newImage = new Image();

  if (!el.classList.contains('lazy-bgimg--loaded')) {
    newImage.src = binding.value.imgSrc;
    newImage.onload = imageOnLoad;
    newImage.onerror = imageOnError;
  }

  function imageOnLoad() {
    el.style.backgroundImage = `url(${newImage.src})`;
    el.classList.remove('lazy-bgimg--loading');
    el.classList.add('lazy-bgimg--loaded');
  }

  function imageOnError() {
    el.classList.remove('lazy-bgimg--loading');
    el.classList.add('lazy-bgimg--error');
  }
}
