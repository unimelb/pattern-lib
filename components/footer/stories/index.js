import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import BoilerplateFooter from './BoilerplateFooter.vue';

import WithMarkup from '../../WithMarkup';

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

  .addDecorator(new WithMarkup(BoilerplateFooter))

  .add(
    'Boilerplate code insert', 
    () =>   ({
      components: { BoilerplateFooter },
      template: `<boilerplate-footer />`
    })
  );
