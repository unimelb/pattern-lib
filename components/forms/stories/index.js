import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import MceForm from './MceForm.vue';

storiesOf('Forms', module)
  .addDecorator(story => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <main>
          <section class="section-content">
            <Story/>
          </section>
        </main>`,
    };
  })

  .add(
    'MCE Form markup', 
    () =>   ({
      components: { MceForm },
      template: `<mce-form />`
    })
  );
