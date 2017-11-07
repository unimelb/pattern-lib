import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import PageNavDefault from './PageNavDefault.vue';
import PageNavNested from './PageNavNested.vue';
import PageNavAccordion from './PageNavAccordion.vue';

import PageSearchDefault from './PageSearchDefault.vue';

storiesOf('Page / Header tools', module)
  .add('Default', createStory(PageNavDefault, { shallowRender: true }))
  .add('Search only', createStory(PageSearchDefault, { shallowRender: true }))
  .add('Nested site nav', createStory(PageNavNested, { shallowRender: true }))
  .add('Nested site nav, accordion alternate', createStory(PageNavAccordion, { shallowRender: true }));
