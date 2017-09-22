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


storiesOf('Banner', module)
  .addDecorator(withKnobs)
  .add(
    'Level 1',
    (() => {
      const title = text('Title', 'About Us');
      return {
        template: `
          <header class="banner banner--l1">
            <div class="banner__inner max">
              <a class="logo" href="https://www.unimelb.edu.au"><img alt="The University of Melbourne homepage" class="banner__logo" height="117" src="https://d2h9b02ioca40d.cloudfront.net/v7.0/assets/logo-4d389.svg" width="117"></a>
              <h1 class="banner__heading">
                ${title}
              </h1>
            </div>
            <div class="banner__img banner__aperture" style="background-image: url(https://placeimg.com/990/530/arch);"></div>
          </header>
        `
      }
    }
  ))
  .add(
    'Level 2', () => {
      const title = text('Title', 'About Us');
      return {
        template: `
          <header class="banner banner--l2">
            <div class="banner__inner max">
              <a class="logo" href="https://www.unimelb.edu.au"><img alt="The University of Melbourne homepage" class="banner__logo" height="117" src="http://about-us-unimelb.netlify.com/images/logo-unhoused.svg" width="117"></a>
              <h1 class="banner__heading">
                ${title}
              </h1>
            </div>
            <div class="banner__img banner__aperture" style="background-image: url(https://placeimg.com/990/530/arch);"></div>
          </header>
        `
      }
    }
  )
  .add(
    'Level 3', () => {
      const title = text('Title', 'About Us');
      return {
        template: `
        <header class="banner banner--l3">
          <div class="banner__shape"></div>
          <div class="banner__inner max">
            <a class="logo" href="https://www.unimelb.edu.au"><img alt="The University of Melbourne homepage" class="banner__logo" height="117" src="http://about-us-unimelb.netlify.com/images/logo-unhoused.svg" width="117"></a>
          </div>
        </header>
        `
      }
    }
  );
