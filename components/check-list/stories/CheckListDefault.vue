<template>
  <CheckList
    :items="items"
    btn-href="/"
    btn-text="Continue"
  />
</template>

<script>
import CheckList from '../CheckList.vue';

export default {
  components: { CheckList },
  data: () => ({
    items: [
      'Check the degree website.',
      'Check the entry requirements to clarify your eligibility for application, duplicate instructions after to demonstrate a multiline item-cms: Check the entry requirements to clarify your eligibility for application.',
      'Ensure you meet the University\'s language requirements.',
      'Apply online or via the hardcopy application form.',
    ],
  }),
};
</script>
