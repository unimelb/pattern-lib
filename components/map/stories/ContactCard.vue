<template>
  <div class="contact-card">
    <div v-if="map" class="contact-card__map"
      data-latlng="-37.797377,144.961591"
      data-pin="-37.797484, 144.961638"
      data-width="1140"
      data-height="360"
      data-zoom="17"></div>
    <div class="contact-card__lower">
      <div class="contact-card__col1_3" v-for="n in columns-0" :key="n" v-html="content[n-1]"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      map: Boolean,
      columns: Number
    },

    data: () => {
      return {
        content: [`
              <div class="contact-card__title">Address</div>
              <div class="contact-card__detail">
                9th Floor, Raymond Priestley Building
                <br>
                The University of Melbourne
                <br>
                Victoria 3010 Australia
              </div>

              <span class="contact-card__detail--inline">Email:</span>
              <span class="contact-card__detail--inline"><a href="mailto:vc@unimelb.edu.au">vc@unimelb.edu.au</a></span>
              <br>
              <span class="contact-card__detail--inline">Phone:</span>
              <span class="contact-card__detail--inline"><a href="tel:613834461341">+61 3 8344 6134</a></span>
              <br>
              <span class="contact-card__detail--inline">Fax:</span>
              <span class="contact-card__detail--inline"><a href="tel:61393477253">+61 3 9347 7253</a></span>
        `, `
              <div class="contact-card__title">Executive Liaison</div>
              <div class="contact-card__detail">Ms Sally Hayes</div>

              <span class="contact-card__detail--inline">Email:</span>
              <span class="contact-card__detail--inline"><a href="mailto:sally.hayes@unimelb.edu.au">sally.hayes@unimelb.edu.au</a></span>
              <br>
              <span class="contact-card__detail--inline">Phone:</span>
              <span class="contact-card__detail--inline"><a href="tel:61383446134">+61 3 8344 6134</a></span>
        `, `
              <div class="contact-card__title">Executive Support Officer</div>
              <div class="contact-card__detail">Ms Amelia Phipps</div>
              
              <span class="contact-card__detail--inline">Email:</span>
              <span class="contact-card__detail--inline"><a href="mailto:phipps.a@unimelb.edu.au">phipps.a@unimelb.edu.au</a></span>
              <br>
              <span class="contact-card__detail--inline">Phone:</span>
              <span class="contact-card__detail--inline"><a href="tel:61383443741">+61 3 8344 3741</a></span>
        `]
      };
    }
  }
</script>
