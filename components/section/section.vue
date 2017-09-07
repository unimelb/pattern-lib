<template>
  <section class="section">
    <div class="section__inner max">
      <!-- Content goes here -->
      <slot>
        <h3>Default Content</h3>
        <p>this is the inner paragraph</p>
      </slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Section'
  } 
</script>