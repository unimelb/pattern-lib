import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import MceForm from './MceForm.vue';
import MceDate from './MceDate.vue';
import TextFields from './TextFields.vue';
import InlineForm from './InlineForm.vue';

storiesOf('Forms', module)
  .addDecorator((story) => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <main>
          <section class="section">
            <div class="section__inner">
              <Story/>
            </div>
          </section>
        </main>`,
    };
  })

  .add(
    'Text fields',
    () => ({
      components: { TextFields },
      template: '<text-fields />'
    }),
  )

  .add(
    'Inline form',
    () => ({
      components: { InlineForm },
      template: '<inline-form />'
    }),
  )

  .add(
    'MCE Form',
    () => ({
      components: { MceForm },
      template: '<mce-form />'
    }),
  )

  .add(
    'MCE Date selector',
    () => ({
      components: { MceDate },
      template: '<mce-date />'
    }),
  );
