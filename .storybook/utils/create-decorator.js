export default function createDecorator(Decorator) {
  return (story) => {
    const Story = story();
    return {
      components: { Decorator, Story },
      template: '<decorator><story /></decorator>',
    };
  };
}
