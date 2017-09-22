import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import {
  withKnobs
} from '@storybook/addon-knobs';

import TopNav from './TopNav.vue';
import NavTrigger from './NavTrigger.vue';
import Search from './Search.vue';

storiesOf('Top nav', module)
  .addDecorator(withKnobs)
  .addDecorator(story => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <div>
          <svg class="hidden" xmlns="http://www.w3.org/2000/svg">
            <symbol id="icon-search" viewBox="0 0 21 26">
              <path d="M14.7658269,18.9909231 L13.8280962,18.9909231 L13.503,18.6674423 C14.6543654,17.3250577 15.3542308,15.5836731 15.3542308,13.6763077 C15.3542308,9.43673077 11.9170962,6 7.67711538,6 C3.43713462,6 0,9.43673077 0,13.6763077 C0,17.9162885 3.43713462,21.3530192 7.67711538,21.3530192 C9.58407692,21.3530192 11.3246538,20.6535577 12.6674423,19.5025962 L12.9929423,19.8272885 L12.9929423,20.7625962 L18.8963654,26.6571346 L20.6575385,24.8963654 L14.7658269,18.9909231 L14.7658269,18.9909231 Z M7.67711538,18.9909231 C4.74155769,18.9909231 2.3625,16.6118654 2.3625,13.6763077 C2.3625,10.7411538 4.74155769,8.36169231 7.67711538,8.36169231 C10.6126731,8.36169231 12.9921346,10.7411538 12.9921346,13.6763077 C12.9921346,16.6118654 10.6126731,18.9909231 7.67711538,18.9909231 L7.67711538,18.9909231 Z" />
            </symbol>
            <symbol id="icon-close" viewBox="0 0 48 48">
              <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24 38 12.83z" />
            </symbol>
          </svg>
          <Story/>
        </div>`,
    };
  })

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
