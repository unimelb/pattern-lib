import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  boolean,
} from '@storybook/addon-knobs';

import ArticleInset from './../../article/stories/ArticleInset.vue';
import VideoEmbed from './../../embed/stories/VideoEmbed.vue';
import FigureSection from './FigureSection.vue';
import FigureWrap from './FigureWrap.vue';


storiesOf('Figure', module)
  .addDecorator(withKnobs)
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
  .add('Section With Inset Figure', () => {
    const small = boolean('Small', true);
    return {
      components: { FigureSection },
      template: `
        <section-wrap ${small ? 'small' : ''}>
          <figure-section />
        </section-wrap>
      `
    }
  })
  .add('Figure with embed', () => {
    const small = boolean('Small', true);
    return {
      components: { VideoEmbed, FigureWrap },
      template: `
        <section-wrap ${small ? 'small' : ''}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          <p>Praesentium, quaerat! Odit numquam magnam, recusandae totam sint blanditiis autem quos. </p>
          <figure-wrap caption="embed test">
            <video-embed src="https://www.youtube.com/embed/nlF7qp5GNPI"></video-embed>
          </figure-wrap>
          <p>In officiis voluptatum repudiandae itaque aperiam iure dolorem vero nostrum nisi.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          <figure-wrap inset right large caption="embed test">
            <video-embed src="https://www.youtube.com/embed/nlF7qp5GNPI"></video-embed>
          </figure-wrap>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eos nihil odit, non commodi necessitatibus praesentium culpa totam debitis provident excepturi beatae doloribus, odio sit quaerat eveniet voluptatum maiores optio.</p>
          
          <p>Praesentium, quaerat! Odit numquam magnam, recusandae totam sint blanditiis autem quos. </p>
        </section-wrap>
      `
    }
  })