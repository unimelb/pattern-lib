import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import CheckListDefault from './CheckListDefault.vue';

storiesOf('Checklist', module)
  .add('Default', createStory(CheckListDefault, { shallowRender: true }));
