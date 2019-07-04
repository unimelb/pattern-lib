import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import AccordionFilterStory from './AccordionFilterStory.vue';
import InputStory from './InputStory.vue';
import DropdownStory from './DropdownStory.vue';
import CheckboxStory from './CheckboxStory.vue';
import CardsFilterStory from './CardsFilterStory.vue';
import FilterStory from './FilterStory.vue';

storiesOf('Filter / Components', module)
  .add('Filter Default', createStory(FilterStory))
  .add('Accordion Filter', createStory(AccordionFilterStory))
  .add('Cards Filter', createStory(CardsFilterStory));

storiesOf('Filter / Elements (Dev Only)', module)
  .add('Input', createStory(InputStory))
  .add('Checkbox', createStory(CheckboxStory))
  .add('Dropdown', createStory(DropdownStory));
