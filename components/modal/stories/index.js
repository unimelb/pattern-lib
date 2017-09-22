import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import Modal from './Modal.vue';

storiesOf('Modal', module)
  .addDecorator(story => {
    const Story = story();
    return {
      components: { Story },
      template:
`
<main>
  <section class="section-content">
    <Story/>
  </section>
</main>
`,
    };
  })

  .add(
    'Basic example', () =>   ({
      components: { Modal },
      template: `
<modal>
  <h2 id="modal-1-title">Dialog title</h2>
  <p>Lorem ipsum <a href="#">exercitation</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut <a href="#">commodo</a> ex ea consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <a href="#">reprehenderit</a>. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</modal>
`
    })
  );
