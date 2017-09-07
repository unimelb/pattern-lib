<template>
  <section class="split-section">
    <div class="split-section__side" :class="{'split-section__side--with-image': imageLeft}" :style="{backgroundImage: `src(${bgImage})`}">
      <div class="split-section__inner">
        <slot name="content-side-1"></slot>
      </div>
    </div>
    <div class="split-section__side" :class="{'split-section__side--with-image': imageRight}" :style="{backgroundImage: `src(${bgImage})`}">
      <div class="split-section__inner">
        <slot name="content-side-2"></slot>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'SplitSection',
    data: {
      imageLeft: false,
      imageRight: false,
      bgImage: 'http://lorempixel.com/800/400/',
    }
  } 
</script>