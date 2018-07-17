<template>
  <ContactList
    name="John Robert Smith-Robertson Robertsontsontsontsontson"
    phone="+613 4234 2344 1234 5647"
    email="john.robert_jsmith-robertson@unimelb.edu.au"
  />
</template>

<script>
import ContactList from '../ContactList.vue';
import MaxWidthDecorator from '../../../.storybook/decorators/MaxWidthDecorator.vue';

export default {
  components: { ContactList },
  decorator: MaxWidthDecorator,
  decoratorProps: { maxWidth: 13 },
};
</script>
