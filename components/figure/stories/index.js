import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date,
} from '@storybook/addon-knobs';

import ArticleInset from './../../article/stories/ArticleInset.vue';


storiesOf('Figure', module)
  .addDecorator(story => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <main>
          <Story/>
        </main>`,
    };
  })
  .add('Article With Inset Figure', () => {
    return {
      components: { ArticleInset },
      template: `
        <section-wrap small>
          <article-inset />
        </section-wrap>
      `
    }
  })