import Vue from 'vue';

// Register a global custom directive called v-focus

export default class LazyBgImg {
  constructor() {
    this.newImage = new Image();
    this.loadingClass = 'lazy-bgimg--loading';
    this.imageOnLoad = this.imageOnLoad.bind(this);
  }
  
  loadImage(url) {

    this.newImage.onload = this.imageOnLoad;
    this.newImage.onerror = this.imageOnError;
    this.loadingClass = 'lazy-bgimg--loading';
    this.newImage.src = url;
  }

  imageOnLoad(success) {
    console.log('test0');
    this.loadingClass = 'lazy-bgimg--loaded'
    this.imageWidth =  this.newImage.naturalWidth;
    this.imageHeight = this.newImage.naturalHeight;
  }

  imageOnError(error) {
    this.loadingClass = 'lazy-bgimg--error';
  }

}



Vue.directive('bgimg', {
  bind: (el, binding) => {
    const lazyBg = new LazyBgImg();
    lazyBg.loadImage(binding.value.imgSrc);
    
    if (binding.value.placeholder && lazyBg.loadingClass === 'lazy-bgimg--loading') {
      el.style = `background-image: url(${binding.value.placeholder})`;
    } 

  },
  update: (newValue, oldValue) => {
    console.log(oldValue)
    if (lazyBg.loadingClass === 'lazy-bgimg--loading') {
      newValue.style = `background-image: url(${binding.value.imgSrc})`;
    }
  }
});
