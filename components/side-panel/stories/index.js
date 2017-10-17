import './Left';
import './Right';

// import Vue from 'vue';
// import { storiesOf } from '@storybook/vue';
// import {
//   withKnobs,
//   text,
// } from '@storybook/addon-knobs';
// import withReadme from 'storybook-readme/with-readme';

// import RenderMarkup from '../../RenderMarkup';
// import SidePanelReadme from './SidePanel.md';
// import SidePanel from './SidePanel.vue';
// import Banner from './../../banner/stories/Banner.vue';
// import BoilerplateFooter from './../../footer/stories/BoilerplateFooter.vue';

// const SidePanelMarkup = new RenderMarkup(SidePanel);

// storiesOf('Side Panel', module)
//   .addDecorator(story => {
//     const Story = story();
//     return {
//       components: { Story, Banner, BoilerplateFooter  },
//       template: `
//         <div>
//           <banner :level="2"/>
//           <Story/>
//           <boilerplate-footer />
//         </div>
//         `,
//     };
//   })
//   .addDecorator(withKnobs)
//   .addDecorator(withReadme(SidePanelReadme))
//   .add('Left side panel', withReadme(SidePanelMarkup.prettifiedMarkup, () => {
//     return {
//       components: { SidePanel },
//       template: `
//         <main class="layout layout--left bg-light-blue"> 
//           <side-panel class="layout__pre bg-light-blue"></side-panel>
//           <section-wrap id="section1" class="bg-white">
//             <h2>test content</h2>
//             <p></p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus cupiditate illo vel similique ea, quos, soluta doloremque suscipit molestiae. Praesentium consectetur enim asperiores laborum assumenda explicabo, et odio, provident sit?
//           </section-wrap>
//           <section-wrap id="section2" class="bg-alt">
//             test content
//           </section-wrap>
//           <section-wrap id="section3" class="bg-white">
//             test content
//           </section-wrap>
//         </main>
//       `
//     }
//   }))
//   .add('Right side panel', withReadme(SidePanelMarkup.prettifiedMarkup, () => {
//     return {
//       components: { SidePanel },
//       template: `
//         <main class="layout layout--right clearfix bg-light-blue">
//           <side-panel right class="layout__post bg-light-blue"></side-panel>
//           <div class="layout__main">
//             <section-wrap id="section1" class="bg-white">
//               <h2>test content</h2>
//             </section-wrap>
//             <section-wrap id="section2" class="bg-alt">
//               test content
//             </section-wrap>
//             <section-wrap id="section3" class="bg-white">
//               test content
//             </section-wrap>
//           </div>
//         </main>
//       `
//     }
//   }))
//   .add('Side Panel - content blocks', withReadme(SidePanelMarkup.prettifiedMarkup, () => {
//     return {
//       components: { SidePanel },
//       template: `
//         <main class="layout layout--left bg-light-blue"> 
//           <side-panel class="layout__pre bg-light-blue"></side-panel>
//           <div class="content-block bg-white">
//             <h2>test content</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio similique dolor, quasi cupiditate dolore! Doloremque omnis corporis, libero, delectus adipisci ipsum nemo non ducimus necessitatibus eius? Repellendus et soluta, commodi!</p>
//           </div>
//           <section-wrap id="section2" class="bg-alt">
//             test content
//           </section-wrap>
//           <section-wrap id="section3" class="bg-white">
//             test content
//           </section-wrap>
//         </main>
//       `
//     }
//   }))
//   .add('Side Panel - content blocks right', withReadme(SidePanelMarkup.prettifiedMarkup, () => {
//     return {
//       components: { SidePanel },
//       template: `
//         <main class="layout layout--right clearfix bg-light-blue">
//           <side-panel right class="layout__post bg-light-blue"></side-panel>
//           <div class="layout__main">
//             <div class="content-block bg-white">
//               <h2>test content</h2>
//               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio similique dolor, quasi cupiditate dolore! Doloremque omnis corporis, libero, delectus adipisci ipsum nemo non ducimus necessitatibus eius? Repellendus et soluta, commodi!</p>
//             </div>
//             <section-wrap id="section2" class="bg-alt">
//               test content
//             </section-wrap>
//             <section-wrap id="section3" class="bg-white">
//               test content
//             </section-wrap>
//           </div>
//         </main>
//       `
//     }
//   }))
//   .add('Side Panel - content blocks small width', withReadme(SidePanelMarkup.prettifiedMarkup, () => {
//     return {
//       components: { SidePanel },
//       template: `
//         <main class="layout layout--left bg-light-blue"> 
//           <side-panel class="layout__pre bg-light-blue"></side-panel>
//           <div class="content-block content-block--sml bg-white">
//             <h2>test content</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio similique dolor, quasi cupiditate dolore! Doloremque omnis corporis, libero, delectus adipisci ipsum nemo non ducimus necessitatibus eius? Repellendus et soluta, commodi!</p>
//           </div>
//           <section-wrap small id="section2" class="bg-alt">
//             test content
//           </section-wrap>
//           <section-wrap small id="section3" class="bg-white">
//             test content
//           </section-wrap>
//         </main>
//       `
//     }
//   }))