<template>
  <div @click="preventClicks">
    <p>Lorem ipsum dolor, sit amet <a href="/foo" target="_blank">consectetur adipisicing (External link)</a>. Praesentium quae tempora perferendis dolores fuga libero beatae blanditiis <a href="/foo" target="_blank" class="link-icon--disable">consectetur adipisicing (External link no icon class)</a>. debitis consectetur eligendi reiciendis optio voluptatum, quam, illo vel quos aut hic labore! Lorem ipsum dolor, sit amet <a href="/foo">consectetur (not visited)</a> adipisicing elit. Praesentium quae tempora perferendis dolores fuga libero beatae blanditiis <a href="/">debitis consectetur eligendi voluptatum (visited)</a>, quam, illo vel quos aut hic labore!</p>
  </div>
</template>

<script>
module.exports = {
  methods: {
    preventClicks: (evt) => {
      evt.preventDefault();
    },
  },
};
</script>
