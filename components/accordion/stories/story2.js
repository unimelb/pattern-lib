import withReadme from 'storybook-readme/with-readme';
import RenderMarkup from '../../RenderMarkup';

import Accordion from '../Accordion.vue';
import AccordionBlock from '../AccordionBlock.vue';

const story = {
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
`,
};

const markup = new RenderMarkup(story);

export default withReadme(markup.prettifiedMarkup, () => story);
