<template>
  <ContactList
    name="John Smith"
    phone="+613 4234 2344"
    email="john.smith@unimelb.edu.au"/>
</template>

<script>
import ContactList from '../ContactList.vue';

export default {
  components: { ContactList },
  readme: { source: true, html: true },
};
</script>
