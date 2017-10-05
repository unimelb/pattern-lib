import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  text,
} from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';

import RenderMarkup from '../../RenderMarkup';
import sideNavReadme from './SideNav.md';
import SideNav from './SideNav.vue';
import Banner from './../../banner/stories/Banner.vue';

const sideNavMarkup = new RenderMarkup(SideNav);

storiesOf('Side Nav', module)
  .addDecorator(story => {
    const Story = story();
    return {
      components: { Story, Banner },
      template: `
        <div>
          <banner :level="2"/>
          <Story/>
        </div>
        `,
    };
  })
  .addDecorator(withKnobs)
  .addDecorator(withReadme(sideNavReadme))
  .add('side nav story', withReadme(sideNavMarkup.prettifiedMarkup, () => {
    return {
      components: { SideNav },
      template: `
      <div class="layout ">
        <side-nav class="layout__pre bg-white"></side-nav>
        <main class="layout__main">
          <section-wrap class="bg-white">
            <h2>test content</h2>
          </section-wrap>
          <section-wrap class="bg-alt">
            test content
          </section-wrap>
          <section-wrap class="bg-white">
            test content
          </section-wrap>
        </main>
      </div>
      `
    }
  }))