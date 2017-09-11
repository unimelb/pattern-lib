import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import ButtonLink from './ButtonLink.vue';
import ButtonButton from './ButtonButton.vue';
import ButtonIcon from './ButtonIcon.vue';
import ChevronRight from './ChevronRight.vue';
import ButtonLinkInverted from './ButtonLinkInverted.vue';

storiesOf('Buttons', module)
  .add('Button (anchor element)', () => ({
    components: { ButtonLink },
    template: '<button-link />'
  }))
  .add('Button (button element)', () => ({
    components: { ButtonButton },
    template: '<button-button />'
  }))
  .add('Lead button', () => ({
    components: { ButtonLink },
    template: '<button-link />'
  }))
  .add('Button with icon', () => ({
    components: { ButtonIcon },
    template: '<button-icon />'
  }))
  .add('Button with hard-coded min-width', () => ({
    components: { ButtonIcon },
    template: '<button-icon style="min-width: 18rem;" />'
  }))
  .add('Button with hard-coded max-width', () => ({
    components: { ButtonIcon },
    template: '<button-icon style="max-width: 20rem;" />'
  }))
  .add('Centered text with icon', () => ({
    components: { ButtonIcon },
    template: '<button-icon class="spotlight__btn btn btn--appendicon" style="min-width: 20rem;" />'
  }))
  .add('Inverted button', () => ({
    components: { ButtonLinkInverted, ChevronRight },
    template: '<button-link-inverted class="bg-inverted" style="padding: 20px" />'
  }));
