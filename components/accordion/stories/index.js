import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import Accordion from './Accordion.vue';
import AccordionBlock from './AccordionBlock.vue';

storiesOf('Accordion', module)
  .addDecorator(story => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <main>
          <section class="section">
            <div class="section__inner">
              <Story/>
            </div>
          </section>
        </main>`,
    };
  })

  .add(
    'Default', () => {
      return {
        components: { Accordion, AccordionBlock },
        template: `
      <accordion>
        <accordion-block title="Arts">
          <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
        </accordion-block>
        <accordion-block title="Science">
          <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
        </accordion-block>
      </accordion>
`
      };
    }
  )

  .add(
    'First open', () => {
      return {
        components: { Accordion, AccordionBlock },
        template: `
      <accordion :open="true">
        <accordion-block title="Arts">
          <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
        </accordion-block>
        <accordion-block title="Science">
          <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
        </accordion-block>
      </accordion>
`
      };
    }
  )

  .add(
    'Solo select', () => {
      return {
        components: { Accordion, AccordionBlock },
        template: `
      <accordion :multiselect="false">
        <accordion-block title="Arts">
          <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
        </accordion-block>
        <accordion-block title="Science">
          <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
        </accordion-block>
        <accordion-block title="Politics">
          <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
        </accordion-block>
      </accordion>
`
      };
    }
  )

  .add(
    'No js', () => {
      return {
        components: { Accordion, AccordionBlock },
        template: `
      <accordion :disabled="true">
        <accordion-block title="Arts">
          <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
        </accordion-block>
        <accordion-block title="Science">
          <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
        </accordion-block>
      </accordion>
`
      };
    }
  );
