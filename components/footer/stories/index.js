import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import FooterDefault from './FooterDefault.vue';

storiesOf('Footer', module)
  .add('Default', createStory(FooterDefault));
