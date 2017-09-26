import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withNotes } from '@storybook/addon-notes';
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

import icon from './../../icons/stories/Icon.vue';
import ButtonIcon from './../../buttons/stories/ButtonIcon.vue';
import LazyBgImg from './../lazy-bgimg.vue';
import bgLoader from './../index.js';

storiesOf('Progressive Images', module)
  .addDecorator(withKnobs)
  .add('Background images - component', () => {
    const title = text('Title', 'Using component');
    const paragraph = text('Paragraph text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ');
    const btnText = text('Button Text', 'Example Title');

    return {
      components: { LazyBgImg, icon, ButtonIcon },
      template: `
      <LazyBgImg class="section section--image bg-inverted lazy-bgimg" imgSrc="https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg" placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Starsinthesky.jpg/220px-Starsinthesky.jpg">
        <div class="section__inner section__inner--sml">
          <div class="card card--focus-box card--focus-box--loose bg-white">
            <icon class="card--focus-box__cnr card--focus-box__cnr--top-left" width="54px" height="54px" name="focus-top-left" />
            <icon class="card--focus-box__cnr card--focus-box__cnr--btm-right" width="54px" height="54px" name="focus-bottom-right" />
            <div class="card__inner ">
              <h3 class="heading-section">${title}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <button-icon>${btnText}</button-icon>
            </div>
          </div>
        </div>
      </LazyBgImg>`
    }
  })
  .add(
    'Background images - directive',
    withNotes(
      `
        <div>
          <h2>Background images - directive</h2>
          <pre>
            <code>
              v-bgimg="{imgSrc: 'largeimage.jpg', placeholder: 'smallplaceholder.jpg'}
            </code>
          </pre>
        </div>
      `
    )
    (() => {
      const title = text('Title', 'Using directive');
      const btnText = text('Button Text', 'Example Title');
      
      return {
        components: { icon, ButtonIcon },
        template: `
          <section class="section section--image bg-inverted " v-bgimg="{imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg', placeholder: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Starsinthesky.jpg/220px-Starsinthesky.jpg'}">
            <div class="section__inner section__inner--sml">
              <div class="card card--focus-box card--focus-box--loose bg-white">
                <icon class="card--focus-box__cnr card--focus-box__cnr--top-left" width="54px" height="54px" name="focus-top-left" />
                <icon class="card--focus-box__cnr card--focus-box__cnr--btm-right" width="54px" height="54px" name="focus-bottom-right" />
                <div class="card__inner ">
                  <h3 class="heading-section">${title}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <button-icon>${btnText}</button-icon>
                </div>
              </div>
            </div>
          </section>
        `
      }
    }
  ))