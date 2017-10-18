import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import VideoEmbed from './../../embed/VideoEmbed.vue';
import FigureSection from './FigureSection.vue';
import FigureProgressive from './FigureProgressive.vue';
import FigureWrap from './FigureWrap.vue';

storiesOf('Figure', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <main>
          <Story/>
        </main>`,
    };
  })
  /* .add('Article With Inset Figure', () => ({
    components: { ArticleInset },
    template: `
        <section-wrap small>
          <article-inset />
        </section-wrap>
      `,
  })) */
  .add('Section With Inset Figure', () => {
    const small = boolean('Small', true);
    return {
      components: { FigureSection },
      template: `
        <section-wrap ${small ? 'small' : ''}>
          <figure-section />
        </section-wrap>
      `,
    };
  })
  .add('Figure with embed', () => ({
    components: { VideoEmbed, FigureWrap },
    template: `
        <section-wrap small>
          <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          <p>Praesentium, quaerat! Odit numquam magnam, recusandae totam sint blanditiis autem quos. </p>
          <figure-wrap caption="embed test">
            <video-embed src="https://www.youtube.com/embed/nlF7qp5GNPI" />
          </figure-wrap>
          <p>In officiis voluptatum repudiandae itaque aperiam iure dolorem vero nostrum nisi.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          <figure-wrap inset right large caption="embed test">
            <video-embed src="https://www.youtube.com/embed/nlF7qp5GNPI" />
          </figure-wrap>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eos nihil odit, non commodi necessitatibus praesentium culpa totam debitis provident excepturi beatae doloribus, odio sit quaerat eveniet voluptatum maiores optio.</p>

          <p>Praesentium, quaerat! Odit numquam magnam, recusandae totam sint blanditiis autem quos. </p>
          </div>
        </section-wrap>
      `,
  }))
  .add('Figure with progressive images', () => ({
    components: { FigureProgressive },
    template: `
        <section-wrap small>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <p>Praesentium, quaerat! Odit numquam magnam, recusandae totam sint blanditiis autem quos. </p>
            <figure-progressive caption="embed test" img="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?dpr=1&auto=compress,format&fit=crop&w=1650&h=&q=80&cs=tinysrgb&crop=" placeholder="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?dpr=1&auto=compress,format&fit=crop&w=165&h=&q=8&cs=tinysrgb&crop=">
            </figure-progressive>
            <p>In officiis voluptatum repudiandae itaque aperiam iure dolorem vero nostrum nisi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <figure-progressive inset right large caption="embed test" img="https://images.unsplash.com/photo-1447933601403-0c6688de566e?dpr=1&auto=compress,format&fit=crop&w=1556&h=&q=80&cs=tinysrgb&crop=" placeholder="https://images.unsplash.com/photo-1447933601403-0c6688de566e?dpr=1&auto=compress,format&fit=crop&w=155&h=&q=8&cs=tinysrgb&crop=">
            </figure-progressive>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eos nihil odit, non commodi necessitatibus praesentium culpa totam debitis provident excepturi beatae doloribus, odio sit quaerat eveniet voluptatum maiores optio.</p>

            <p>Praesentium, quaerat! Odit numquam magnam, recusandae totam sint blanditiis autem quos. </p>
          </div>
        </section-wrap>
      `,
  }));
