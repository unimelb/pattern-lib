<template>
  <div>
    <ul class="stats">
      <slot />
    </ul>
    <p v-if="attribution !== ''">{{attribution}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      attribution: {
        type: String
      }
    }
  }
</script>