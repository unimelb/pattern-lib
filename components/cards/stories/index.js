import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';


import CardNewsStory1 from './News/Story1.vue';
import CardNewsStory2 from './News/Story2.vue';

import CardImageListStory1 from './ImageList/Story1.vue';
import CardImageListStory2 from './ImageList/Story2.vue';
import CardImageListStory3 from './ImageList/Story3.vue';
import CardImageListStory4 from './ImageList/Story4.vue';
import CardImageListStory5 from './ImageList/Story5.vue';
import CardFocusBoxStory1 from './FocusBox/Story1.vue';
import CardFocusBoxStory2 from './FocusBox/Story2.vue';
import CardFocusBoxStory3 from './FocusBox/Story3.vue';
import CardFactsStory1 from './Facts/Story1.vue';
import CardDivisionStory1 from './Division/Story1.vue';
import CardDivisionHeadStory1 from './DivisionHead/Story1.vue';
import CardDivisionHeadStory2 from './DivisionHead/Story2.vue';
import CardDivisionHeadStory3 from './DivisionHead/Story3.vue';
import CardBioHeaderStory1 from './BioHeader/Story1.vue';
import CardBioHeaderStory2 from './BioHeader/Story2.vue';
import CardBioHeaderStory3 from './BioHeader/Story3.vue';
import FocusImageReadme from './ImageList/FocusImageReadme.md';
import HeroImageReadme from './ImageList/HeroImageReadme.md';

/* ##Import story component here */


/* News Stories  */
storiesOf('Cards/News Listing', module)
  .add('3 Column', createStory(CardNewsStory1))
  .add('1 Column', createStory(CardNewsStory2));

/* Image Listings */
storiesOf('Cards/Image Listing/Bio Images', module)
  .add('Bio Images', createStory(CardImageListStory1));

storiesOf('Cards/Image Listing/Focus Marks', module)
  .add('Three Column', createStory(CardImageListStory2))
  .add('Two Column', createStory(CardImageListStory4, false, FocusImageReadme))
  .add('Color variations', createStory(CardImageListStory5));

storiesOf('Cards/Image Listing/Hero Image', module)
  .add('Hero Image', createStory(CardImageListStory3, false, HeroImageReadme));

/* Focus Boxes */
storiesOf('Cards/Focus Boxes', module)
  .add('3 Col', createStory(CardFocusBoxStory1))
  .add('2 Col', createStory(CardFocusBoxStory2))
  .add('Colour variations', createStory(CardFocusBoxStory3));

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
