import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import CheckListDefault from './CheckListDefault.vue';
import CheckListCms from './CheckListCms.vue';

storiesOf('Check List', module)
  .add('Default', createStory(CheckListDefault))
  .add('CMS', createStory(CheckListCms), { shallowRender: true });
