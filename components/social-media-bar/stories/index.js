import { storiesOf } from '@storybook/vue';

import { createStory } from 'storybook/utils';

import SocialMediaBarDefault from './SocialMediaBarDefault.vue';

storiesOf(' Social Media Bar', module)
  .add('Default', createStory(SocialMediaBarDefault));
