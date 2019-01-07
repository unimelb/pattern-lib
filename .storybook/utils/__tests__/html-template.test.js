import pretty from 'pretty';
import { createLocalVue, shallow } from 'vue-test-utils';
import htmlTemplate from '../html-template';

describe('htmlTemplate', () => {
  let localVue;

  function mountFromTemplate(template, stubs = {}) {
    return shallow({ template }, { localVue, stubs });
  }

  beforeEach(() => {
    localVue = createLocalVue();
  });

  test('should process simple HTML elements and text nodes', () => {
    const template = `
      <div>
        <p>Test<br></p>
      </div>
    `;

    const wrapper = mountFromTemplate(template);
    const markup = htmlTemplate(wrapper.vm);

    expect(markup).toEqual(pretty(template));
  });

  test('should output valid HTML markup', () => {
    const template = `
      <div>
        <p />
        <input />
      </div>
    `;

    const wrapper = mountFromTemplate(template);
    const markup = htmlTemplate(wrapper.vm);
    expect(markup).toEqual(pretty('<div><p></p> <input></div>'));
  });

  test('should process classes and attributes', () => {
    const template = '<div class="test"><p class="foo bar-baz">Test</p><input type="text" data-attr="foo" data-boolean-attr></div>';

    const wrapper = mountFromTemplate(template);
    const markup = htmlTemplate(wrapper.vm);

    expect(markup).toEqual(pretty(template));
  });

  test('should process `slot` attributes', () => {
    const template = `
      <div>
        <h2 slot="heading">Heading</h2>
        <p slot="text">Text</p>
      </div>
    `;

    const wrapper = mountFromTemplate(template);
    const markup = htmlTemplate(wrapper.vm);

    expect(markup).toEqual(pretty(template));
  });

  test('should process Vue components', () => {
    const template = '<MyComponent />';

    const wrapper = mountFromTemplate(template, { MyComponent: true });
    const markup = htmlTemplate(wrapper.vm);

    expect(markup).toEqual('<my-component></my-component>');
  });

  test('should process children of Vue component', () => {
    const template = `
      <MyComponent>
        <h2 slot="heading">Heading</h2>
        <p>Text</p>
      </MyComponent>
    `;

    const wrapper = mountFromTemplate(template, { MyComponent: true });
    const markup = htmlTemplate(wrapper.vm);

    expect(markup).toEqual(
      pretty(`
      <my-component>
        <h2 slot="heading">Heading</h2>
        <p>Text</p>
      </my-component>
    `)
    );
  });

  test('should process HTML-compliant component props', () => {
    const template = `
      <div>
        <MyComponent bool />
        <MyComponent string="foo" />
        <MyComponent multi-word-bool />
        <MyComponent multi-word-string="foo" />
      </div>
    `;

    const wrapper = mountFromTemplate(template, { MyComponent: true });
    const markup = htmlTemplate(wrapper.vm);

    expect(markup).toEqual(
      pretty(`
      <div>
        <my-component bool></my-component>
        <my-component string="foo"></my-component>
        <my-component multi-word-bool></my-component>
        <my-component multi-word-string="foo"></my-component>
      </div>
    `)
    );
  });
});
