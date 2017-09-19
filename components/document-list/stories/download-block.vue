<template>
  <a href="#" class="btn-owner download-block">
    <div class="download-block__thumb">
      <img :src="imgSrc" alt="" class="download-block__img">
    </div>
    <div class="download-block__inner">
      <h3>{{header}}</h3>
      <button-icon>{{btnText}}</button-icon>
      <p class="metadata">File Name | 2.2mb | Fileformat</p>
    </div>
  </a>
</template>

<script>
  import ButtonIcon from './../../buttons/stories/ButtonIcon.vue';

  export default {
    components: {
      ButtonIcon,
    },
    props: {
      imgSrc: {
        type: String,
        default: ""
      },
      header: {
        type: String,
        default: ""
      },
      btnText: {
        type: String,
        default: "Download"
      }
    }
  }
</script>