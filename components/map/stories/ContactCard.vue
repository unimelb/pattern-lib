<template>
  <div class="contact-card">
    <div v-if="map" class="contact-card__map"
      data-latlng="-37.797377,144.961591"
      data-pin="-37.797484, 144.961638"
      data-width="1140"
      data-height="360"
      data-zoom="17"></div>
    <div class="contact-card__lower">
      <dl class="contact-card__col1_3" v-for="n in columns-0" :key="n" v-html="content[n-1]"></dl>
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
              <dt class="contact-card__title">Address</dt>
              <dd class="contact-card__detail">
                9th Floor, Raymond Priestley Building
                <br>
                The University of Melbourne
                <br>
                Victoria 3010 Australia
              </dd>

              <dt class="contact-card__detail--inline">Email:</dt>
              <dd class="contact-card__detail--inline"><a href="mailto:vc@unimelb.edu.au">vc@unimelb.edu.au</a></dd>
              <br>
              <dt class="contact-card__detail--inline">Phone:</dt>
              <dd class="contact-card__detail--inline"><a href="tel:613834461341">+61 3 8344 6134</a></dd>
              <br>
              <dt class="contact-card__detail--inline">Fax:</dt>
              <dd class="contact-card__detail--inline"><a href="tel:61393477253">+61 3 9347 7253</a></dd>
        `, `
              <dt class="contact-card__title">Executive Liaison</dt>
              <dd class="contact-card__detail">Ms Sally Hayes</dd>

              <dt class="contact-card__detail--inline">Email:</dt>
              <dd class="contact-card__detail--inline"><a href="mailto:sally.hayes@unimelb.edu.au">sally.hayes@unimelb.edu.au</a></dd>
              <br>
              <dt class="contact-card__detail--inline">Phone:</dt>
              <dd class="contact-card__detail--inline"><a href="tel:61383446134">+61 3 8344 6134</a></dd>
        `, `
              <dt class="contact-card__title">Executive Support Officer</dt>
              <dd class="contact-card__detail">Ms Amelia Phipps</dd>
              
              <dt class="contact-card__detail--inline">Email:</dt>
              <dd class="contact-card__detail--inline"><a href="mailto:phipps.a@unimelb.edu.au">phipps.a@unimelb.edu.au</a></dd>
              <br>
              <dt class="contact-card__detail--inline">Phone:</dt>
              <dd class="contact-card__detail--inline"><a href="tel:61383443741">+61 3 8344 3741</a></dd>
        `]
      };
    }
  }
</script>
