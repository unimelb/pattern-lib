import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withNotes } from '@storybook/addon-notes';
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

storiesOf('Section', module)
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
  .addDecorator(withKnobs)
  .add(
    'Content section',
    withNotes(
      `
        <div>
          <h2>Content section</h2>
          <p>This section is intended to be used only in the WYSIWYG editor</p>
          <pre>
            <code>
              &lt;section class=&quot;section--content&quot;&gt; 
              &lt;/section&gt;
            </code>
          </pre>
          <p>Add the class <code> .section-content--sml</code> for the smaller width content container</p>
        </div>
      `
    )
    (() => {
      const titleH2 = text('Title H2', 'Example Title H2');
      const titleH3 = text('Title H3', 'Example Title H3');
      const paragraph = text('Paragraph text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.');
      const small = boolean('Smaller width', false);

      return {
        template: `
          <section class="section-content ${small ? 'section-content--sml' : ''}">
            <h2>${titleH2}</h2>
            <h3>${titleH3}</h3>
            <p>${paragraph}</p>
          </section>
        `
      }
    }
  ))
  .add(
    'Content section - Intro class',
    withNotes(
      `
        <div>
          <h2>Content section</h2>
          <p>This section is intended to be used only in the WYSIWYG editor</p>
          <pre>
            <code>
              &lt;section class=&quot;section--content&quot;&gt; 
              &lt;/section&gt;
            </code>
          </pre>
          <p>Add the class <code> .section-content--sml</code> for the smaller width content container</p>
        </div>
      `
    )
    (() => {
      const titleH1 = text('Title H1', 'Heading Section .heading-section');
      const titleH2 = text('Title H2', 'H2 element. As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.');
      const titleH3 = text('Title H3', 'H3 element <em>Growing Esteem 2015-2020</em> is the most recent articulation of our plans to achieve our strategic goals.');
      const paragraph = text('Paragraph text', 'P Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.');
      const small = boolean('Smaller width', true);
      return {
        template: `
          <section class="section-content ${small ? 'section-content--sml' : ''}">
            <h3 class="heading-section">${titleH1}</h3>
            <h2>${titleH2}</h2>
            <h3>${titleH3}</h3>
            <p>${paragraph}</p>
          </section>
        `
      }
    }
  ))
  .add(
    'Section',
    withNotes(
      `
        <div>
          <h2>Section (container template)</h2>
          This section is intended to be used as a content container
          it has to have a inner div with a class of <code>.section__inner</code>
          <pre>
            <code>
              &lt;section class=&quot;section&quot;&gt;
                &lt;div class=&quot;section__inner max&quot;&gt;
                    &lt;!-- Content goes here --&gt;
                &lt;/div&gt;
              &lt;/section&gt;
            </code>
          </pre>
        </div>
      `
    )
    (() => {
      const title = text('Title', 'Example Title');
      const paragraph = text('Paragraph text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.');
      const bgClass = select('Background class', ['', 'bg-alt', 'bg-inverted'], '');
      const small = boolean('Smaller width', false);
      return {
        template: `
          <section class="section ${bgClass}">
            <div class="section__inner ${small ? 'section__inner--sml' : ''}">
              <h3 class="heading-section">${title}</h3>
              <p>${paragraph}</p>
            </div>
          </section>
        `
      }
    }
  ))
  .add('With background image', () => {
    const btnText = text('Button Text', 'Read More');
    const titleText = text('Title', 'Our Vision');
    const contentText = text('Title', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi error molestiae et animi libero asperiores vero ipsa recusandae ratione, eius adipisci mollitia! Aliquid nemo ullam exercitationem, eius eaque, debitis.');
    const imgUrl = text('Image URL', 'http://about-us-unimelb.netlify.com/images/UoM-soft-3.png');
    return {
      template: `
      <section class="section section--image bg-inverted" style="text-align: center; background-image: url(${imgUrl})">
        <div class="section__inner section__inner--sml">
          <h3 class="heading-section">${titleText}</h3>
          <p>
            ${contentText}
          </p>
          <br><a class="btn btn--inverted btn--center" href="#">${btnText}</a>
        </div>
      </section>
      `
    }
  })
  .add('Split section', () => {
    const selectedSide = select('Select Side', ['left', 'right'], 'left');
    const btnText = text('Button Text', 'Read More');
    const titleText = text('Title', 'This is the title on the right');
    const imgUrl = text('Image URL', 'https://placeimg.com/640/480/people');
    return {
      components: { SplitSection },
      template: `
        <SplitSection 
          imageLeft="${selectedSide === 'left' ? 'true' : ''}"
          imageRight="${selectedSide === 'right' ? 'true' : ''}"
          bgImage="${imgUrl}"
        >
            <h3 class="h3 heading-section">${titleText}</h3>
            <p>This is a paragraph of text</p>
            <a href="#" class="btn">
              ${btnText}
            </a>
        </SplitSection>
      `
    }
  })
  .add(
    'Section - Divider',
    withNotes(
      `
        <div>
          <h2>Section (container template)</h2>
          This section is intended to be used as a content container
          it has to have a inner div with a class of <code>.section__inner</code>
          <pre>
            <code>
              &lt;section class=&quot;section&quot;&gt;
                &lt;div class=&quot;section__inner max&quot;&gt;
                    &lt;!-- Content goes here --&gt;
                &lt;/div&gt;
              &lt;/section&gt;
            </code>
          </pre>
        </div>
      `
    )
    (() => {
      const title = text('Title', 'Example Title');
      const paragraph = text('Paragraph text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ');
      return {
        template: `
          <section class="section section--divider bg-inverted" style="background-image: url(http://cms.unimelb.edu.au/__data/assets/image/0005/2353784/UoM-soft-3.png);">
            <div class="section__inner--short">
              <h3 class="heading-section">${title}</h3>
              <p>${paragraph}</p>
            </div>
          </section>
        `
      }
    }
  ))
  .add(
    'Section - Focus Box',
    withNotes(
      `
        <div>
          <h2>Section (Focus Box)</h2>
          This section is intended to be used as a content container
          it has to have a inner div with a class of <code>.section__inner</code>
          <pre>
            <code>

            </code>
          </pre>
        </div>
      `
    )
    (() => {
      const title = text('Title', 'Example Title');
      const paragraph = text('Paragraph text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ');
      return {
        template: `
          <section class="section section--divider bg-inverted" style="background-image: url(http://cms.unimelb.edu.au/__data/assets/image/0005/2353784/UoM-soft-3.png);">
            <div class="section__inner--short">
            </div>
          </section>
        `
      }
    }
  ))



