import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import HeadingElements from './HeadingElements.vue';
import HeadingClasses from './HeadingClasses.vue';
import LongHeadings from './LongHeadings.vue';
import Lead from './Lead.vue';
import Links from './Links.vue';
import LinksExternal from './LinksExternal.vue';
import ListsOrdered from './ListsOrdered.vue';
import ListsOrderedGiant from './ListsOrderedGiant.vue';
import ListsSpaced from './ListsSpaced.vue';
import ListsVariantBullets from './ListsVariantBullets.vue';
import ListsUnordered from './ListsUnordered.vue';
import ListsMixed from './ListsMixed.vue';
import Pre from './Pre.vue';
import Headings from './Headings.vue';


storiesOf('Typography (deprecated)', module)
  .add('Heading elements', createStory(HeadingElements))
  .add('Heading classes', createStory(HeadingClasses));

storiesOf('Typography', module)
  .add('Titles', createStory(Headings))
  .add('Long headings', createStory(LongHeadings))
  .add('Lead paragraph', createStory(Lead))
  .add('Links', createStory(Links))
  .add('Links - external', createStory(LinksExternal))
  .add('Lists - ordered', createStory(ListsOrdered))
  .add('Lists - ordered, giant', createStory(ListsOrderedGiant))
  .add('Lists - unordered', createStory(ListsUnordered))
  .add('Lists - spaced for longer content', createStory(ListsSpaced))
  .add('Lists - variant bullets', createStory(ListsVariantBullets))
  .add('Lists - mixed', createStory(ListsMixed))
  .add('Preformatted text', createStory(Pre));
