# Testing

- `yarn test` to run the test suite with [Jest](https://facebook.github.io/jest/docs/en/api.html).
- `yarn test --watch` to run Jest in watch mode (really cool).
- `yarn test components/path/of/a/component/__tests__/myNewComponent.test.js` to test just one component at a time.
- WEhen a new component is created: add a `__test__` folder and add a file with the unit test:
`components/my-component/__tests__/MyComponent.test.js`
- A basic template to test is:

```js
// we prefer shallow over mount()
import { shallow } from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import MyComponent from '../MyComponent.vue';

expect.extend(toHaveNoViolations);

describe('MyComponent', () => {
  // snapshot test
  it('should match snapshot', () => {
    const result = shallow(MyComponent).element;
    expect(result).toMatchSnapshot();
  });
  
  // Accessibility test
  it('MyComponent throws no accessibillity violations', (done) => {
    const html = shallow(MyComponent).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });

  // any other test
  it('Some case to test goes here', () => {
    // arrange: mock the necessary data

    // Act: run the function to test
    const result = shallow(MyComponent);
    
    //Assert: assert on the results. It should be 1 assertion per test.
    expect(result).toBe(true);
  });
});
```

## Notes about vue-test-utils
The Vue components are tested with the help of [vue-test-utils](https://vue-test-utils.vuejs.org/en/)
. In a nutshell:

```js
// This gives you a wrapper element with a nice API:

// Full render 
const elem = mount(MyComponent, { propsData: { ... } });

// Combined with Jest, you can do stuff like:
expect(elem.findAll('a').at(0).hasAttribute('href', '/foo')).toBe(true);

// ... or with custom elements:
import SvgIcon from '...';
expect(elem.contains(SvgIcon)).toBe(true);

// Snapshot testing is dead simple:
expect(mount(PageFooter).element).toMatchSnapshot();
```


## What to test and not to test

- Do test the **Vue components** themselves, **not the stories**. Testing a story has very little value because it doesn't explain how the underlying component is supposed to work. The components constitute the public API, whereas the stories are there to demonstrate the CSS and document the markup.
- Do **snapshot-test a single, common usage scenario** for each component (e.g. `PageBreadcrumbs` with two items). If a component can be used in radically different ways, like `PageHeader`, then it may make sense to write more than one snapshot test.
- Do test **slots**.
- Do test any **prop-based logic** (e.g. conditional class, style or attribute; prop passed to child component; `for` loop; conditional rendering with `v-if`, etc.)
- Do test **`computed` properties and `methods`**, but do so by accessing the functions directly: `MyComponent.computed.myComputedProp`. This is cleaner than to mount a component again an again just to test a few edge cases.
- Don't test **basic prop validation** (i.e. single type, required, default). Vue already does that for us.
- Do test **advanced prop validation** (i.e. multiple types, custom `validator` and `default` functions).


## Current limitations of `vue-test-utils`

### `find(ChildComponent)`

There's a weird behaviour where `elem.find(ChildComponent)` returns a `ChildComponent` instance even if that child is set to not render with `<ChildComponent v-if="false" />`. The work-around I found (cf. `components/page/breadcrumbs/__tests__/PageBreadcrumbs.test.js`) is to request the child component's rendered HTML and look for a known element - e.g. `expect(elem.find(ChildComponent).html()).not.toContain('<some-selector>')`. That's because the rendered HTML ends up being `<!---->` when `v-if` evaluates to `false`.

### Shallow rendering
vue documentation: https://vue-test-utils.vuejs.org/api/#shallowmount

`mount()` does a full render, which is not ideal for snapshot testing...  Unfortunately, the shallow-rendering stuff with `shallow()` is not quite there yet. The problem is that when the library stubs a component, that component disappears completely from the rendered output:

`MyComponent.vue`

```vue
<template>
  <div>
    <SvgIcon name="home" />
  </div>
</template>
<script> ... </script>
```

Output of `shallow(MyComponent)`:

```html
<div>
  <!---->
</div>
```

This is bad because we can't test the props or get a snapshot of the attributes that are passed to `SvgIcon`. We also can't tell whether the icon was purposely not rendered with something like `v-if="false"`, as this would result in the exact same output.

### Testing accessibility (WIP)
Example:

```js
it('My Component thows no accessibillity violations', (done) => {
    const html = shallow(PageFooter).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
```