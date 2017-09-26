<template>
  
  <header class="banner banner--l1" v-if="level === 1">
    <div class="banner__inner max">
      <a class="link-img link-reset" href="https://www.unimelb.edu.au">
        <img alt="The University of Melbourne homepage" class="banner__logo" height="117" src="https://d2glwx35mhbfwf.cloudfront.net/v0.0.1/logo-unhoused.svg" width="117"></a>
      <h1 class="banner__heading">
        {{title}}
      </h1>
    </div>
    <div 
      class="banner__img banner__aperture "
      :style="`background-image': url('${placeholder}');`" 
      v-bgimg="{'imgSrc': img, 'placeholder': placeholder}" 
    ></div>
  </header>

  <header class="banner banner--l2" :class="subheading.length > 0 ? 'banner--subheading' : ''" v-else-if="level === 2">
    <div class="banner__inner max">
      <a class="link-img link-reset" href="https://www.unimelb.edu.au">
        <img alt="The University of Melbourne homepage" class="banner__logo" height="117" src="https://d2glwx35mhbfwf.cloudfront.net/v0.0.2/logo-unhoused.svg" width="117">
      </a>
      <p v-if="subheading.length > 0" class="banner__sub-heading">
        {{subheading}}
      </p>
      <h1 class="banner__heading">
        {{title}}
      </h1>
    </div>
    <div class="banner__img banner__aperture" :style="`background-image: url(${img});`"></div>
  </header>

  <header class="banner banner--l3" v-else-if="level === 3">
    <div class="banner__shape"></div>
    <div class="banner__inner max">
      <a class="link-img link-reset" href="https://www.unimelb.edu.au">
        <img alt="The University of Melbourne homepage" class="banner__logo" height="117" src="https://d2glwx35mhbfwf.cloudfront.net/v0.0.2/logo-unhoused.svg" width="117">
      </a>
    </div>
  </header>
  
</template>

<script>

  export default {
    props: {
      level: {
        type: Number,
        default: 1,
      },
      title: {
        type: String,
        default: "About us"
      },
      subheading: {
        type: String,
        default: ""
      },
      img: {
        type: String,
        default: "https://placeimg.com/990/530/arch/1"
      },
    }
  }
</script>