import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import MceForm from './MceForm.vue';
import MceDate from './MceDate.vue';
import TextFields from './TextFields.vue';
import InlineForm from './InlineForm.vue';
import InlineSearchForm from './InlineSearchForm.vue';
import InlineSearchFormInverse from './InlineSearchFormInverse.vue';
import InlineSearchFormMin from './InlineSearchFormMin.vue';
import InlineSearchTodaySubmit from './InlineSearchTodaySubmit.vue';
import InlineSearchTodayNoButton from './InlineSearchTodayNoButton.vue';
import InlineSearchTodayDarkBg from './InlineSearchTodayDarkBg.vue';
import StyledSelect from './StyledSelect.vue';

storiesOf('Forms', module)
  .add('Text fields', createStory(TextFields))
  .add('Inline form', createStory(InlineForm))
  .add('Inline search form', createStory(InlineSearchForm))
  .add('Inline search form (inverse)', createStory(InlineSearchFormInverse))
  .add('Inline search form (min)', createStory(InlineSearchFormMin))
  .add('Inline search form with submit button (Today)', createStory(InlineSearchTodaySubmit))
  .add('Inline search form without button (Today)', createStory(InlineSearchTodayNoButton))
  .add('Inline search form dark bg (Today)', createStory(InlineSearchTodayDarkBg))
  .add('MCE form markup', createStory(MceForm))
  .add('MCE date selector', createStory(MceDate))
  .add('Styled select', createStory(StyledSelect));
