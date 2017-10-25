<template>
  <CheckListCms>
    <ol class="check-list__list">
      <li is="check-list-item-cms" checked>Check the degree website.</li>
      <li is="check-list-item-cms">Check the entry requirements to clarify your eligibility for application, duplicate instructions after to demonstrate a multiline item-cms: Check the entry requirements to clarify your eligibility for application.</li>
      <li is="check-list-item-cms">Ensure you meet the University's language requirements.</li>
      <li is="check-list-item-cms">Apply online or via the hardcopy application form.</li>
    </ol>
    <ButtonIcon class="check-list__btn" href="/">Continue</ButtonIcon>
  </CheckListCms>
</template>

<script>
import CheckListCms from '../CheckListCms.vue';
import CheckListItemCms from '../CheckListItemCms.vue';

export default {
  components: { CheckListCms, CheckListItemCms },
};
</script>
