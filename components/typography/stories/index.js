import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import HeadingElements from './HeadingElements.vue';
import HeadingClasses from './HeadingClasses.vue';
import LongHeadings from './LongHeadings.vue';
import Links from './Links.vue';
import ListsOrdered from './ListsOrdered.vue';
import ListsUnordered from './ListsUnordered.vue';
import ListsMixed from './ListsMixed.vue';

storiesOf('Typography', module)
  .add('Heading elements', () => ({
    components: { HeadingElements },
    template: '<heading-elements />'
  }))
  .add('Heading classes', () => ({
    components: { HeadingClasses },
    template: `<heading-classes />`
  }))
  .add('Long headings', () => ({
    components: { LongHeadings },
    template: `<long-headings />`
  }))
  .add('Links', () => ({
    components: { Links },
    template: '<links />'
  }))
  .add('Lists - ordered', () => ({
    components: { ListsOrdered },
    template: '<lists-ordered />'
  }))
  .add('Lists - unordered', () => ({
    components: { ListsUnordered },
    template: '<lists-unordered />'
  }))
  .add('Lists - mixed', () => ({
    components: { ListsMixed },
    template: '<lists-mixed />'
  }));
