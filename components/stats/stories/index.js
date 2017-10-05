import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import withReadme from 'storybook-readme/with-readme';

import statsReadme from './stats.md';
import Stats from './Stats.vue';
import Stat from './Stat.vue';

storiesOf('Stats', module)
  .addDecorator((story) => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <div>
          <svg class="hidden" xmlns="http://www.w3.org/2000/svg">
            <symbol id="icon-australia" viewBox="0 0 124 108"><path d="M112.375,30.8571429 L104.625,27 L100.75,11.5714286 L96.875,11.5714286 L96.875,0 L93,0 L89.125,15.4285714 L85.25,19.2857143 L69.75,11.5714286 L73.625,3.85714286 L73.625,0 L54.25,0 L50.375,11.5714286 L46.5,11.5714286 L38.75,7.71428571 L34.875,11.5714286 L23.25,30.8571429 L0,38.5714286 L0,50.1428571 L11.625,73.2857143 L11.625,84.8571429 L19.375,84.8571429 L27.125,77.1428571 L38.75,77.1428571 L38.75,69.4285714 L50.375,69.4285714 L62,69.4285714 L65.875,73.2857143 L73.625,77.1428571 L73.625,81 L81.375,81 L85.25,92.5714286 L96.875,92.5714286 L100.75,88.7142857 L108.5,88.7142857 L116.25,77.1428571 L124,61.7142857 L124,50.1428571 L112.375,30.8571429 Z M120.125,60.804 L112.89425,75.2027143 L106.426875,84.8571429 L99.14575,84.8571429 L95.27075,88.7142857 L88.043875,88.7142857 L84.168875,77.1428571 L77.5,77.1428571 L77.5,74.7591429 L68.172875,70.1151429 L63.60425,65.5714286 L34.875,65.5714286 L34.875,73.2857143 L25.52075,73.2857143 L17.77075,81 L15.5,81 L15.5,72.3754286 L3.875,49.2325714 L3.875,41.3524286 L25.834625,34.0662857 L37.95175,13.9667143 L39.513375,12.4122857 L45.581625,15.4324286 L53.165,15.4324286 L57.04,3.861 L69.288875,3.861 L64.545875,13.2994286 L86.0095,23.9837143 L92.62025,17.4034286 L93.11625,15.4324286 L97.71975,15.4324286 L101.296375,29.6614286 L109.627625,33.8078571 L120.121125,51.2151429 L120.121125,60.804 L120.125,60.804 Z"></path></symbol>
            <symbol id="icon-world" viewBox="0 0 128 128" width="100%" height="100%"><path d="m64 116c28.6 0 52-23.4 52-52s-23.4-52-52-52-52 23.4-52 52 23.3 52 51.9 52zm0-6.32c-.891 0-1.78-.0335-2.66-.0837-3.6-5.29-6.5-11.6-8.59-18.5 3.47-.366 7-.573 10.6-.573 3.45 0 6.85.171 10.2.508-2.1 7-5.01 13.3-8.65 18.7-.292.007-.584.0242-.880.0242zm-12.8-25.2c-1.3-5.6-2-11.5-2.2-17.6h28.3c-.192 6.08-.934 12-2.17 17.6-3.85-.428-7.79-.664-11.8-.664-4.13-.002-8.2.260-12.2.722zm28.7 6.99c5.76.978 11.2 2.47 16.3 4.46-6.27 6.25-14.3 10.7-23.4 12.5 2.88-5.08 5.24-10.8 7.01-16.9zm1.53-6.15c1.3-5.8 2-12.1 2.2-18.4h25.9c-.617 8.99-3.84 17.3-8.93 24.1-6.4-2.6-12.8-4.4-19.6-5.6zm2.2-24.8c-.2-6.2-.9-12.3-2.2-18.2 6.9-1.2 13.4-3.1 19.6-5.6 4.99 6.77 8.15 15 8.76 23.9h-25.9zm-6.32 0h-28.3c.190-5.97.921-11.8 2.13-17.4 4.01.465 8.09.731 12.2.731 4.01 0 7.96-.240 11.8-.671 1.2 5.53 1.93 11.3 2.11 17.3zm-34.6 0h-24.2c.599-8.7 3.65-16.7 8.46-23.4 5.57 2.28 11.6 4 17.9 5.14-1.25 5.87-2 12-2.19 18.3zm0 6.32c.190 6.4.952 12.7 2.24 18.6-6.26 1.13-12.2 2.83-17.8 5.08-4.9-6.7-8-14.8-8.6-23.6h24.2zm-11.3 28.8c4.7-1.76 9.75-3.09 15-4.01 1.71 5.94 3.99 11.5 6.74 16.4-8.39-2.05-15.9-6.43-21.7-12.4zm65-64c-5.14 2.03-10.7 3.54-16.5 4.53-1.78-6.26-4.16-12.1-7.08-17.2 9.13 1.8 17.3 6.33 23.6 12.7zm-31.5-13.5c3.67 5.38 6.61 11.8 8.71 19-3.36.344-6.78.521-10.3.521-3.61 0-7.17-.206-10.7-.582 2.09-7.07 5.01-13.5 8.66-18.8.883-.0502 1.77-.0837 2.66-.0837.296.002.591.0204.889.0242zm-11.7 1.29c-2.79 5.02-5.07 10.7-6.8 16.7-5.3-.9-10.4-2.3-15.2-4.1 5.9-6.1 13.5-10.5 22-12.6z"></path></symbol>
            <symbol id="icon-employment" viewBox="10 10 150 128" width="100%" height="100%"><path d="M63.9531504,24.0029519 C62.5710604,24.1333992 61.5167668,25.2984477 61.5227526,26.6886662 L61.5227526,37.4315234 L30.6818435,37.4315234 C30.5980828,37.4275874 30.5141838,37.4275874 30.4304231,37.4315234 C29.0483331,37.5619706 27.9940395,38.7270192 28.0000254,40.1172377 L28.0000254,58.9172377 C28.0078291,60.1030837 28.7912469,61.1434732 29.9275822,61.4770591 L34.7045708,62.8618805 L34.7045708,112.631523 C34.7047189,114.114741 35.9053231,115.317089 37.386389,115.317238 L136.613662,115.317238 C138.094728,115.317089 139.295332,114.114741 139.29548,112.631523 L139.29548,71.0029519 C139.309158,70.0343869 138.801019,69.1334763 137.965639,68.6451963 C137.130259,68.1569164 136.097064,68.1569164 135.261684,68.6451963 C134.426305,69.1334763 133.918165,70.0343869 133.931844,71.0029519 L133.931844,109.945809 L40.0682072,109.945809 L40.0682072,64.3725948 L66.1321276,71.8422377 C67.0683738,72.1553494 68.1006897,71.9281583 68.8195828,71.2507851 C69.538476,70.5734119 69.8277506,69.5553414 69.572659,68.6004154 C69.3175675,67.6454894 68.5593405,66.9080541 67.598747,66.6806305 L33.3636617,56.8609877 L33.3636617,42.8029519 L140.636389,42.8029519 L140.636389,56.8609877 L99.0682072,68.7368805 L99.0682072,66.9743805 C99.0680591,65.4911629 97.8674549,64.2888145 96.386389,64.2886662 L77.6136617,64.2886662 C76.1325958,64.2888145 74.9319916,65.4911629 74.9318435,66.9743805 L74.9318435,77.7172377 C74.9319916,79.2004553 76.1325958,80.4028036 77.6136617,80.4029519 L96.386389,80.4029519 C97.7745907,80.4089465 98.9379492,79.3531212 99.0682072,77.9690234 C99.0721374,77.8851409 99.0721374,77.8011201 99.0682072,77.7172377 L99.0682072,74.3181305 L144.072469,61.4770591 C145.208804,61.1434732 145.992222,60.1030837 146.000025,58.9172377 L146.000025,40.1172377 C145.999877,38.63402 144.799273,37.4316717 143.318207,37.4315234 L112.477298,37.4315234 L112.477298,26.6886662 C112.47715,25.2054486 111.276546,24.0031002 109.79548,24.0029519 L64.2045708,24.0029519 C64.1208101,23.999016 64.0369111,23.999016 63.9531504,24.0029519 Z M66.886389,29.3743805 L107.113662,29.3743805 L107.113662,37.4315234 L66.886389,37.4315234 L66.886389,29.3743805 Z M80.2954799,69.6600948 L93.7045708,69.6600948 L93.7045708,75.0315234 L80.2954799,75.0315234 L80.2954799,69.6600948 Z"></path></symbol>
          </svg>
          <Story/>
        </div>`,
    };
  })
  .addDecorator(withReadme(statsReadme))
  .add('Stats', () => ({
    components: { Stats, Stat },
    template: `
        <section-wrap small class="bg-white">
          <stats>
            <stat icon="#icon-australia" number="1" meta="in Australia" />
            <stat icon="#icon-world" number="33" meta="in the world" />
            <stat icon="#icon-employment" number="11" meta="Graduate employability worldwide" />
          </stats>
        </section-wrap>
      `,
  }))
  .add('Stats (inverted)', () => ({
    components: { Stats, Stat },
    template: `
        <section-wrap class="bg-inverted">
          <stats>
            <stat icon="#icon-australia" number="1" meta="in Australia" />
            <stat icon="#icon-world" number="33" meta="in the world" />
            <stat icon="#icon-employment" number="11" meta="Graduate employability worldwide" />
          </stats>
        </section-wrap>
      `,
  }));
