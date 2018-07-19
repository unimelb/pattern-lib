<template>
  <div class="welcome">
    <div class="welcome__thumb">
      <figure>
        <div
          :style="`background-image: url('${img}')`"
          class="welcome__thumb-img" />
        <figcaption>
          <strong class="welcome__caption-title">{{ name }}</strong>
        </figcaption>
      </figure>
      <p
        v-if="captionText && captionText.length > 0"
        class="welcome__caption-text"> {{ captionText }}</p>
      <ButtonIcon
        v-if="btnText && btnText.length > 0"
        icon="chevron-right"
        class="btn--xsml">{{ btnText }}</ButtonIcon>
    </div>
    <div class="welcome__inner ">
      <slot/>
      <img
        :src="signature"
        class="welcome__signature"
        alt="signature">
      <p>
        <strong>{{ name }}</strong>
        <br>
        {{ title }}
      </p>
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
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    captionText: {
      type: String,
      default: '',
    },
    btnText: {
      type: String,
      default: '',
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
