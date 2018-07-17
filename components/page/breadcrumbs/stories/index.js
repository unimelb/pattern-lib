import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../../.storybook/utils';

import PageBreadcrumbsLevel1 from './PageBreadcrumbsLevel1.vue';
import PageBreadcrumbsLevel2 from './PageBreadcrumbsLevel2.vue';
import PageBreadcrumbsLevel3 from './PageBreadcrumbsLevel3.vue';
import PageBreadcrumbsExtraLong from './PageBreadcrumbsExtraLong.vue';

storiesOf('Page / Breadcrumbs', module)
  .add('Level 1', createStory(PageBreadcrumbsLevel1))
  .add('Level 2', createStory(PageBreadcrumbsLevel2))
  .add('Level 3', createStory(PageBreadcrumbsLevel3))
  .add('Extra long', createStory(PageBreadcrumbsExtraLong));
