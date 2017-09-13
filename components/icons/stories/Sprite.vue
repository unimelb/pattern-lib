<template>
  <div>
    <icon v-for="n in names" :key="n" :name="n" />
  </div>
</template>

<script>
  export default {
    data: () => ({
      names: [
        'chevron-right'
      ]
    })
  }
</script>

<style scoped>
  svg {
    width: 5rem;
    height: 5rem;
  }
</style>
