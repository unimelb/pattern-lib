import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';
import ContainerDocumentList from './ContainerDocumentList.vue';

storiesOf('Document List', module)
  .add('Document List', createStory(Story2))
  .add('Document thumbnail list', createStory(Story3))
  .add('Document thumbnail list - four col', createStory(Story4))
  .add('Container document list (for CMS)', createStory(ContainerDocumentList));
