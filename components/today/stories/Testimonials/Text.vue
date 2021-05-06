<template>
  <TestimonialsAlt
    title="Taking this course gave me so many relevant new skills"
    name="Simi Chopra"
    img-src="https://randomuser.me/api/portraits/lego/1.jpg" />
</template>

<script>
import MaxWidthDecorator from 'storybook/decorators/MaxWidthDecorator.vue';
import TestimonialsAlt from 'components/testimonials/TestimonialsAlt.vue';

export default {
  components: { TestimonialsAlt },
  readme: { source: true, html: true },
  decorator: MaxWidthDecorator,
};
</script>
