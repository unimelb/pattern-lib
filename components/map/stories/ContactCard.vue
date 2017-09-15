<template>
  <div class="contact-card">
    <map :center="center" :zoom="7"></map>
    <div class="contact-card__lower">
      <div class="contact-card__col1_3" v-for="n in columns-0" :key="n" v-html="content[n-1]"></div>
    </div>
  </div>
</template>

<script>
  import content from './content';
  import {load, Map, Marker} from 'vue-google-maps';
  load({key: 'AIzaSyCN3Soebworjm6dilkDjyRapS0m4i-kfCI'});

  export default {
    props: {
      columns: Number
    },
    data: () => {
      return {
        center: { lat: -37.797377, lng: 144.961591 },
        content: content
      };
    }
  }
</script>
