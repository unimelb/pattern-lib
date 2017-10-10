import { storiesOf } from '@storybook/vue';

import Story1 from './story1.js';
import Story2 from './story2.js';
import Story3 from './story3.js';
import Story4 from './story4.js';

storiesOf('Accordion', module)
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

  .add('Default', Story1)
  .add('First open', Story2)
  .add('Solo select', Story3)
  .add('No js', Story4);
