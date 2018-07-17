import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import CheckListDefault from './CheckListDefault.vue';
import CheckListPreChecked from './CheckListPreChecked.vue';
import CheckListDownload from './CheckListDownload.vue';

storiesOf('Check List', module)
  .add('Default', createStory(CheckListDefault))
  .add('Pre-checked', createStory(CheckListPreChecked))
  .add('Download variant', createStory(CheckListDownload));
