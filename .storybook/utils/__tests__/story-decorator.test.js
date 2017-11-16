import pretty from 'pretty';
import { mount } from 'vue-test-utils';
import storyDecorator from '../story-decorator';

describe('storyDecorator', () => {
  test('should pass through stories that don\'t specify a decorator', () => {
    const StoryComponent = {};
    const Decorated = storyDecorator(() => StoryComponent);
    expect(Decorated).toBe(StoryComponent);
  });

  test('should decorate stories', () => {
    const DecoratorComponent = { template: '<div><slot></slot></div>' };
    const StoryComponent = {
      template: '<p>Test</p>',
      decorator: DecoratorComponent,
    };

    const Decorated = storyDecorator(() => StoryComponent);
    const wrapper = mount(Decorated);

    expect(pretty(wrapper.html())).toBe(pretty(`
      <div>
        <p>Test</p>
      </div>
    `));
  });

  test('should support passing props to decorator', () => {
    const DecoratorComponent = {
      template: '<div><p>{{ myProp }}</p></div>',
      props: { myProp: Boolean },
    };

    const StoryComponent = {
      template: '',
      decorator: DecoratorComponent,
      decoratorProps: { myProp: 'foo' },
    };

    const Decorated = storyDecorator(() => StoryComponent);
    const wrapper = mount(Decorated);

    expect(wrapper.find('p').text()).toEqual('foo');
  });
});
