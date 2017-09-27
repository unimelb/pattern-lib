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
    'Level 1 - With Department', () => {
      const title = text('Heading', 'About Us');
      const subheading = text('Sub heading', 'Faculty of Medicine, Dentistry and Health Science');
      return {
        components: {Banner},
        template: `
          <banner :level="1" title="${title}" subheading="${subheading}" />
        `
      }
    }
  )
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
    'Level 2 - With Department', () => {
      const title = text('Heading', 'About Us');
      const subheading = text('Sub heading', 'Faculty of Medicine, Dentistry and Health Science');
      return {
        components: {Banner},
        template: `
          <banner :level="2" title="${title}" subheading="${subheading}" />
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
