import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Welcome from './Welcome.vue';

storiesOf('Welcome', module)
  .add('Welcome Message', () => {
    return {
      components: { Welcome },
      template: `
        <section-wrap class="bg-white">
          <welcome />
        </section-wrap>
      `
    }
  })
  .add('Welcome Message (small wrapper)', () => {
    return {
      components: { Welcome },
      template: `
        <section-wrap small class="bg-white">
          <welcome small />
        </section-wrap>
      `
    }
  })