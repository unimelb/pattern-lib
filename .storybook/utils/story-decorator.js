/**
 * Polymorphic story decorator.
 * Allows to declaratively decorate a story with any component that contains `<slot></slot>`.
 *
 * Usage: in a story's single-file component, import the component to use as decorator
 * then add the `decorator` and optional `decoratorProps` properties:
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
    render() {
      return (
        <Decorator {...{ props: decoratorProps }}>
          <Story />
        </Decorator>
      );
    },
  };
}
