# Components

## Steps to create a new component using the command line interface:

### Create a new component using command line interface:
  - you can run `yarn run generate` to create a component using command line.
  - This command will generate the following files for a component named `TestComponent`
   ```
    components/test-component/index.css
    components/test-component/stories/index.js
    components/test-component/stories/TestComponentDefault.vue
    components/test-component/TestComponent.vue
    components/index.css
  ```

## Steps to create a new component, manually:
### 1. create a new component, manually:
  - Name conventions: Folders use `kebab-case`
  - Component files use `PascalCase`

### 2. Add the component to storybook:
  -  add a `stories` folder under the new component folder. `components/new-component/stories/index.js`
  - on `stories/index.js` add the different stories for the component. A story usually contains a single state of one component, almost like a visual test case. Technically, a story is a function that returns a Vue element.
- [More on storybook can be found in the documentation](https://storybook.js.org/basics/writing-stories/)

### 3. Write a Unit test for the component.
  - we use `vue-test-utils` to test vue components. see more info here: [official docs](https://vue-test-utils.vuejs.org/guides/#common-tips)
  - For more details about writing unit test, go to docs/testing.md section.

### 4. Test accessibility and responsive features.
  - Accessibility: 
    - Can I use the component with a keyboard?
    - Is the component accessible on screen readers?
  - Tools we use for testing accessibility:
    - [MacOS VoiceOver feature](https://www.apple.com/voiceover/info/guide/_1124.html)
    - [Lighthouse Chrome extension](https://developers.google.com/web/tools/lighthouse/)
    - [Siteimprove](https://siteimprove.com/)
    - [Wave](http://wave.webaim.org/)
    - Accessibility engine for automated Web UI testing [axe-core](https://github.com/dequelabs/axe-core)
      - Axe-core can be used in unit test (see docs/testing.md section)
      - we use `@storybook/addon-a11y` from Storybook to run accessibility checks on each story [@storybook/addon-a11y](https://github.com/storybooks/storybook/tree/next/addons/a11y)
  - Responsive:
    - Tools we use for testing accessibility:
      - [browserstack](https://www.browserstack.com/)
      - [Chrome dev tools > device toolbar](https://developers.google.com/web/tools/chrome-devtools/device-mode/)


## Registering a component before deploying 
- When a new component is created in the pattern library:
  - If this component is suitable to use in CMS, register the component in: `/targets/lib/index.js` which will be used to generate the bundle that will be deployed to `AWS` to be consumed by the CMS system as a CDN link.

  - Steps to add a component to deploy in `target > lib` for being used in CMS:
  1. Open `/targets/lib/index.js` and import the component.
    `import MyNewComponent from 'components/my-new-component/MyNewComponent.vue';`
  2. Register the Vue components:
    `Vue.component('my-new-component', MyNewComponent);`

  - Steps to add a component to deploy in `target > vue` for being used in CMS:
  1. Open `/targets/vue/index.js` and export the component.
    `export { default as MyNewComponent } from 'components/my-new-component/MyNewComponent.vue';`


## Component implentation guidelines:
- Our Components meets Accessibility standards. [Unimelb accessibility guidelines](https://www.unimelb.edu.au/accessibility)
- Our Components are unit tested and easily render in isolation with mocked data. (using storybook UI dev environment, which proves the component works in isolation)
- Our Components are unit tested as a way of self-documenting the functionality.
- Each component has a single responsibility and is loosely coupled.
- Components template (vue) is simple to understand by non developers as well.
- Component template should not have excessive amount of conditional renders that makes final render output complex to understand and debug.
- Computed properties have low complexity.
- Our components CSS is based on BEM (block element modifier) naming convention.
- Our components are responsive.
- Our components are "done" before "perfect".

## Notes for specific components:

- PageFooterAlt
  - Path: `components/footer/PageFooterAlt.vue`
  - Notes: PageFooterAlt has an empty div named `<div id="liveagent"/>`. This div was added for injecting a chat widget dinamically by Tealium (tag management) managed by christopher (`christopher.mason@unimelb.edu.au`) from Digital Online Channels team. This div should not be removed.