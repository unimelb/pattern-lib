import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import ModalDefault from './ModalDefault.vue';
import TwoModalDialogs from './TwoModalDialogs.vue';

storiesOf('Modal', module)
  .add('Default', createStory(ModalDefault))
  .add('Two modal dialogs', createStory(TwoModalDialogs));
