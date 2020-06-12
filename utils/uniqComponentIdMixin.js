let createComponentsCounter = 0;

export default {
  data() {
    const uuid = createComponentsCounter.toString();
    createComponentsCounter += 1;

    return {
      uuid,
    };
  },
};
