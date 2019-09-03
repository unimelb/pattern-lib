import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import SocialListDefault from './SocialListDefault.vue';
import SocialListInverted from './SocialListInverted.vue';
import SocialListGeneric from './SocialListGeneric.vue';

storiesOf('Social List', module)
  .add('Default (deprecated)', createStory(SocialListDefault))
  .add('Inverted (deprecated)', createStory(SocialListInverted))
  .add('Generic', createStory(SocialListGeneric));
