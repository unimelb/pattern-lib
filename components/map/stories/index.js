import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withNotes } from '@storybook/addon-notes';

import ContactCard from './ContactCard.vue';

const GMAPSJSAPIKEY = 'AIzaSyCN3Soebworjm6dilkDjyRapS0m4i-kfCI';

storiesOf('Contact card', module)
  .add(
    'One column', 
    withNotes(
      `<div><style>pre{background-color:#444;color:#eee}</style><h2>Contact card, One column</h2><pre><code>
  
  &lt;div class="contact-card"&gt;
    &lt;div class="contact-card__lower"&gt;
      &lt;div class="contact-card__col1_3"&gt;
        &lt;div class="contact-card__title"&gt;Address&lt;/div&gt;
        &lt;div class="contact-card__detail"&gt;
          9th Floor, Raymond Priestley Building
          &lt;br&gt;
          The University of Melbourne
          &lt;br&gt;
          Victoria 3010 Australia
        &lt;/div&gt;
        &lt;span class="contact-card__detail--inline"&gt;Email:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="mailto:vc@unimelb.edu.au"&gt;vc@unimelb.edu.au&lt;/a&gt;&lt;/span&gt;
        &lt;br&gt;
        &lt;span class="contact-card__detail--inline"&gt;Phone:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="tel:613834461341"&gt;+61 3 8344 6134&lt;/a&gt;&lt;/span&gt;
        &lt;br&gt;
        &lt;span class="contact-card__detail--inline"&gt;Fax:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="tel:61393477253"&gt;+61 3 9347 7253&lt;/a&gt;&lt;/span&gt;
      &lt;/dl&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code></pre></div>`)
    (() =>   ({
      components: { ContactCard },
      template: `<contact-card :columns="1" />`
    }))
  )

  .add(
    'Two column', 
    withNotes(
      `<div><style>pre{background-color:#444;color:#eee}</style><h2>Contact card, Two column</h2><pre><code>
  
  &lt;div class="contact-card"&gt;
    &lt;div class="contact-card__lower"&gt;
      &lt;div class="contact-card__col1_3"&gt;
        &lt;div class="contact-card__title"&gt;Address&lt;/div&gt;
        &lt;div class="contact-card__detail"&gt;
          9th Floor, Raymond Priestley Building
          &lt;br&gt;
          The University of Melbourne
          &lt;br&gt;
          Victoria 3010 Australia
        &lt;/div&gt;
        &lt;span class="contact-card__detail--inline"&gt;Email:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="mailto:vc@unimelb.edu.au"&gt;vc@unimelb.edu.au&lt;/a&gt;&lt;/span&gt;
        &lt;br&gt;
        &lt;span class="contact-card__detail--inline"&gt;Phone:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="tel:613834461341"&gt;+61 3 8344 6134&lt;/a&gt;&lt;/span&gt;
        &lt;br&gt;
        &lt;span class="contact-card__detail--inline"&gt;Fax:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="tel:61393477253"&gt;+61 3 9347 7253&lt;/a&gt;&lt;/span&gt;
      &lt;/dl&gt;
      &lt;div class="contact-card__col1_3"&gt;
        &lt;div class="contact-card__title"&gt;Executive Liaison&lt;/div&gt;
        &lt;div class="contact-card__detail"&gt;Ms Sally Hayes&lt;/div&gt;
        &lt;span class="contact-card__detail--inline"&gt;Email:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="mailto:sally.hayes@unimelb.edu.au"&gt;sally.hayes@unimelb.edu.au&lt;/a&gt;&lt;/span&gt;
        &lt;br&gt;
        &lt;span class="contact-card__detail--inline"&gt;Phone:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="tel:61383446134"&gt;+61 3 8344 6134&lt;/a&gt;&lt;/span&gt;
      &lt;/dl&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code></pre></div>`)
    (() =>   ({
      components: { ContactCard },
      template: `<contact-card :columns="2" />`
    }))
  )

  .add(
    'Three column',
    withNotes(
      `<div><style>pre{background-color:#444;color:#eee}</style><h2>Contact card, Three column</h2><pre><code>
  
  &lt;div class="contact-card"&gt;
    &lt;div class="contact-card__lower"&gt;
      &lt;div class="contact-card__col1_3"&gt;
        &lt;div class="contact-card__title"&gt;Address&lt;/div&gt;
        &lt;div class="contact-card__detail"&gt;
          9th Floor, Raymond Priestley Building
          &lt;br&gt;
          The University of Melbourne
          &lt;br&gt;
          Victoria 3010 Australia
        &lt;/div&gt;
        &lt;span class="contact-card__detail--inline"&gt;Email:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="mailto:vc@unimelb.edu.au"&gt;vc@unimelb.edu.au&lt;/a&gt;&lt;/span&gt;
        &lt;br&gt;
        &lt;span class="contact-card__detail--inline"&gt;Phone:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="tel:613834461341"&gt;+61 3 8344 6134&lt;/a&gt;&lt;/span&gt;
        &lt;br&gt;
        &lt;span class="contact-card__detail--inline"&gt;Fax:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="tel:61393477253"&gt;+61 3 9347 7253&lt;/a&gt;&lt;/span&gt;
      &lt;/dl&gt;
      &lt;div class="contact-card__col1_3"&gt;
        &lt;div class="contact-card__title"&gt;Executive Liaison&lt;/div&gt;
        &lt;div class="contact-card__detail"&gt;Ms Sally Hayes&lt;/div&gt;
        &lt;span class="contact-card__detail--inline"&gt;Email:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="mailto:sally.hayes@unimelb.edu.au"&gt;sally.hayes@unimelb.edu.au&lt;/a&gt;&lt;/span&gt;
        &lt;br&gt;
        &lt;span class="contact-card__detail--inline"&gt;Phone:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="tel:61383446134"&gt;+61 3 8344 6134&lt;/a&gt;&lt;/span&gt;
      &lt;/dl&gt;
      &lt;div class="contact-card__col1_3"&gt;
        &lt;div class="contact-card__title"&gt;Executive Support Officer&lt;/div&gt;
        &lt;div class="contact-card__detail"&gt;Ms Amelia Phipps&lt;/div&gt;
        &lt;span class="contact-card__detail--inline"&gt;Email:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="mailto:phipps.a@unimelb.edu.au"&gt;phipps.a@unimelb.edu.au&lt;/a&gt;&lt;/span&gt;
        &lt;br&gt;
        &lt;span class="contact-card__detail--inline"&gt;Phone:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="tel:61383443741"&gt;+61 3 8344 3741&lt;/a&gt;&lt;/span&gt;
      &lt;/dl&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code></pre></div>`)
    (() => ({
      components: { ContactCard },
      template: `<contact-card :columns="3" />`
    }))
  )

  .add(
    'With map',
    withNotes(
      `<div><style>pre{background-color:#444;color:#eee}</style><h2>Contact card, Three column with map</h2><pre><code>

  &lt;div class="contact-card"&gt;
    &lt;div class="contact-card__map"
      data-latlng="-37.797377,144.961591"
      data-pin="-37.797484, 144.961638"
      data-width="1140"
      data-height="360"
      data-zoom="17"&gt;
    &lt;/div&gt;
    &lt;div class="contact-card__lower"&gt;
      &lt;div class="contact-card__col1_3"&gt;
        &lt;div class="contact-card__title"&gt;Address&lt;/div&gt;
        &lt;div class="contact-card__detail"&gt;
          9th Floor, Raymond Priestley Building
          &lt;br&gt;
          The University of Melbourne
          &lt;br&gt;
          Victoria 3010 Australia
        &lt;/div&gt;
        &lt;span class="contact-card__detail--inline"&gt;Email:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="mailto:vc@unimelb.edu.au"&gt;vc@unimelb.edu.au&lt;/a&gt;&lt;/span&gt;
        &lt;br&gt;
        &lt;span class="contact-card__detail--inline"&gt;Phone:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="tel:613834461341"&gt;+61 3 8344 6134&lt;/a&gt;&lt;/span&gt;
        &lt;br&gt;
        &lt;span class="contact-card__detail--inline"&gt;Fax:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="tel:61393477253"&gt;+61 3 9347 7253&lt;/a&gt;&lt;/span&gt;
      &lt;/dl&gt;
      &lt;div class="contact-card__col1_3"&gt;
        &lt;div class="contact-card__title"&gt;Executive Liaison&lt;/div&gt;
        &lt;div class="contact-card__detail"&gt;Ms Sally Hayes&lt;/div&gt;
        &lt;span class="contact-card__detail--inline"&gt;Email:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="mailto:sally.hayes@unimelb.edu.au"&gt;sally.hayes@unimelb.edu.au&lt;/a&gt;&lt;/span&gt;
        &lt;br&gt;
        &lt;span class="contact-card__detail--inline"&gt;Phone:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="tel:61383446134"&gt;+61 3 8344 6134&lt;/a&gt;&lt;/span&gt;
      &lt;/dl&gt;
      &lt;div class="contact-card__col1_3"&gt;
        &lt;div class="contact-card__title"&gt;Executive Support Officer&lt;/div&gt;
        &lt;div class="contact-card__detail"&gt;Ms Amelia Phipps&lt;/div&gt;
        &lt;span class="contact-card__detail--inline"&gt;Email:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="mailto:phipps.a@unimelb.edu.au"&gt;phipps.a@unimelb.edu.au&lt;/a&gt;&lt;/span&gt;
        &lt;br&gt;
        &lt;span class="contact-card__detail--inline"&gt;Phone:&lt;/span&gt;
        &lt;span class="contact-card__detail--inline"&gt;&lt;a href="tel:61383443741"&gt;+61 3 8344 3741&lt;/a&gt;&lt;/span&gt;
      &lt;/dl&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code></pre></div>`)
    (() =>     ({
      components: { ContactCard },
      mounted: () => { loadGMaps() },
      template: `<contact-card :columns="3" :map="true" />`
    }))
  );
