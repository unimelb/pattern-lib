<template>
  <CheckList href="/" action="Continue">
    <CheckListItem checked>Check the degree website.</CheckListItem>
    <CheckListItem>Check the entry requirements to clarify your eligibility for application, duplicate instructions after to demonstrate a multiline item: Check the entry requirements to clarify your eligibility for application</CheckListItem>
    <CheckListItem>Ensure you meet the University's language requirements</CheckListItem>
    <CheckListItem>Apply online or via the hardcopy application form</CheckListItem>
  </CheckList>
</template>

<script>
import CheckList from '../CheckList.vue';
import CheckListItem from '../CheckListItem.vue';

export default {
  components: { CheckList, CheckListItem },
};
</script>
