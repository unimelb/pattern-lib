<template>
  <blockquote class="blockquote" :class="{'blockquote--bdr-top' : bdrTop, 'blockquote--bdr-btm' : bdrBtm}">
    <span><slot /></span>
    <cite class="blockquote__author">{{author}}</cite>
  </blockquote>
</template>

<script>
  export default {
    props: {
      author: String,
      bdrTop: Boolean,
      bdrBtm: Boolean,
    }
  }
</script>