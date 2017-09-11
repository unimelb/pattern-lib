import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import HeadingElements from './HeadingElements.vue';
import HeadingClasses from './HeadingClasses.vue';
import LongHeadings from './LongHeadings.vue';
import Links from './Links.vue';

storiesOf('Typography', module)
  .add('Heading elements', () => ({
    components: { HeadingElements },
    template: '<heading-elements />'
  }))
  .add('Heading classes', () => ({
    components: { HeadingClasses },
    template: `<heading-classes :classes="['heading-page', 'heading-page-sub', 'heading-section', 'heading-card']" />`
  }))
  .add('Long headings', () => ({
    components: { LongHeadings },
    template: `<long-headings :classes="['heading-page-sub', 'heading-section', 'heading-card']" />`
  }))
  .add('Links', () => ({
    components: { Links },
    template: '<links />'
  }));
