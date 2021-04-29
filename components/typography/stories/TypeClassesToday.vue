<template>
  <div>
    <p
      v-for="(name, c) in classes"
      :key="c"
      :class="c">
      {{ name }}
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    classes: {
      'heading-xxl': 'Heading extra extra large',
      'heading-xl': 'Heading extra large',
      'heading-lg': 'Heading large',
      'heading-md': 'Heading medium',
      'heading-sm': 'Heading small',
      'heading-sm heading-sm--link': 'Heading small as link',
      'heading-xs': 'Heading extra small',
      'heading-xxs': 'Heading extra extra small',
      'label-md': 'Label medium',
      'label-sm': 'Label small',
      'label-xs': 'Label extra small',
      'paragraph-lg': 'Paragraph large',
      'paragraph-md': 'Paragraph medium',
      'paragraph-sm': 'Paragraph small',
    },
  }),
};
</script>
