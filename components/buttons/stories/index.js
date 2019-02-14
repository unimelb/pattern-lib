import { storiesOf } from '@storybook/vue';
import { addDecorator } from '@storybook/vue';
import { withA11Y } from '@storybook/addon-a11y';
import { createStory } from '../../../.storybook/utils';


import StoryTest from './StoryTest.vue';
import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';
import Story5 from './Story5.vue';
import Story6 from './Story6.vue';
import Story7 from './Story7.vue';
import Story8 from './Story8.vue';
import Story9 from './Story9.vue';
import Story10 from './Story10.vue';
import Story11 from './Story11.vue';
import Story12 from './Story12.vue';
import Story13 from './Story13.vue';
import Story14 from './Story14.vue';
import Story15 from './Story15.vue';
/* ##Import story component here */

addDecorator(withA11Y)

/* Section - Focus  */
storiesOf('Buttons', module)
  .add('Button bad a11y', createStory(StoryTest))
  .add('Button with icon', createStory(Story1))
  .add('Button without icon', createStory(Story2))
  .add('Button icon examples', createStory(Story3))
  .add('Small', createStory(Story4))
  .add('Extra Small', createStory(Story5))
  .add('Wide', createStory(Story6))
  .add('Extra Wide', createStory(Story7))
  .add('Full Width', createStory(Story8))
  .add('All Sizes', createStory(Story9))
  .add('Button as <button> element', createStory(Story10))
  .add('Inverted button', createStory(Story12))
  .add('Button for use in CMS (btn--icon)', createStory(Story11))
  .add('Inverse button for use in CMS (btn--icon-before)', createStory(Story13))
  .add('Prev/Next aligned buttons', createStory(Story14))
  .add('CTA variant', createStory(Story15));
