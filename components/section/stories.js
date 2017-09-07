import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Section from './section.vue';
import SplitSection from './split-section.vue';

storiesOf('Section', module)
  .add('Content section - default width', () => ({
    template: `
      <section class="section--content">
        <h3>this is the title</h3>
        <p>This is a paragraph of text</p>
      </section>
    `,
  }))
  .add('Content section - small width', () => ({
    template: `
      <section class="section--content section--content--sml">
        <h3>this is the title</h3>
        <p>This is a paragraph of text</p>
      </section>
    `,
  }))
  .add('Section with bg-alt ', () => ({
    components: { Section },
    template: `
      <Section class="bg-alt">
        <h3>this is the title</h3>
        <p>This is a paragraph of text</p>
      </Section>
    `,
  }))
  .add('Inverted section', () => ({
    components: { Section },
    template: `
      <Section class="bg-inverted">
        <h3>this is the title</h3>
        <p>This is a paragraph of text</p>
      </Section>
    `,
  }))
  .add('Split section - Left Image', () => ({
    components: { SplitSection },
    template: `
      <SplitSection>
        <div slot="content-side-2" class="split-section__inner">
          <h3>this is the title on the right</h3>
          <p>This is a paragraph of text</p>
        </div>
      </SplitSection>
    `,
  }))