import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import TableSimple from './table-simple.vue';
import TableStats from './table-stats.vue';

storiesOf('Tables', module)
  .addDecorator(story => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <main>
          <section class="section">
            <div class="section__inner">
              <Story/>
            </div>
          </section>
        </main>`,
    };
  })
  .add('Table - basic', () => ({
    components: {TableSimple},
    template: `
      <table-simple />
    `
  }))
  .add('Table - stats', () => ({
    components: {TableStats},
    template: `
      <table-stats />
    `
  }))
