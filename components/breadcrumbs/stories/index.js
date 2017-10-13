import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import BreadcrumbsLevel1 from './BreadcrumbsLevel1.vue';
import BreadcrumbsLevel2 from './BreadcrumbsLevel2.vue';
import BreadcrumbsLevel3 from './BreadcrumbsLevel3.vue';

storiesOf('Breadcrumbs', module)
  .add('Level 1', createStory(BreadcrumbsLevel1))
  .add('Level 2', createStory(BreadcrumbsLevel2))
  .add('Level 3', createStory(BreadcrumbsLevel3));
