import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import withReadme from 'storybook-readme/with-readme';
import RenderMarkup from '../../RenderMarkup';

import Trigger from './Trigger.vue';
import Modal from './Modal.vue';

const renderedTrigger = new RenderMarkup(Trigger);
const renderedModal = new RenderMarkup(Modal);
const markup = '## Trigger markup\nMust be a button element.\n```html\n' + renderedTrigger.max +
  '\n```\n## Sample modal markup\n```html\n' + renderedModal.max + '\n```\n';

storiesOf('Modal', module)
  .add(
    'Button trigger',
    withReadme(markup, () => ({
        components: { Trigger, Modal },
        template: `
<main>
  <section class="section">
    <div class="section__inner">
      <trigger />
      <modal />
    </div>
  </section>
</main>
`
      })),
  );
