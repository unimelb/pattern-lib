import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import ContactListDefault from './ContactListDefault.vue';
import ContactListLongDetails from './ContactListLongDetails.vue';

storiesOf('Contact List', module)
  .add('Default', createStory(ContactListDefault))
  .add('Long details', createStory(ContactListLongDetails));
