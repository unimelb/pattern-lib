/**
 * Polymorphic story decorator.
 * Allows to declaratively decorate a story with any component that contains `<slot></slot>`.
 * Usage: in a story's single-file component, add a `decorator` and optional `decoratorProps` property:
 * ```
 * export default {
 *   ...
 *   decorator: MyComponent,
 *   decoratorProps: { anyProp: true },
 * };
 * ```
 * @param {Function} storyFunc
 * @return {Component}
 */
export default function storyDecorator(storyFunc) {
  const Story = storyFunc();
  const { decorator: Decorator, decoratorProps = {} } = Story;

  if (!Decorator) return Story;

  return {
    components: { Decorator, Story },
    template: '<decorator v-bind="decoratorProps"><story /></decorator>',
    data() { return { decoratorProps }; },
  };
}
