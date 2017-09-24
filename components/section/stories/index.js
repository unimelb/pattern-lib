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

import SplitSection from './split-section.vue';
import ButtonIcon from './../../buttons/stories/ButtonIcon.vue';

storiesOf('Section', module)
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
  .add(
    'Section', () => {
      const title = text('Title', 'Example Title');
      const paragraph = text('Paragraph text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.');
      const bgClass = select('Background class', ['', 'bg-alt', 'bg-inverted'], '');
      const small = boolean('Smaller width', false);
      const short = boolean('Shorter height', false);

      return {
        template: `
          <section-wrap class="${bgClass}" ${small ? 'small' : ''} ${short ? 'short' : ''}>
            <h3 class="heading-section">${title}</h3>
            <p>${paragraph}</p>
          </section-wrap>
        `
      }
    }
  )
  .add('With background image', () => {
    const btnText = text('Button Text', 'Read More');
    const titleText = text('Title', 'Our Vision');
    const contentText = text('Title', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi error molestiae et animi libero asperiores vero ipsa recusandae ratione, eius adipisci mollitia! Aliquid nemo ullam exercitationem, eius eaque, debitis.');
    const imgUrl = text('Image URL', 'http://about-us-unimelb.netlify.com/images/UoM-soft-3.png');
    return {
      components: { ButtonIcon },
      template: `
      <section-wrap class="section--image bg-inverted" style="text-align: center; background-image: url(${imgUrl})">
        <h3 class="heading-section">${titleText}</h3>
        <p>
          ${contentText}
        </p>
        <div>
          <a class="btn btn--wide btn--inverted btn--icon btn--icon--chevron-right-inverted" href="#">
            ${btnText}
          </a>
        </div>
      </section-wrap>
      `
    }
  })
  .add('Split section', () => {
    const selectedSide = select('Select Side', ['left', 'right'], 'left');
    const btnText = text('Button Text', 'Read More');
    const titleText = text('Title', 'This is the title on the right');
    const imgUrl = text('Image URL', 'https://placeimg.com/640/480/people');
    return {
      components: { SplitSection, ButtonIcon },
      template: `
        <SplitSection 
          imageLeft="${selectedSide === 'left' ? 'true' : ''}"
          imageRight="${selectedSide === 'right' ? 'true' : ''}"
          bgImage="${imgUrl}"
        >
          <h3 class="h3 heading-section">${titleText}</h3>
          <p>This is a paragraph of text</p>
          <button-icon href="#" element="a" class="btn--wide" icon="chevron-right">
            ${btnText}
          </button-icon>
        </SplitSection>
      `
    }
  })
  .add(
    'Section - Divider', () => {
      const title = text('Title', 'Example Title');
      const subtitle = text('Sub title', '');
      return {
        template: `
          <section class="section section--divider bg-inverted" style="background-image: url(http://cms.unimelb.edu.au/__data/assets/image/0005/2353784/UoM-soft-3.png);">
            <div class="section__inner--short section--divider__inner">
              <h3 class="heading-section">${title}</h3>
              ${subtitle.length > 0 ? `<p>${subtitle}</p>` : '' }
            </div>
          </section>
        `
      }
    }
  )



