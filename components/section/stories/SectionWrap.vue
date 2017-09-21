<template>
  <section class="section" :class="bgColor" >
    <div class="section__inner" :class="{'section__inner--sml': small, 'section__inner--mid': mid, 'section__inner--short': short}">
      <slot />
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      short: Boolean,
      small: Boolean,
      mid: Boolean,
      bgColor: String
    }
  }
</script>