import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';
import RenderMarkup from '../../RenderMarkup';

import Search from './Search.vue';
import NavTrigger from './NavTrigger.vue';
import TopNav from './TopNav.vue';

const renderedSearch = new RenderMarkup(Search);
const renderedNavTrigger = new RenderMarkup(NavTrigger);
const renderedSiteNav = new RenderMarkup(TopNav);
const renderedNestedSiteNav = new RenderMarkup(TopNav, { props: { complex: true } });
const markupSearch = `## Minified top nav\n\`\`\`html\n<div class="header-tools">${renderedSearch.min}</div>\n\`\`\`\n`;
const markupTopNav = `## Minified top nav\n\`\`\`html\n<div class="header-tools">${renderedSearch.min}${renderedNavTrigger.min}</div>\n\`\`\`\n`;
const markupBasicNav = `## Sample nav markup\n\`\`\`html\n${renderedSiteNav.max}\n\`\`\`\n`;
const markupNestedNav = `## Sample nav markup\n\`\`\`html\n${renderedNestedSiteNav.max}\n\`\`\`\n`;

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
      mounted: () => { window.loadHeaderTools(); },
      template: `
        <div class="header-tools">
          <search />
        </div>`,
    }))
  )

  .add(
    'Basic site navigation',
    withReadme(markupTopNav + markupBasicNav, () => ({
      components: { TopNav, NavTrigger, Search },
      mounted: () => { window.loadHeaderTools(); },
      template: `
      <div>
        <div class="header-tools">
          <search />
          <nav-trigger />
        </div>
        <top-nav />
      </div>`,
    }))
  )
  .add(
    'Nested site navigation',
    withReadme(markupTopNav + markupNestedNav, () => ({
      components: { TopNav, Search, NavTrigger },
      mounted: () => { window.loadHeaderTools(); },
      template: `
      <div>
        <div class="header-tools">
          <search />
          <nav-trigger />
        </div>
        <top-nav :complex="true" />
      </div>`,
    }))
  );
