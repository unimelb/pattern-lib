import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  object,
  select,
  color,
  date,
} from '@storybook/addon-knobs';


import ButtonLink from './ButtonLink.vue';
import ButtonButton from './ButtonButton.vue';
import ButtonIcon from './ButtonIcon.vue';
import ChevronRight from './ChevronRight.vue';
import ButtonLinkInverted from './ButtonLinkInverted.vue';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('Button with icon', () => {
    const btnText = text('Button Text', 'About Us');
    return {
      components: { ButtonIcon },
      template: `<button-icon btnText="${btnText}" />`
    }
  })
  .add('Button small', () => {
    const btnText = text('Button Text', 'About Us');
    const icons = select('Icon', ['chevron-right', 'close'], 'chevron-right' );
    return {
      components: { ButtonIcon },
      template: `<button-icon icon="${icons}" small="true" btnText="${btnText}" />`
    }
  })
  .add('Button extra small', () => {
    const btnText = text('Button Text', 'About Us');
    const icons = select('Icon', ['chevron-right', 'close'], 'chevron-right' );
    return {
      components: { ButtonIcon },
      template: `<button-icon icon="${icons}" xsmall="true" btnText="${btnText}" />`
    }
  })
  .add('Button wide', () => {
    const btnText = text('Button Text', 'About Us');
    const icons = select('Icon', ['chevron-right', 'close'], 'chevron-right' );
    return {
      components: { ButtonIcon },
      template: `<button-icon icon="${icons}" class="btn--wide" btnText="${btnText}" />`
    }
  })
  .add('Button extra wide', () => {
    const btnText = text('Button Text', 'About Us');
    const icons = select('Icon', ['chevron-right', 'close'], 'chevron-right' );
    return {
      components: { ButtonIcon },
      template: `<button-icon icon="${icons}" class="btn--xwide" btnText="${btnText}" />`
    }
  })