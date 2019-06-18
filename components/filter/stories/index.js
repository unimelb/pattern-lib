import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import BreadthStory from './BreadthStory.vue';
import InputStory from './InputStory.vue';
import DropdownStory from './DropdownStory.vue';
import CheckboxStory from './CheckboxStory.vue';
import ShowcaseFilterStory from './ShowcaseFilterStory.vue';

storiesOf('Filter / Components', module)
  .add('Breadth', createStory(BreadthStory))
  .add('Showcase', createStory(ShowcaseFilterStory));

storiesOf('Filter / Elements', module)
  .add('Input', createStory(InputStory))
  .add('Checkbox', createStory(CheckboxStory))
  .add('Dropdown', createStory(DropdownStory));
