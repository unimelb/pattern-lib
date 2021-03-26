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
      'heading-lg': 'Heading large',
      'heading-md': 'Heading medium',
      'heading-sm': 'Heading small',
      'heading-xs': 'Heading extra small',
      'heading-xxs': 'Heading extra extra small',
      'label-md': 'Label medium',
      'label-sm': 'Label small',
      'label-xs': 'Label extra small',
    },
  }),
};
</script>
