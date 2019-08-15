import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import SublinkMenuDefault from './SublinkMenuDefault.vue';
import TwoColumns from './2Columns.vue';
import WithImages from './WithImages.vue';
import TwoColText from './2ColText.vue';
/* ##Import story component here */

storiesOf('Sublink Menu', module)
  .add('3 Columns', createStory(SublinkMenuDefault))
  .add('2 Columns', createStory(TwoColumns))
  .add('1of2 Columns', createStory(TwoColText))
  .add('With Images', createStory(WithImages));
