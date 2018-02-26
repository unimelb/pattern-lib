import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Level1Default from './Level1Default.vue';
import Level1Entity from './Level1Entity.vue';
import Level1DualEntity from './Level1DualEntity.vue';
import Level1Home from './Level1Home.vue';
import Level1HomeCampaignButton from './Level1HomeCampaignButton.vue';
import Level1HomeCampaignOverlay50 from './Level1HomeCampaignOverlay50.vue';
import Level1HomeCampaignOverlay25 from './Level1HomeCampaignOverlay25.vue';

storiesOf('Page / Header / Level 1', module)
  .add('Default', createStory(Level1Default))
  .add('Entity identifier', createStory(Level1Entity))
  .add('Dual entity identifier', createStory(Level1DualEntity))
  .add('Homepage campaign (card)', createStory(Level1Home))
  .add('Homepage campaign (button)', createStory(Level1HomeCampaignButton))
  .add('Homepage campaign (overlay, 50% opacity)', createStory(Level1HomeCampaignOverlay50))
  .add('Homepage campaign (overlay, 25% opacity)', createStory(Level1HomeCampaignOverlay25));
