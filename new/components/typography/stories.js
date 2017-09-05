import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

const headings = `
  <h1>
`;

storiesOf('Typography', module)
  .add('Headings and paragraphs', () => ({ template: `
    <div>
      <h1>Heading Level 1</h1>
      <h2>Heading Level 2</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum dolor magnam inventore nobis accusamus dolores possimus quaerat iste perspiciatis voluptatibus quia, non explicabo, ipsa repellendus aut unde cupiditate beatae!</p>
      <h3>Heading Level 3</h3>
      <h4>Heading Level 4</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum dolor magnam inventore nobis accusamus dolores possimus quaerat iste perspiciatis voluptatibus quia, non explicabo, ipsa repellendus aut unde cupiditate beatae!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum dolor magnam inventore nobis accusamus dolores possimus quaerat iste perspiciatis voluptatibus quia, non explicabo, ipsa repellendus aut unde cupiditate beatae!</p>
      <h5>Heading Level 5</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum dolor magnam inventore nobis accusamus dolores possimus quaerat iste perspiciatis voluptatibus quia, non explicabo, ipsa repellendus aut unde cupiditate beatae!</p>
      <h6>Heading Level 6</h6>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum dolor magnam inventore nobis accusamus dolores possimus quaerat iste perspiciatis voluptatibus quia, non explicabo, ipsa repellendus aut unde cupiditate beatae!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum dolor magnam inventore nobis accusamus dolores possimus quaerat iste perspiciatis voluptatibus quia, non explicabo, ipsa repellendus aut unde cupiditate beatae!</p>
    </div>
  ` }));
