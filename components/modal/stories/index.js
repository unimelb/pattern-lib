import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import ModalDefault from './ModalDefault.vue';
import TwoModalDialogs from './TwoModalDialogs.vue';
import ModalNoJs from './ModalNoJs.vue';

storiesOf('Modal', module)
  .add('Default', createStory(ModalDefault, { shallowRender: true }))
  .add('Two modal dialogs', createStory(TwoModalDialogs, { shallowRender: true }))
  .add('No js', createStory(ModalNoJs, { shallowRender: true }));
