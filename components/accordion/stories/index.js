import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import withReadme from 'storybook-readme/with-readme';
import RenderMarkup from '../../RenderMarkup';

import Accordion from './Accordion.vue';
const renderedAccordion = new RenderMarkup(Accordion);

storiesOf('Accordion', module)
  .add(
    'Basic',
    withReadme(renderedAccordion.prettifiedMarkup, () => {
      return {
        components: { Accordion },
        template: `
<main>
  <section class="section">
    <div class="section__inner">
      <accordion />
    </div>
  </section>
</main>
`
      }
    })
//   )

//   .add(
//     'Single section',
//     withReadme(renderedAccordion.prettifiedMarkup, () => {
//       return {
//         components: { Accordion },
//         template: `
// <main>
//   <section class="section">
//     <div class="section__inner">
//       <accordion />
//     </div>
//   </section>
// </main>
// `
//       }
//     })
  );
