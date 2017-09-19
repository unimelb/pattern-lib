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

import DownloadBlock from './download-block.vue';

storiesOf('Document List', module)
  .addDecorator(withKnobs)
  .add('Download block', () => {
    const btnText = text('Button Text', 'Button with icon');
    return {
      components: { DownloadBlock },
      template: `
        <section class="section">
          <div class="section__inner section__inner--sml">
            <download-block 
              imgSrc="https://resources.web.unimelb.edu.au/controlled-environment/content-templates/document-list/cover-images/2016-annual-report.jpg"
              header="Download the latest Annual Report"
              btnText="${btnText}"
             />
          </div>
        </section>
      `
    }
  })