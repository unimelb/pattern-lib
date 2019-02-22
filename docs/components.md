# Components

## registering a component before deploying 

- When a new component is created in the pattern library:

  - If this component is suitable to use in CMS, register the component in: `/targets/lib/index.js` which will be used to generate the bundle that will be deployed to `AWS` to be consumed by the CMS system as a CDN link.

  - Steps to add a component to deploy in target > lib for being used in CMS:

  1. Open `/targets/lib/index.js` and imoprt the component.
    `import MyNewComponent from '../../components/MyNewComponent/MyNewComponent.vue';`
  2. Register the Vue components:
    `Vue.component('my-new-component', MyNewComponent);`

## Component implentation guidelines:

- Our Components meets Accessibility standards. [link to UOM a11y guidelines here]
- Our Components are unit tested and easily render in isolation with mocked data. (using storybook UI dev environment, which proves the component works in isolation)
- Our Components are unit tested as a way of self-documenting the functionality.
- Each component has a single responsibility and is loosely coupled.
- Components template (vue) is simple to understand by non developers as well.
- Component template should not have excessive amount of conditional renders that makes final render output complex to understand and debug.
- Computed properties have low complexity.
- Our components CSS is based on BEM (block element modifier) naming convention.
- Our components are responsive.
- Our components are "done" before "perfect".
- Once a component is done, we check how it looks in browserstack.com [add main supported browsers here]
  (resources: https://github.com/pablohpsilva/vuejs-component-style-guide#component-structure)

## Notes for specific components:

- PageFooter
  - Path: `./components/page/footer/PageFooter.vue`
  - Notes: PageFooter has an empty div named `<div id="liveagent"/>`. This div was added for injecting a chat widget dinamically by Tealium (tag management) managed by christopher (`christopher.mason@unimelb.edu.au`) from Digital Online Channels team. This div should not be removed.