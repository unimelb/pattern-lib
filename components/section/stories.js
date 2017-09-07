import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Section from './section.vue';
import SplitSection from './split-section.vue';

storiesOf('Section', module)
  .addDecorator(story => {
    // Add main element before sections - you can add whatever is relevant here for other components
    const Story = story();
    return {
      components: { Story },
      template: '<main><Story/></main>',
    };
  })
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
        <h2>This is the title H2</h2>
        <h3>This is a H3</h3>
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
      <SplitSection imageLeft="true" bgImage="https://placeimg.com/640/480/people">
        <div class="split-section__inner">
          <h3>this is the title on the right</h3>
          <p>This is a paragraph of text</p>
        </div>
      </SplitSection>
    `,
  }))
  .add('Split section - Right Image', () => ({
    components: { SplitSection },
    template: `
      <SplitSection imageRight="true" bgImage="https://placeimg.com/640/480/people">
        <div class="split-section__inner">
          <h3>this is the title on the left</h3>
          <p>This is a paragraph of text</p>
        </div>
      </SplitSection>
    `,
  }))