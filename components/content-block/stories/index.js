import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('Content Block', module)
  .addDecorator((story) => {
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
  .add('Content Block (Matrix CMS WYSIWYG)', () => {
    const titleH2 = text('Title H2', 'Example Title H2');
    const titleH3 = text('Title H3', 'Example Title H3');
    const paragraph = text('Paragraph text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.');
    const small = boolean('Smaller width', false);

    return {
      template: `
          <div class="content-block ${small ? 'content-block--sml' : ''}">
            <h2>${titleH2}</h2>
            <h3>${titleH3}</h3>
            <p>${paragraph}</p>
          </div>
        `,
    };
  })
  .add('Content Block - Small width', () => {
    const titleH2 = text('Title H2', 'H2 Content Block');
    const titleH3 = text('Title H3', 'H3. As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.');
    const paragraph = text('Paragraph text', 'P Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.');
    const small = boolean('Smaller width', true);
    return {
      template: `
          <div class="content-block ${small ? 'content-block--sml' : ''}">
            <h2>${titleH2}</h2>
            <h3>${titleH3}</h3>
            <p>${paragraph}</p>
          </div>
        `,
    };
  });
