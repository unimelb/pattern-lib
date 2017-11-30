<template>
  <div class="welcome">
    <div class="welcome__thumb">
      <figure>
        <div class="welcome__thumb-img" :style="`background-image: url('${img}')`" > </div>
        <figcaption>
          <h6 class="welcome__caption-title">{{ name }}</h6>
        </figcaption>
      </figure>
      <p v-if="captionText && captionText.length > 0" class="welcome__caption-text"> {{ captionText }}</p>
      <ButtonIcon v-if="btnText && btnText.length > 0" icon="chevron-right" class="btn--xsml">{{ btnText }}</ButtonIcon>
    </div>
    <div class="welcome__inner ">
      <slot></slot>
      <img class="welcome__signature" :src="signature" alt="signature">
      <h6>{{ name }}</h6>
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: '//about-us-unimelb.netlify.com/images/leadership/senior-leadership/Glyn-Davis.jpg',
    },
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    captionText: {
      type: String,
    },
    btnText: {
      type: String,
    },
    signature: {
      type: String,
      default: '//about-us-unimelb.netlify.com/images/leadership/office-of-the-vice-chancellor/signature.png',
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
