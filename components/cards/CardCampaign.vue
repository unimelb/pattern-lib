<template>
  <div
    class="card card--campaign">
    <ButtonTwoIcons
      :text="buttonText"
      :href="href"
      :right-icon="rightIcon"
      :left-icon="leftIcon"
      :color="buttonColor" />
    <p class="card__excerpt">
      {{ excerpt }}
    </p>
  </div>
</template>

<script>
import ButtonTwoIcons from 'components/buttons/ButtonTwoIcons.vue';

export default {
  name: 'CardCampaign',
  components: {
    ButtonTwoIcons,
  },
  props: {
    href: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: 'Insert button-text',
    },
    buttonColor: {
      type: String,
      default: 'teal',
    },
    rightIcon: {
      type: String,
      default: 'chevron-right',
    },
    leftIcon: {
      type: String,
      default: 'info',
    },
    excerpt: {
      type: String,
      default: 'Completed something or rather',
    },
  },
};

</script>
