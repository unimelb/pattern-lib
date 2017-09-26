export default function(el, binding) {
  el.style.backgroundImage = `url(${binding.value.placeholder})`;
  el.className += 'lazy-bgimg--loading';

  const newImage = new Image();

  const loadImage = (url) => {
    newImage.src = url;
    newImage.onload = imageOnLoad;
    newImage.onerror = imageOnError;
  };

  const imageOnLoad = (success) => {
    el.style.backgroundImage = `url(${newImage.src})`;  
    el.classList.remove("lazy-bgimg--loading");
    el.className += ' lazy-bgimg--loaded';
  }

  const imageOnError = (error) => {
    el.classList.remove("lazy-bgimg--loading");
    el.className += ' lazy-bgimg--error';
  }

  if (!el.classList.contains('lazy-bgimg--loaded')) {
    loadImage(binding.value.imgSrc);
  }
}