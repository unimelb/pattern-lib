import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import NoticeDefault from './NoticeDefault.vue';
import NoticeWarning from './NoticeWarning.vue';
import NoticeSuccess from './NoticeSuccess.vue';
import NoticeDanger from './NoticeDanger.vue';
/* ##Import story component here */

storiesOf('Notice', module)
  .add('Default', createStory(NoticeDefault))
  .add('Warning', createStory(NoticeWarning))
  .add('Success', createStory(NoticeSuccess))
  .add('Danger', createStory(NoticeDanger));
/* ##Story goes here */
