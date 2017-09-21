import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import MceForm from './MceForm.vue';
import MceDate from './MceDate.vue';

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
    'MCE Form', 
    () =>   ({
      components: { MceForm },
      template: `<mce-form />`
    })
  )

  .add(
    'MCE Date selector', 
    () =>   ({
      components: { MceDate },
      template: `<mce-date />`
    })
  );
