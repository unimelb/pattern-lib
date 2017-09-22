import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import BreadCrumbs from './BreadCrumbs.vue';

storiesOf('Breadcrumbs', module)
  .addDecorator(story => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <div>
          <svg class="hidden" xmlns="http://www.w3.org/2000/svg">
            <symbol id="icon-home" viewBox="5 5 38 38"><path d="M20 41V29h8v12h10V25h6L24 7 4 25h6v16h10z"></path></symbol>
            <symbol id="icon-chevron-right" viewBox="7 3 14 14"><path d="m8,7.42l4.58,4.58l-4.58,4.59l1.41,1.41l6,-6l-6,-6l-1.41,1.42z"></path></symbol>
          </svg>
          <Story/>
        </div>`,
    };
  })

  .add(
    'Level 1', () =>   ({
      components: { BreadCrumbs },
      template: `<bread-crumbs :level="1" />`
    })
  )
  .add(
    'Level 2',() =>   ({
      components: { BreadCrumbs },
      template: `<bread-crumbs :level="2" />`
    })
  )
  .add(
    'Level 3', () =>   ({
      components: { BreadCrumbs },
      template: `<bread-crumbs :level="3" />`
    })
  );
