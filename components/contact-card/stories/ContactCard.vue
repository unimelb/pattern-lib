<template>
  <div class="contact-card">
    <iframe
      class="contact-card__map"
      width="1140"
      height="450"
      frameborder="0"
      style="border:0"
      :src="`https://www.google.com/maps/embed/v1/place?q=Raymond Priestley Building, Parkville VIC 3052&amp;zoom=16&amp;key=${gmapsKey}`"
    ></iframe>
    <div class="contact-card__lower">
      <div class="contact-card__col1_3" v-for="n in columns-0" :key="n" v-html="content[n-1]"></div>
    </div>
  </div>
</template>

<script>
  import content from './content';

  export default {
    props: {
      columns: Number
    },
    data: () => {
      return {
        content: content,
        gmapsKey: process.env.GMAPS_KEY
      };
    }
  }
</script>
