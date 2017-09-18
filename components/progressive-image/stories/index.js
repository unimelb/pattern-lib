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

import LazyBgImg from './../lazy-bgimg.vue';

storiesOf('Progressive Images', module)
  .addDecorator(withKnobs)
  .add('Progressive background images', () => {

    return {
      components: { LazyBgImg },
      template: `
      <LazyBgImg class="section section--image bg-inverted" imgSrc="https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg" placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Starsinthesky.jpg/220px-Starsinthesky.jpg">
        <div class="section__inner section__inner--sml">
          <h3 class="heading-section">Lazy background image</h3>
          <p>
            testset 
          </p>
          <br><a class="btn btn--inverted btn--center" href="#">btn text</a>
        </div>
      </LazyBgImg>`
    }
  });