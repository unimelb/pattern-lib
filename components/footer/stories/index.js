import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import BoilerplateFooter from './BoilerplateFooter.vue';

storiesOf('Footer', module)
  .addDecorator(story => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <div>
          <Story/>
        </div>`,
    };
  })

  .add(
    'Boilerplate code insert', 
    () =>   ({
      components: { BoilerplateFooter },
      template: `<boilerplate-footer />`
    })
  );
