import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

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
import StoryButtonEvent from './StoryButtonEvent.vue';
import StoryButtonEventAlt from './StoryButtonEventAlt.vue';
import StoryButtonIconLeft from './StoryButtonIconLeft.vue';
import StoryButtonIconsLarge from './StoryButtonIconsLarge.vue';
import StoryButtonTwoIcons from './StoryButtonTwoIcons.vue';
import StoryButtonCampaignSecondary from './StoryButtonCampaignSecondary.vue';

import ButtonDefault from './ButtonDefault.vue';
/* ##Import story component here */

storiesOf('Buttons/Types', module)
  .add('Primary (default)', createStory(StoryButtonDefault))
  .add('Secondary', createStory(StoryButtonSecondary))
  .add('Inverted', createStory(StoryButtonInverted))
  .add('CTA', createStory(StoryButtonCTA))
  .add('Campaign', createStory(StoryButtonCampaign))
  .add('Campaign secondary', createStory(StoryButtonCampaignSecondary))
  .add('Event', createStory(StoryButtonEvent))
  .add('Event Alt', createStory(StoryButtonEventAlt))
  .add('<button> element', createStory(StoryButtonElement));

storiesOf('Buttons/Icons', module)
  .add('Icons', createStory(StoryButtonIcons))
  .add('No Icon', createStory(StoryButtonNoIcon))
  .add('Icon on left', createStory(StoryButtonIconLeft))
  .add('2 Icons', createStory(StoryButtonTwoIcons))
  .add('Large Icon', createStory(StoryButtonIconsLarge));

storiesOf('Buttons/Adjacent', module)
  .add('Default', createStory(StoryButtonAdjacent))
  .add('Full Width', createStory(StoryButtonAdjacentFullWidth))
  .add('Prev/Next aligned buttons', createStory(StoryButtonsPrevNext));

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
