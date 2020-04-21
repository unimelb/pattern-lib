import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import MajorsAndSpecialisations from './MajorsAndSpecialisations/StoryWrapper.vue';
/* ##Import story component here */

storiesOf('pages/Find a course interest pages', module)
  .add('Majors and specialisations tab', createStory(MajorsAndSpecialisations));
