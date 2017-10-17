import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';
import PageHeader from './../../../page-header/PageHeader.vue';
import PageFooter from './../../../page-footer/PageFooter.vue';
import PageBreadcrumbs from './../../../page-breadcrumbs/PageBreadcrumbs.vue';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
/* ##Import story component here */

/* Section - Crest */
storiesOf('Side Panel/Right', module)
  .addDecorator((story) => {
    const Story = story();
    return {
      components: { Story, PageHeader, PageFooter, PageBreadcrumbs },
      template: `
        <div>
          <PageHeader :level="2" title="Strategy and governance" img="https://placeimg.com/990/530/arch/1"/>
          <PageBreadcrumbs :items="[
            { href: '/', text: 'About us' },
            { href: '/strategy', text: 'Strategy and governance' },
          ]" />
          <Story/>
          <PageFooter />
        </div>
        `,
    };
  })
  .add('With section', createStory(Story1))
  .add('With content blocks', createStory(Story2));
/* ##Story goes here */
