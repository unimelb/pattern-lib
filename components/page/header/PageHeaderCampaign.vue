<template>
  <div class="page-header--campaign" :style="`background-image: url(${img})`">
    <header class="page-header page-header--l2 page-header--no-logo">
      <div class="page-header--center">
        <div class="max max--xsml text-center shim-pb2">
          <h1 v-if="title" class="shim-mb1">{{title}}</h1>
          <h3 v-if="subTitle" class="shim-mb2">{{ subTitle }}</h3>
          <a v-if="buttonText" class="btn btn--inverted" :href="link">
            <span class="push-icon">
              {{buttonText}}
              <svg
                width="15px"
                height="15px"
                focusable="false"
                role="presentation"
                class="push-icon__icon"
              >
                <use xlink:href="#icon-chevron-right"></use>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    buttonText: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    }
  }
};
</script>
