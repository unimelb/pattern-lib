import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import CheckListDefault from './CheckListDefault.vue';
import CheckListPreChecked from './CheckListPreChecked.vue';

storiesOf('Check List', module)
  .add('Default', createStory(CheckListDefault, { shallowRender: true }))
  .add('Pre-checked', createStory(CheckListPreChecked, { shallowRender: true }));
