<template>
  <div>
    <div
      v-for="c in classes"
      :key="c">
      <h1 :class="c">"{{ c }}" on &lt;h1&gt;</h1>
      <h2 :class="c">"{{ c }}" on &lt;h2&gt;</h2>
      <h3 :class="c">"{{ c }}" on &lt;h3&gt;</h3>
      <h4 :class="c">"{{ c }}" on &lt;h4&gt;</h4>
      <h5 :class="c">"{{ c }}" on &lt;h5&gt;</h5>
      <h6 :class="c">"{{ c }}" on &lt;h6&gt;</h6>
      <p :class="c">"{{ c }}" on &lt;p&gt;</p>
      <div :class="c">"{{ c }}" on &lt;div&gt;</div>
      <strong :class="c">"{{ c }}" on &lt;strong&gt;</strong>
      <span :class="c">"{{ c }}" on &lt;span&gt;</span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    classes: ['heading-page', 'heading-page-sub', 'heading-section', 'heading-card'],
  }),
};
</script>
