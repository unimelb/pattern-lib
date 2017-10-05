import Pad from './Pad.vue';

export const pad = createDecorator(Pad);

function createDecorator(Decorator) {
  return (story) => {
    const Story = story();
    return {
      components: { Decorator, Story },
      template: '<decorator><story /></decorator>',
    };
  };
}
