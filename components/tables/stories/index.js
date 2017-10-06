import { storiesOf } from '@storybook/vue';

import TableSimple from './table-simple.vue';
import TableStats from './table-stats.vue';

storiesOf('Tables', module)
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
  .add('Table - basic', () => ({
    components: { TableSimple },
    template: `
      <section-wrap>
        <table-simple />
      </section-wrap>
    `,
  }))
  .add('Table - stats', () => ({
    components: { TableStats },
    template: `
      <section-wrap>
        <table-stats />
      </section-wrap>
    `,
  }))
  .add('Table - stats (with content block)', () => ({
    components: { TableSimple },
    template: `
      <div class="content-block">
        <table-simple />
      </div>
    `,
  }));
