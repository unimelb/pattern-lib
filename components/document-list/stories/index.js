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
    const btnText = text('Button Text', 'Button with icon');
    return {
      components: { DownloadBlock },
      template: `
        <section class="section">
          <div class="section__inner section__inner--sml">
            <download-block 
              imgSrc="${arImage}"
              header="Download the latest Annual Report"
              btnText="${btnText}"
             />
          </div>
        </section>
      `
    }
  })
  .add('Document List', () => {
    return {
      template: `
        <section class="section">
          <div class="section__inner section__inner--sml">
            <ul class="document-list">
              <li><a href="annualreport.pdf">2016 Annual Report (PDF File 6.8 MB)</a></li>
              <li><a href="annualreport.pdf">2016 Annual Report (PDF File 6.8 MB)</a></li>
              <li><a href="annualreport.pdf">2016 Annual Report (PDF File 6.8 MB)</a></li>
              <li><a href="annualreport.pdf">2016 Annual Report (PDF File 6.8 MB)</a></li>
              <li><a href="annualreport.pdf">2016 Annual Report (PDF File 6.8 MB)</a></li>
              <li><a href="annualreport.pdf">2016 Annual Report (PDF File 6.8 MB)</a></li>
            </ul>
          </div>
        </section>
      `
    }
  })
  .add('Document Thumb List two', () => {
    return {
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
      `
    }
  })
  .add('Document Thumb List four', () => {
    return {
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
      `
    }
  })