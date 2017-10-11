import { storiesOf } from '@storybook/vue';
import withReadme from 'storybook-readme/with-readme';
import RenderMarkup from '../../RenderMarkup';

import Trigger from './Trigger.vue';
import Modal from './Modal.vue';

const renderedTrigger = new RenderMarkup(Trigger);
const renderedModal = new RenderMarkup(Modal);

const docs = `
## Trigger markup
Must be a button element.
\`\`\`html${renderedTrigger.max}\`\`\`
## Sample modal markup
\`\`\`html${renderedModal.max}\`\`\`
`;

storiesOf('Modal', module)
  .add(
    'Default',
    withReadme(docs, () => ({
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
`,
    }))
  );
