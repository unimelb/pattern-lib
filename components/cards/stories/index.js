import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';


import CardImageStory1 from './Image/Story1.vue';
import CardNewsStory1 from './News/Story1.vue';
import CardNewsStory2 from './News/Story2.vue';
import CardLinkStory1 from './Link/Story1.vue';
import CardLinkStory2 from './Link/Story2.vue';
import CardLinkStory3 from './Link/Story3.vue';
import CardImageListStory1 from './ImageList/Story1.vue';
import CardImageListStory2 from './ImageList/Story2.vue';
import CardImageListStory3 from './ImageList/Story3.vue';
import CardImageListStory4 from './ImageList/Story4.vue';
import CardFocusBoxStory1 from './FocusBox/Story1.vue';
import CardFocusBoxStory2 from './FocusBox/Story2.vue';
import CardFactsStory1 from './Facts/Story1.vue';
import CardDivisionStory1 from './Division/Story1.vue';
import CardDivisionHeadStory1 from './DivisionHead/Story1.vue';
import CardDivisionHeadStory2 from './DivisionHead/Story2.vue';
import CardDivisionHeadStory3 from './DivisionHead/Story3.vue';
import CardBioHeaderStory1 from './BioHeader/Story1.vue';
import CardBioHeaderStory2 from './BioHeader/Story2.vue';
import CardBioHeaderStory3 from './BioHeader/Story3.vue';

/* ##Import story component here */

/* Image Stories  */
storiesOf('Cards/Card with Image', module)
  .add('Default', createStory(CardImageStory1));

/* News Stories  */
storiesOf('Cards/News Listing', module)
  .add('3 Column', createStory(CardNewsStory1))
  .add('1 Column', createStory(CardNewsStory2));

/* Link Stories  */
storiesOf('Cards/Link Box', module)
  .add('3 Boxes', createStory(CardLinkStory1))
  .add('4 Boxes', createStory(CardLinkStory2))
  .add('Longer titles', createStory(CardLinkStory3));

/* Image Listings */
storiesOf('Cards/Image Listing/Bio Images', module)
  .add('Bio Images', createStory(CardImageListStory1));

storiesOf('Cards/Image Listing/Focus Marks', module)
  .add('Three Column', createStory(CardImageListStory2))
  .add('Two Column', createStory(CardImageListStory4));

storiesOf('Cards/Image Listing/Hero Image', module)
  .add('Hero Image', createStory(CardImageListStory3));

/* Focus Boxes */
storiesOf('Cards/Focus Boxes', module)
  .add('3 Col', createStory(CardFocusBoxStory1))
  .add('2 Col', createStory(CardFocusBoxStory2));

storiesOf('Cards/Facts', module)
  .add('Mixed sizes', createStory(CardFactsStory1));

storiesOf('Cards/Division', module)
  .add('Division Profile', createStory(CardDivisionStory1));

storiesOf('Cards/Division Head', module)
  .add('Division Head (Single)', createStory(CardDivisionHeadStory2))
  .add('Division Heads (3 Col)', createStory(CardDivisionHeadStory1))
  .add('Division Heads (Compact)', createStory(CardDivisionHeadStory3));

storiesOf('Cards/Bio Header', module)
  .add('Small (Default)', createStory(CardBioHeaderStory1))
  .add('Wide', createStory(CardBioHeaderStory2))
  .add('With content', createStory(CardBioHeaderStory3));
