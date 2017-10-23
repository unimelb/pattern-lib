import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import MceForm from './MceForm.vue';
import MceDate from './MceDate.vue';
import TextFields from './TextFields.vue';
import InlineForm from './InlineForm.vue';
import CheckListDefault from './CheckListDefault.vue';

storiesOf('Forms', module)
  .add('Text fields', createStory(TextFields))
  .add('Inline form', createStory(InlineForm))
  .add('MCE form markup', createStory(MceForm))
  .add('MCE date selector', createStory(MceDate))
  .add('Checklist', createStory(CheckListDefault, { shallowRender: true }));
