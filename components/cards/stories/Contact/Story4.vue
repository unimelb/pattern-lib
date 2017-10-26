<template>
  <ContactCard :columns="3" with-map />
</template>

<script>
import ContactCard from './ContactCard.vue';

export default {
  components: { ContactCard },
};
</script>

<docs>
# Notes
Use an iframe with `class="contact-card__map"` to embed the map.
</docs>
