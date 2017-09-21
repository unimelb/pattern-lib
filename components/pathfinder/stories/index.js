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

import ListItem from '../../listing/stories/listitem.vue';
import Pathfinder from './pathfinder.vue';


storiesOf('Pathfinder', module)
  .addDecorator(story => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <main>
          <Story/>
        </main>`,
    };
  })
  .addDecorator(withKnobs)
  .add(
    'Pathfinder - Title',() => {
      const bgImage = text('Background Image', 'http://about-us-unimelb.netlify.com/images/UoM-soft-3.png');
      const boxes = array('Boxes data', ['Engagement outcomes','Study Health at Melbourne','World class research']);
      return {
        components: { ListItem, Pathfinder },
        template: `
          <div>
            <h3 style="text-align: center;" class="heading-section">Pathfinder</h3>
            <Pathfinder image="${bgImage}" boxes="${boxes}" />
          </div>
        `
      }
    }
  )
  .add(
    'Pathfinder - Buttons', () => {
      const bgImage = text('Background Image', 'http://about-us-unimelb.netlify.com/images/UoM-soft-3.png');
      const boxes = array('Boxes data', ['Engagement outcomes','Study Health at Melbourne','World class research']);
      return {
        components: { ListItem, Pathfinder },
        template: `
          <div>
            <h3 style="text-align: center;" class="heading-section">Pathfinder small</h3>
            <section class="section bg-inverted-dark" style="background-image: url(${bgImage});">
              <div class="section__inner">
                <div class="listing listing--three listing--center">
                  <ListItem>
                    <a href="#" class="btn-owner card card--focus-box bg-inverted card--pathfinder card--pathfinder--sml">
                      <svg class="card--focus-box__cnr card--focus-box__cnr--top-left" role="presentation" focusable="false" width="54" height="54">
                        <use xlink:href="#focus-top-left"></use>
                      </svg>
                      <svg class="card--focus-box__cnr card--focus-box__cnr--btm-right" role="presentation" focusable="false" width="54" height="54">
                        <use xlink:href="#focus-bottom-right"></use>
                      </svg>
                      <div class="card__inner">
                        <button class="card__btn btn btn--inverted btn--fullwidth btn--icon btn--icon--chevron-right-inverted">Find out more</button>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. debitis sint odio asperiores accusamus recusandae autem omnis accusantium delectus necessitatibus.</p>
                      </div>
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="#" class="btn-owner card card--focus-box bg-inverted card--pathfinder card--pathfinder--sml">
                      <svg class="card--focus-box__cnr card--focus-box__cnr--top-left" role="presentation" focusable="false" width="54" height="54">
                        <use xlink:href="#focus-top-left"></use>
                      </svg>
                      <svg class="card--focus-box__cnr card--focus-box__cnr--btm-right" role="presentation" focusable="false" width="54" height="54">
                        <use xlink:href="#focus-bottom-right"></use>
                      </svg>
                      <div class="card__inner">
                        <button class="card__btn btn btn--inverted btn--fullwidth btn--icon btn--icon--chevron-right-inverted">Find out more</button>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                      </div>
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="#" class="btn-owner card card--focus-box bg-inverted card--pathfinder card--pathfinder--sml">
                      <svg class="card--focus-box__cnr card--focus-box__cnr--top-left" role="presentation" focusable="false" width="54" height="54">
                        <use xlink:href="#focus-top-left"></use>
                      </svg>
                      <svg class="card--focus-box__cnr card--focus-box__cnr--btm-right" role="presentation" focusable="false" width="54" height="54">
                        <use xlink:href="#focus-bottom-right"></use>
                      </svg>
                      <div class="card__inner">
                        <button class="card__btn btn btn--inverted btn--fullwidth btn--icon btn--icon--chevron-right-inverted">Find out more</button>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  sint odio asperiores accusamus recusandae autem omnis accusantium delectus necessitatibus.</p>
                      </div>
                    </a>
                  </ListItem>
                </div>
              </div>
            </section>
          </div>
        `
      }
    }
  )