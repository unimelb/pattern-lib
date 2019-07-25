import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import StoryButtonDefault from './StoryButtonDefault.vue';
import StoryButtonNoIcon from './StoryButtonNoIcon.vue';
import StoryButtonIcons from './StoryButtonIcons.vue';
import StoryButtonSmall from './StoryButtonSmall.vue';
import StoryButtonExtraSmall from './StoryButtonExtraSmall.vue';
import StoryButtonWide from './StoryButtonWide.vue';
import StoryButtonExtraWide from './StoryButtonExtraWide.vue';
import StoryButtonFullWidth from './StoryButtonFullWidth.vue';
import StoryButtonElement from './StoryButtonElement.vue';
import StoryButtonCMSIcons from './StoryButtonCMSIcons.vue';
import StoryButtonCMSIconsInverted from './StoryButtonCMSIconsInverted.vue';
import StoryButtonInverted from './StoryButtonInverted.vue';
import StoryButtonCMSIconsInverse from './StoryButtonCMSIconsInverse.vue';
import StoryButtonsPrevNext from './StoryButtonsPrevNext.vue';
import StoryButtonCTA from './StoryButtonCTA.vue';
import StoryButtonAdjacent from './StoryButtonAdjacent.vue';
import StoryButtonAdjacentFullWidth from './StoryButtonAdjacentFullWidth.vue';
import StoryButtonSecondary from './StoryButtonSecondary.vue';
import StoryButtonCampaign from './StoryButtonCampaign.vue';

import ButtonDefault from './ButtonDefault.vue';
/* ##Import story component here */

/* Section - Focus  */
storiesOf('Buttons', module)
  .add('Default', createStory(StoryButtonDefault))
  .add('No Icon', createStory(StoryButtonNoIcon))
  .add('Icons', createStory(StoryButtonIcons))
  .add('Button as <button> element', createStory(StoryButtonElement))
  .add('Secondary Button', createStory(StoryButtonSecondary))
  .add('Inverted button', createStory(StoryButtonInverted))
  .add('Prev/Next aligned buttons', createStory(StoryButtonsPrevNext))
  .add('CTA Button', createStory(StoryButtonCTA))
  .add('Campaign Button', createStory(StoryButtonCampaign));

storiesOf('Buttons/Adjacent', module)
  .add('Default', createStory(StoryButtonAdjacent))
  .add('Full Width', createStory(StoryButtonAdjacentFullWidth));

storiesOf('Buttons/Width', module)
  .add('Default', createStory(ButtonDefault))
  .add('Wide', createStory(StoryButtonWide))
  .add('Extra Wide', createStory(StoryButtonExtraWide))
  .add('Full Width', createStory(StoryButtonFullWidth));

storiesOf('Buttons/Sizes', module)
  .add('Default', createStory(ButtonDefault))
  .add('Extra Small', createStory(StoryButtonExtraSmall))
  .add('Small', createStory(StoryButtonSmall));

storiesOf('Buttons/CMS', module)
  .add('Default (btn--icon)', createStory(StoryButtonCMSIcons))
  .add('Inverted', createStory(StoryButtonCMSIconsInverted))
  .add('Inverse (btn--icon-before)', createStory(StoryButtonCMSIconsInverse));
