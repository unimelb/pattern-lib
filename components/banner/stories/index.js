import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date,
} from '@storybook/addon-knobs';

import Banner from './Banner.vue';

storiesOf('Banner', module)
  .addDecorator(withKnobs)
  .add(
    'Level 1',
    (() => {
      const title = text('Title', 'About Us');
      return {
        components: {Banner},
        template: `
          <banner :level="1" title="${title}"></banner>
        `
      }
    }
  ))
  .add(
    'Level 2', () => {
      const title = text('Title', 'About Us');
      return {
        components: {Banner},
        template: `
          <banner :level="2" title="${title}" />
        `
      }
    }
  )
  .add(
    'Level 3', () => {
      const title = text('Title', 'About Us');
      return {
        components: {Banner},
        template: `
          <banner :level="3" title="${title}" />
        `
      }
    }
  );
