<template>
	<div :style="computedStyle" class="lazy-bgimg" :class="loadingClass" :data-width="imageWidth" :data-height="imageHeight" :data-state="loadingClass">
		<slot />
	</div>
</template>

<script>
	export default {
		name: 'lazy-bgimg',
		props: {
			imgSrc: {
				type: String,
				default: '',
			},
			placeholder: {
				type: String,
				default: '',
			},
			errorImage: {
				type: String,
				default: '',
			}
		},
		data() {
		  return {
		    imageWidth: 0,
		    imageHeight: 0,
		    loadingClass: 'lazy-bgimg--loading',
		    newImage: new Image()
		  }
		},
		computed: {
			computedStyle() {
			  if (this.loadingClass === 'lazy-bgimg--loading') {
			    return `background-image: url(${this.placeholder});`;
			  }
			  if (this.loadingClass === 'lazy-bgimg--error') {
			  	return `background-image: url(${this.errorImage || this.placeholder});`;
			  }
			  if (this.loadingClass === 'lazy-bgimg--loaded') {
			    return `background-image: url(${this.newImage.src});`;
			  }
			  return '';
			}
		},
		methods: {
		  loadImage(url) {
		    this.newImage.onload = this.imageOnLoad;
		    this.newImage.onerror = this.imageOnError;
		    this.loadingClass = 'lazy-bgimg--loading';
		    this.newImage.src = this.imgSrc;
		  },
		  imageOnLoad(success) {
		    this.loadingClass = 'lazy-bgimg--loaded'
		    this.imageWidth =  this.newImage.naturalWidth;
		    this.imageHeight = this.newImage.naturalHeight;
		    // this.imageSuccessCallback();
		  },
		  imageOnError(error) {
		    this.loadingClass = 'lazy-bgimg--error';
		    // this.imageErrorCallback();
		  }
		},
		mounted() {
		  this.$nextTick(() => {
		    this.loadImage()
		  })
		}

	}
</script>