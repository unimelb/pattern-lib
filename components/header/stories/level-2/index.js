import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import Level2Default from './Level2Default.vue';
import Level2Entity from './Level2Entity.vue';
import Level2DualEntity from './Level2DualEntity.vue';
import Level2Campaign from './Level2CampaignOverlay50.vue';
import Level2CampaignNoLogo from './Level2CampaignNoLogo.vue';

storiesOf(' Header / Level 2', module)
  .add('Default', createStory(Level2Default))
  .add('Entity identifier', createStory(Level2Entity))
  .add('Dual entity identifier', createStory(Level2DualEntity))
  .add('Campaign banner', createStory(Level2Campaign))
  .add('Campaign banner (no logo)', createStory(Level2CampaignNoLogo));
