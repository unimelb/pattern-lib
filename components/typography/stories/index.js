import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';

import TypographyReadme from './../docs/typography.md';

import HeadingElements from './HeadingElements.vue';
import HeadingClasses from './HeadingClasses.vue';
import LongHeadings from './LongHeadings.vue';
import Links from './Links.vue';
import ListsOrdered from './ListsOrdered.vue';
import ListsUnordered from './ListsUnordered.vue';
import ListsMixed from './ListsMixed.vue';
import Quote from './Quote.vue';

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(TypographyReadme))
  .add('Heading elements', () => ({
    components: { HeadingElements },
    template: '<heading-elements />'
  }))
  .add('Heading classes', () => ({
    components: { HeadingClasses },
    template: `<heading-classes />`
  }))
  .add('Long headings', () => ({
    components: { LongHeadings },
    template: `<long-headings />`
  }))
  .add('Links', () => ({
    components: { Links },
    template: '<links />'
  }))
  .add('Lists - ordered', () => ({
    components: { ListsOrdered },
    template: '<lists-ordered />'
  }))
  .add('Lists - unordered', () => ({
    components: { ListsUnordered },
    template: '<lists-unordered />'
  }))
  .add('Lists - mixed', () => ({
    components: { ListsMixed },
    template: '<lists-mixed />'
  }))
  .add('Quote', () => {
    const quoteText = text('Quote', 'Some girls are just born with glitter in their veins');
    const author = text('Author', 'Donald J. Trump');
    const bdrTop = boolean('Border Top', false);
    const bdrBtm = boolean('Border Bottom', false);
    return {
      components: { Quote },
      template: `
        <section class="section">
          <div class="section__inner section__inner--sml">
            <quote ${bdrTop ? 'bdrTop' : ''} ${bdrBtm ? 'bdrBtm' : ''} author="${author}">${quoteText}</quote>
          </div>
        </section>
      `
    }
  })
  .add('Quote - Inverse', () => {
    const quoteText = text('Quote', 'Some girls are just born with glitter in their veins');
    const author = text('Author', 'Donald J. Trump');
    const bdrTop = boolean('Border Top', false);
    const bdrBtm = boolean('Border Bottom', false);
    return {
      components: { Quote },
      template: `
        <section class="section bg-inverted">
          <div class="section__inner section__inner--sml">
            <quote ${bdrTop ? 'bdrTop' : ''} ${bdrBtm ? 'bdrBtm' : ''} author="${author}">${quoteText}</quote>
          </div>
        </section>
      `
    }
  })
