import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import SublinkMenuDefault from './SublinkMenuDefault.vue';
/* ##Import story component here */

storiesOf('Sublink Menu', module)
  .add('Default', createStory(SublinkMenuDefault));
