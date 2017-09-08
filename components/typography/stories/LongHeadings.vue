<template>
  <div style="max-width: 25rem;">
    <h1>This is a long element-based heading 1</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div style="max-width: 15rem;">
      <h2>This is a long element-based heading 2</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <h3>This is a long element-based heading 3</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <h4>This is a long element-based heading 4</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div style="max-width: 10rem;">
        <h5>This is a long element-based heading 5</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <h6>This is a long element-based heading 6</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div v-for="c in classes" :key="c">
        <h2 :class="c">This is a long class-based heading {{ c }}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      classes: Array
    }
  }
</script>
