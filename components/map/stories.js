import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import GMaps from './gmaps';

maps_loaded_go = function() {
  for (let recs = document.querySelectorAll('[data-latlng],[data-address]'), i=recs.length - 1; i >= 0; i--)
    new GMaps(recs[i], {counter: i});
};


const data = {
  obj: GMaps,
  content: [`
        <dl id="contact" class="contact-card__col1_3">
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
        </dl>
`, `
        <dl id="executive-liaison" class="contact-card__col1_3">
          <dt class="contact-card__title">Executive Liaison</dt>
          <dd class="contact-card__detail">Ms Sally Hayes</dd>

          <dt class="contact-card__detail--inline">Email:</dt>
          <dd class="contact-card__detail--inline"><a href="mailto:sally.hayes@unimelb.edu.au">sally.hayes@unimelb.edu.au</a></dd>
          <br>
          <dt class="contact-card__detail--inline">Phone:</dt>
          <dd class="contact-card__detail--inline"><a href="tel:61383446134">+61 3 8344 6134</a></dd>
        </dl>
`, `
        <dl id="executive-support-officer" class="contact-card__col1_3">
          <dt class="contact-card__title">Executive Support Officer</dt>
          <dd class="contact-card__detail">Ms Amelia Phipps</dd>
          
          <dt class="contact-card__detail--inline">Email:</dt>
          <dd class="contact-card__detail--inline"><a href="mailto:phipps.a@unimelb.edu.au">phipps.a@unimelb.edu.au</a></dd>
          <br>
          <dt class="contact-card__detail--inline">Phone:</dt>
          <dd class="contact-card__detail--inline"><a href="tel:61383443741">+61 3 8344 3741</a></dd>
        </dl>
`]
};

Vue.component('contact-card', {
  template: `
  <div class="contact-card">
    <div v-if="map" class="contact-card__map"
      data-latlng="-37.797377,144.961591"
      data-pin="-37.797484, 144.961638"
      data-width="1140"
      data-height="360"
      data-zoom="17"></div>
    <div class="contact-card__lower" v-html="renderColumns(cols)"></div>
  </div>
`,
  props: [ 'cols', 'map' ],
  data: () => { return data },
  methods: {
    renderColumns: function(num) {
      let out = '';
      for (let i=0; i<num; i++)
        out += this.content[i];

      return out;
    }
  }
 });

storiesOf('Contact card', module)
  .add('One column', () =>   ({ template: `<contact-card cols="1"></contact-card>` }))
  .add('Two column', () =>   ({ template: `<contact-card cols="2"></contact-card>` }))
  .add('Three column', () => ({ template: `<contact-card cols="3"></contact-card>` }))
  .add('With map', () =>     ({ template: `<contact-card cols="3" map="true"></contact-card>` }));
