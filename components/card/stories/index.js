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
import CardImage from './card-image.vue';
import CardNews from './card-news.vue';
import CardLink from './card-link.vue';
import CardImageListing from './card-imagelisting.vue';


storiesOf('Cards', module)
  .addDecorator(story => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <main>
          <section class="section bg-alt">
            <div class="section__inner">
              <Story/>
            </div>
          </section>
        </main>`,
    };
  })
  .addDecorator(withKnobs)
  .add(
    'Card - with image',
    withNotes(
      `
        <div>
          <style>pre {  background-color: #444;  color: #eee; } </style>
          <h2>Listing</h2>
          <pre>
            <code>

            </code>
          </pre>

        </div>
      `
    )
    (() => {
      const title = text('Title', 'About Us');
      return {
        components: { ListItem, CardImage },
        template: `
          <div>
            <h3 style="text-align: center;" class="heading-section">Image box</h3>
            <p style="text-align: center;">Can somebody come up with a name for this version?</p>
            <div class="listing listing--three">
              <ListItem>
                <CardImage thumb="http://via.placeholder.com/300x400" title="Growing esteem" excerpt="Find out about our strategic journey and where we're headed."/>
              </ListItem>
              <ListItem>
                <CardImage thumb="http://via.placeholder.com/600x200" title="Melbourne model" excerpt="Check out how our degrees are structured to give our students flexibility and focus."/>
              </ListItem>
              <ListItem>
                <CardImage thumb="http://via.placeholder.com/300x200" title="Our structure" excerpt="this is a test of the content"/>
              </ListItem>
              <ListItem>
                <CardImage thumb="http://via.placeholder.com/550x200" title="Governance" excerpt="this is a test of the content"/>
              </ListItem>
              <ListItem>
                <CardImage thumb="http://via.placeholder.com/400x200" title="Annual reports" excerpt="See our governance details, including organisation and governance structures, regulatory framework, compliance obligations and risk management."/>
              </ListItem>
            </div>
          </div>
        `
      }
    }
  ))
  .add(
    'Card - news listing',
    withNotes(
      `
        <div>
          <style>pre {  background-color: #444;  color: #eee; } </style>
          <h2>Listing</h2>
          <pre>
            <code>

            </code>
          </pre>

        </div>
      `
    )
    (() => {
      const title = text('Title', 'About Us');
      return {
        components: { ListItem, CardNews },
        template: `
          <div >
            <h3 style="text-align: center;" class="heading-section">News listing</h3>
            <div class="listing listing--three">
              <ListItem>
                <CardNews thumb="http://via.placeholder.com/200x400" title="Growing esteem" excerpt="Find out about our strategic journey and where we're headed."/>
              </ListItem>
              <ListItem>
                <CardNews thumb="http://via.placeholder.com/400x200" title="Melbourne model" excerpt="Check out how our degrees are structured to give our students flexibility and focus."/>
              </ListItem>
              <ListItem>
                <CardNews thumb="http://via.placeholder.com/300x200" title="Our structure" excerpt="this is a test of the content"/>
              </ListItem>
              <ListItem>
                <CardNews thumb="http://via.placeholder.com/400x200" title="Governance" excerpt="this is a test of the content"/>
              </ListItem>
              <ListItem>
                <CardNews thumb="http://via.placeholder.com/400x200" title="Annual reports" excerpt="See our governance details, including organisation and governance structures, regulatory framework, compliance obligations and risk management."/>
              </ListItem>
            </div>
          </div>
        `
      }
    }
  ))
  .add(
    'Card - small link box',
    withNotes(
      `
        <div>
          <style>pre {  background-color: #444;  color: #eee; } </style>
          <h2>Listing</h2>
          <pre>
            <code>

            </code>
          </pre>

        </div>
      `
    )
    (() => {
      const links = array('Links', ['Research', 'Learning and teaching', 'Working with us']);
      const inverted = boolean('Inverted', true);
      return {
        components: { ListItem, CardLink },
        template: `
          <div style="text-align: center;">
            <h3 style="text-align: center;" class="heading-section">Small link boxes</h3>
            <div>
              ${links.map(link => `<CardLink thumb="http://via.placeholder.com/200x400" ${inverted ? "inverted" : ''} title="${link}" />`).join('')}
            </div>
          </div>
        `
      }
    }
  ))
  .add(
    'Card - Image listing (bio images)',
    withNotes(
      `
        <div>
          <style>pre {  background-color: #444;  color: #eee; } </style>
          <h2>Listing</h2>
          <pre>
            <code>

            </code>
          </pre>

        </div>
      `
    )
    (() => {
      const items = object('Links', [
        {
          title: 'Mr John Smith',
          meta: 'Provost',
          href: '#',
          thumb: "http://about-us-unimelb.netlify.com/images/leadership/senior-leadership/Professor-Jim-McCluskey.jpg"
        },
        {
          title: 'Professor John Doggeton',
          meta: 'Provost',
          href: '#',
          thumb: "http://via.placeholder.com/300x400"
        },
        {
          title: 'Mr Allan Tait',
          meta: 'Vice-Principal (Advancement)',
          href: '#',
          thumb: "http://about-us-unimelb.netlify.com/images/leadership/senior-leadership/Mr-Allan-Tait.jpg"
        },
        {
          title: 'Chancellor',
          meta: 'Chancellor',
          href: '#',
          thumb: "http://about-us-unimelb.netlify.com/images/leadership/senior-leadership/Mr-Nick-Blinco.jpg"
        },
      ]);
      const inverted = boolean('Inverted', false);
      return {
        components: { ListItem, CardImageListing },
        template: `
          <div style="text-align: center;">
            <h3 class="heading-section">Bio images</h3>
            <div class="listing listing--four">
              ${items.map(item => `<ListItem><CardImageListing thumb="${item.thumb}" meta="${item.meta}" ${inverted ? "inverted" : ''} title="${item.title}" /></ListItem>`).join('')}
            </div>
          </div>
        `
      }
    }
  ))
