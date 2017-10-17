import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import HeadingElements from './HeadingElements.vue';
import HeadingClasses from './HeadingClasses.vue';
import LongHeadings from './LongHeadings.vue';
import Lead from './Lead.vue';
import Links from './Links.vue';
import ListsOrdered from './ListsOrdered.vue';
import ListsUnordered from './ListsUnordered.vue';
import ListsMixed from './ListsMixed.vue';

storiesOf('Typography', module)
  .add('Heading elements', createStory(HeadingElements))
  .add('Heading classes', createStory(HeadingClasses))
  .add('Long headings', createStory(LongHeadings))
  .add('Lead paragraph', createStory(Lead))
  .add('Links', createStory(Links))
  .add('Lists - ordered', createStory(ListsOrdered))
  .add('Lists - unordered', createStory(ListsUnordered))
  .add('Lists - mixed', createStory(ListsMixed));
