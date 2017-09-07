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
    // Add main element before sections - you can add whatever is relevant here for other components
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
          <style>pre {  background-color: #444;  color: #eee; } </style>
          <h2>Content section</h2>
          <p>This section is intended to be used only in the WYSIWYG editor</p>
          <pre>
            <code>
              &lt;section class=&quot;section--content&quot;&gt; 
              &lt;/section&gt;
            </code>
          </pre>
          <p>Add the class <code> .section--content--sml</code> for the smaller width content container</p>
        </div>
      `
    )
    (() => {
      const title = text('Title', 'Example Title');
      const paragraph = text('Paragraph text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.');
      const small = boolean('Smaller width', false);
      return {
        template: `
          <section class="section--content ${small ? 'section--content--sml' : ''}">
            <h3>${title}</h3>
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
          <style>pre {  background-color: #444;  color: #eee; } </style>
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
            <div class="section__inner max ${small ? 'max--sml' : ''}">
              <h3>${title}</h3>
              <p>${paragraph}</p>
            </div>
          </section>
        `
      }
    }
  ))
  .add('Split section', () => {
    const selectedSide = select('Select Side', ['left', 'right'], 'left');
    const btnText = text('Button Text', 'Read More');
    const imgUrl = text('Image URL', 'https://placeimg.com/640/480/people');
    return {
      components: { SplitSection },
      template: `
        <SplitSection 
          imageLeft="${selectedSide === 'left' ? 'true' : ''}"
          imageRight="${selectedSide === 'right' ? 'true' : ''}"
          bgImage="${imgUrl}"
        >
          <div class="split-section__inner">
            <h3 class="h3">this is the title on the right</h3>
            <p>This is a paragraph of text</p>
            <a href="#" class="btn">
              ${btnText}
            </a>
          </div>
        </SplitSection>
      `
    }
  });


