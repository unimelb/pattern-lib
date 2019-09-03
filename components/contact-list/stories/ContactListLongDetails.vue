<template>
  <ContactList
    name="John Robert Smith-Robertson Robertsontsontsontsontson"
    phone="+613 4234 2344 1234 5647"
    email="john.robert_jsmith-robertson@unimelb.edu.au"
  />
</template>

<script>
import MaxWidthDecorator from 'storybook/decorators/MaxWidthDecorator.vue';
import ContactList from '../ContactList.vue';

export default {
  components: { ContactList },
  readme: { source: true, html: true },
  decorator: MaxWidthDecorator,
  decoratorProps: { maxWidth: 13 },
};
</script>
