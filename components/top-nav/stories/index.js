import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import TopNav from './TopNav.vue';
import NavTrigger from './NavTrigger.vue';
import Search from './Search.vue';

import TopNavMarkup from './TopNavMarkup.vue';
import WithMarkup from '../../WithMarkup';

storiesOf('Top nav', module)
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

  .addDecorator(new WithMarkup(TopNavMarkup, {render: "prettified"}))

  .add(
    'Search only', () => ({
      components: { TopNav, Search },
      mounted: () => { loadHeaderTools() },
      template: `
        <div class="header-tools">
          <search />
        </div>`
    })
  )

  .add(
    'Basic site navigation', () => ({
      components: { TopNav, NavTrigger, Search },
      mounted: () => { loadHeaderTools() },
      template: `
      <div>
        <div class="header-tools">
          <search />
          <nav-trigger />
        </div>
        <top-nav />
      </div>`
    })
  )
  .add(
    'Nested site navigation', () => ({
      components: { TopNav, Search, NavTrigger },
      mounted: () => { loadHeaderTools() },
      template: `
      <div>
        <div class="header-tools">
          <search />
          <nav-trigger />
        </div>
        <top-nav :complex="true" />
      </div>`
    })
  );
