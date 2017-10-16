import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  text,
} from '@storybook/addon-knobs';
import VueProgressiveImage from 'vue-progressive-image';
import withReadme from 'storybook-readme/with-readme';

import ButtonIcon from './../../buttons/stories/ButtonIcon.vue';
import prgimgReadme from './progressive-image.md';
import prgbgReadme from './progressive-background.md';
import lazybgReadme from './lazybg-directive.md';

storiesOf('Progressive Images', module)
  .addDecorator(withKnobs)
  .add('Background images - component', withReadme(prgimgReadme, () => {
    const title = text('Title', 'Using component');
    const btnText = text('Button Text', 'Example Title');

    return {
      components: { ButtonIcon },
      template: `
      <progressive-background no-ratio class="section section--image bg-inverted" src="https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg" placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Starsinthesky.jpg/220px-Starsinthesky.jpg">
        <div class="section__inner section__inner--sml">
          <div class="card card--focus-box card--focus-box--loose bg-white">
            <SvgIcon class="card--focus-box__cnr card--focus-box__cnr--top-left" width="54px" height="54px" name="focus-top-left" />
            <SvgIcon class="card--focus-box__cnr card--focus-box__cnr--btm-right" width="54px" height="54px" name="focus-bottom-right" />
            <div class="card__inner ">
              <h3 class="heading-section">${title}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <button-icon>${btnText}</button-icon>
            </div>
          </div>
        </div>
      </progressive-background>`,
    };
  }))
  .add('Background images - directive', withReadme(lazybgReadme, () => {
    const title = text('Title', 'Using directive');
    const btnText = text('Button Text', 'Example Title');

    return {
      components: { ButtonIcon },
      template: `
          <section class="section section--image bg-inverted " v-bgimg="{imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg', placeholder: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Starsinthesky.jpg/220px-Starsinthesky.jpg'}">
            <div class="section__inner section__inner--sml">
              <div class="card card--focus-box card--focus-box--loose bg-white">
                <SvgIcon class="card--focus-box__cnr card--focus-box__cnr--top-left" width="54px" height="54px" name="focus-top-left" />
                <SvgIcon class="card--focus-box__cnr card--focus-box__cnr--btm-right" width="54px" height="54px" name="focus-bottom-right" />
                <div class="card__inner ">
                  <h3 class="heading-section">${title}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <button-icon>${btnText}</button-icon>
                </div>
              </div>
            </div>
          </section>
        `,
    };
  }))
  .add('Progressive image component', withReadme(prgbgReadme, () => ({
    components: { VueProgressiveImage },
    template: `
          <section-wrap small>
            <progressive-img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg" />
          </section-wrap>
        `,
  })));
