import { storiesOf } from '@storybook/vue';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';

import ButtonReadme from './Buttons.md';
import buttonWithIcon from './Button with icon.md';
import buttonAsButton from './Button as button.md';
import buttonWithIconClass from './Button with icon class.md';
import ButtonLink from './ButtonLink.vue';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(ButtonReadme))
  .add('Button with icon', withReadme(buttonWithIcon, () => {
    const btnText = text('Button Text', 'Button with icon');
    return {
      template: `<ButtonIcon >${btnText}</ButtonIcon>`,
    };
  }))
  .add('Button with icon (as button element)', withReadme(buttonAsButton, () => {
    const btnText = text('Button Text', 'Button with icon');
    return {
      template: `<ButtonIcon icon="twitter" element="button">${btnText}</ButtonIcon>`,
    };
  }))
  .add('Button without icon', () => {
    const btnText = text('Button Text', 'Button without icon');
    return {
      components: { ButtonLink },
      template: `<button-link href="#" class="btn--sml">${btnText}</button-link>`,
    };
  })
  .add('Button as button element', () => {
    const btnText = text('Button Text', 'Button without icon as a button');
    return {
      components: { ButtonLink },
      template: `<button-link element="button">${btnText}</button-link>`,
    };
  })
  .add('Button small', () => {
    const btnText = text('Button Text', 'I am a small button');
    const icons = select('Icon', ['chevron-right', 'close', 'download'], 'chevron-right');
    return {
      template: `<ButtonIcon icon="${icons}" class="btn--sml">${btnText}</ButtonIcon>`,
    };
  })
  .add('Button extra small', () => {
    const btnText = text('Button Text', 'I am a really small button');
    const icons = select('Icon', ['chevron-right', 'close', 'download'], 'chevron-right');
    return {
      template: `<ButtonIcon icon="${icons}" class="btn--xsml">${btnText}</ButtonIcon>`,
    };
  })
  .add('Button wide', () => {
    const btnText = text('Button Text', 'I am a wide button');
    const icons = select('Icon', ['chevron-right', 'close', 'download'], 'chevron-right');
    return {
      template: `<ButtonIcon icon="${icons}" class="btn--wide">${btnText}</ButtonIcon>>`,
    };
  })
  .add('Button extra wide', () => {
    const btnText = text('Button Text', 'I am a really wide button');
    const icons = select('Icon', ['chevron-right', 'close', 'download'], 'chevron-right');
    return {
      template: `<ButtonIcon icon="${icons}" class="btn--xwide">${btnText}</ButtonIcon>`,
    };
  })
  .add('Button full width', () => {
    const btnText = text('Button Text', 'I am a button that stretches to the width of the container');
    const icons = select('Icon', ['chevron-right', 'close', 'download'], 'chevron-right');
    return {
      template: `<ButtonIcon icon="${icons}" class="btn--fullwidth">${btnText}</ButtonIcon>`,
    };
  })
  .add('Button using btn--icon class', withReadme(buttonWithIconClass, () => {
    const btnText = text('Button Text', 'Button with icon');
    const icons = select('Icon', ['chevron-right', 'twitter', 'search', 'download'], 'chevron-right');
    return {
      template: `<button class="btn btn--icon btn--icon--${icons}">${btnText}</button>`,
    };
  }))
  .add('Button using btn--icon class (wide)', withReadme(buttonWithIconClass, () => {
    const btnText = text('Button Text', 'Button with icon');
    const icons = select('Icon', ['chevron-right', 'twitter', 'search', 'download'], 'chevron-right');
    const width = select('Width', ['', 'btn--wide', 'btn--xwide', 'btn--fullwidth'], 'btn--wide');
    const height = select('Height', ['', 'btn--sml', 'btn--xsml'], '');
    return {
      template: `<button class="btn btn--icon ${width} ${height} btn--icon--${icons}">${btnText}</button>`,
    };
  }))
  .add('Button using btn--icon class (inverted)', withReadme(buttonWithIconClass, () => {
    const btnText = text('Button Text', 'Button with icon');
    const icons = select('Icon', ['chevron-right', 'twitter', 'search', 'download'], 'chevron-right');
    const width = select('Width', ['', 'btn--wide', 'btn--xwide', 'btn--fullwidth'], 'btn--wide');
    const height = select('Height', ['', 'btn--sml', 'btn--xsml'], '');
    return {
      template: `
        <div class="bg-inverted">
          <div class="max" style="padding: 3rem">
            <button class="btn btn--inverted btn--icon ${width} ${height} btn--icon--${icons}-inverted">${btnText}</button>
          </div>
        </div>
        `,
    };
  }))
  .add('Button with different icons', withReadme(buttonAsButton, () => {
    const btnText = text('Button Text', 'Button with icon');
    return {
      template: `<ButtonIcon icon="microphone" element="button">${btnText}</ButtonIcon>`,
    };
  }));
