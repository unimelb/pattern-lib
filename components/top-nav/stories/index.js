import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';
import RenderMarkup from '../../RenderMarkup';

import Search from './Search.vue';

const renderedSearch = new RenderMarkup(Search);
const markupSearch = '## Minified top nav\n```html\n<div class="header-tools">' + renderedSearch.min + '</div>\n```\n';

import NavTrigger from './NavTrigger.vue';

const renderedNavTrigger = new RenderMarkup(NavTrigger);

const markupTopNav = '## Minified top nav\n```html\n<div class="header-tools">' + renderedSearch.min +
  renderedNavTrigger.min + '</div>\n```\n';

import TopNav from './TopNav.vue';

let renderedSiteNav = new RenderMarkup(TopNav);
const markupBasicNav = '## Sample nav markup\n```html\n' + renderedSiteNav.max + '\n```\n';
renderedSiteNav = new RenderMarkup(TopNav, { props: { complex: true } });
const markupNestedNav = '## Sample nav markup\n```html\n' + renderedSiteNav.max + '\n```\n';

storiesOf('Top nav', module)
  .addDecorator(withKnobs)
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
    'Search only',
    withReadme(markupSearch, () => ({
        components: { Search },
        mounted: () => { loadHeaderTools() },
        template: `
          <div class="header-tools">
            <search />
          </div>`
      })),
  )

  .add(
    'Basic site navigation',
    withReadme(markupTopNav + markupBasicNav, () => ({
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
      })),
  )
  .add(
    'Nested site navigation',
    withReadme(markupTopNav + markupNestedNav, () => ({
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
      })),
  );
