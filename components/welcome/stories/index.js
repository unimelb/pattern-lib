import { storiesOf } from '@storybook/vue';
import Welcome from './Welcome.vue';

storiesOf('Welcome', module)
  .add('Welcome Message', () => ({
    components: { Welcome },
    template: `
        <section-wrap class="bg-white">
          <welcome />
        </section-wrap>
      `,
  }))
  .add('Welcome Message (small wrapper)', () => ({
    components: { Welcome },
    template: `
        <section-wrap small class="bg-white">
          <welcome small />
        </section-wrap>
      `,
  }));
