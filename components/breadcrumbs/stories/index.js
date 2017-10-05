import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import withReadme from 'storybook-readme/with-readme';
import RenderMarkup from '../../RenderMarkup';

import BreadCrumbs from './BreadCrumbs.vue';
import MceMockup from './MceMockup.vue';

const markupL1 = new RenderMarkup(BreadCrumbs);
const markupL2 = new RenderMarkup(BreadCrumbs, { props: { level: 2 } });
const markupL3 = new RenderMarkup(BreadCrumbs, { props: { level: 3 } });

storiesOf('Breadcrumbs', module)
  .addDecorator((story) => {
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
    'Level 1',
    withReadme(markupL1.prettifiedMarkup, () => ({
        components: { BreadCrumbs },
        template: `<bread-crumbs :level="1" />`
      })),
  )

  .add(
    'Level 2',
    withReadme(markupL2.prettifiedMarkup, () => ({
        components: { BreadCrumbs },
        template: `<bread-crumbs :level="2" />`
      })),
  )

  .add(
    'Level 3',
    withReadme(markupL3.prettifiedMarkup, () => ({
        components: { BreadCrumbs },
        template: `<bread-crumbs :level="3" />`
      })),
  )

  .add(
    'Full mockup', () => ({
      components: { MceMockup },
      template: '<mce-mockup />'
    }),
  );
