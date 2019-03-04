<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--2col">
      <ListItem>
        <GenericCard
          :cols="2"
          title="Test 1"
          meta="December 31 1992"
        >
          <div
            slot="sub-title"
            class="sub-title">
            <span>Lorem ipsum</span>
          </div>
        </GenericCard>
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import GenericCard from '../../GenericCard.vue';

export default {
  components: { GenericCard },
};
</script>

<style>
  .sub-title {
    display: flex;
    align-items: center;
    margin: 0;
  }
</style>
