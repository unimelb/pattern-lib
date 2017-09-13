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
