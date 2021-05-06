<template>
  <Testimonials2021
    title="Taking this course gave me so many relevant new skills"
    name="Simi Chopra"
    img-src="https://www.brown.edu/sites/g/files/dprerj316/files/styles/portrait_sfts_desktop/public/Emerson_Advice.jpg?itok=rA76aBq9" />
</template>

<script>
import MaxWidthDecorator from 'storybook/decorators/MaxWidthDecorator.vue';
import Testimonials2021 from '../../Testimonials2021.vue';

export default {
  components: { Testimonials2021 },
  readme: { source: true, html: true },
  decorator: MaxWidthDecorator,
  decoratorProps: { maxWidth: 13 },
};
</script>
