<template>
  <TestimonialsAlt
    title="Taking this course gave me so many relevant new skills. Now, I am able to lead larger teams with more confidence. It’s opened up pathways in my career that I wouldn’t have access to otherwise."
    name="Simi Chopra, Business Analyst"
    img-src="https://randomuser.me/api/portraits/lego/1.jpg"
    long />
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
