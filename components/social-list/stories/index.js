import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import SocialListDefault from './SocialListDefault.vue';
import SocialListInverted from './SocialListInverted.vue';
import SocialListGeneric from './SocialListGeneric.vue';

storiesOf('Social List', module)
  .add('Default', createStory(SocialListDefault))
  .add('Inverted', createStory(SocialListInverted))
  .add('Generic', createStory(SocialListGeneric));
