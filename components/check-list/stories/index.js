import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import CheckListDefault from './CheckListDefault.vue';

storiesOf('Check List', module)
  .add('Default', createStory(CheckListDefault), { shallowRender: true });
