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
import arImage from './2016-annual-report.jpg';

storiesOf('Document List', module)
  .addDecorator(withKnobs)
  .add('Download block', () => {
    const btnText = text('Button Text', 'Download the 2017 Annual Report');
    const header = text('Header Text', 'Download the latest Annual Report');
    return {
      components: { DownloadBlock },
      template: `
        <section class="section">
          <div class="section__inner section__inner--sml">
            <download-block 
              imgSrc="${arImage}"
              header="${header}"
              btnText="${btnText}"
             />
          </div>
        </section>
      `,
    };
  })
  .add('Document List', () => ({
    template: `
        <section class="section">
          <div class="section__inner section__inner--sml">
            <ul class="document-list">
              <li><a href="annualreport.pdf">2016 Annual Report (PDF File 6.8 MB)</a></li>
              <li><a href="annualreport.pdf">2016 Annual Report (PDF File 6.8 MB)</a></li>
              <li><a href="annualreport.pdf">2016 Annual Report (PDF File 6.8 MB)</a></li>
              <li><a class="link-download-off" href="annualreport.pdf">2016 Annual Report (Download icon turned off) </a></li>
              <li><a href="annualreport.pdf">2016 Annual Report (PDF File 6.8 MB)</a></li>
              <li><a href="annualreport.pdf">2016 Annual Report (PDF File 6.8 MB)</a></li>
            </ul>
          </div>
        </section>
      `,
  }))
  .add('Document Thumb List two', () => ({
    template: `
        <section class="section">
          <div class="section__inner section__inner--sml">
            <ul class="listing listing--two document-list document-list--thumbs">
              <li class="list-item">
                <a href="annualreport.pdf">
                  <figure>
                    <img src="${arImage}" />
                  </figure>
                  <figcaption>2016 Annual Report (PDF File 6.8 MB)</figcaption>
                </a>
              </li>
              <li class="list-item">
                <a href="annualreport.pdf">
                  <figure>
                    <img src="${arImage}" />
                  </figure>
                  <figcaption>2016 Annual Report (PDF File 6.8 MB)</figcaption>
                </a>
              </li>
              <li class="list-item">
                <a href="annualreport.pdf">
                  <figure>
                    <img src="${arImage}" />
                  </figure>
                  <figcaption>2016 Annual Report (PDF File 6.8 MB)</figcaption>
                </a>
              </li>

            </ul>
          </div>
        </section>
      `,
  }))
  .add('Document Thumb List four', () => ({
    template: `
        <section class="section">
          <div class="section__inner">
            <ul class="listing listing--four document-list document-list--thumbs">
              <li class="list-item">
                <a href="annualreport.pdf">
                  <figure>
                    <img src="${arImage}" />
                  </figure>
                  <figcaption>2016 Annual Report (PDF File 6.8 MB)</figcaption>
                </a>
              </li>
              <li class="list-item">
                <a href="annualreport.pdf">
                  <figure>
                    <img src="${arImage}" />
                  </figure>
                  <figcaption>2016 Annual Report (PDF File 6.8 MB)</figcaption>
                </a>
              </li>
              <li class="list-item">
                <a href="annualreport.pdf">
                  <figure>
                    <img src="${arImage}" />
                  </figure>
                  <figcaption>2016 Annual Report (PDF File 6.8 MB)</figcaption>
                </a>
              </li>
              <li class="list-item">
                <a href="annualreport.pdf">
                  <figure>
                    <img src="${arImage}" />
                  </figure>
                  <figcaption>2016 Annual Report (PDF File 6.8 MB)</figcaption>
                </a>
              </li>
            </ul>
          </div>
        </section>
      `,
  }));
