<template>
  <GenericCard
    :title="item.name"
    :excerpt="item.description"
    :cols="2">
    <div
      slot="sub-title-1"
      class="sub-title">
      <div>
        <div
          v-for="(location, locationIndex) in item.city"
          :key="locationIndex">
          <strong>Location city:</strong> {{ location.name }}
          <br>
          <strong>Campus:</strong> {{ location.campus.join(' / ') }}
          <br>
          <br>
        </div>
      </div>
    </div>
    <div
      slot="sub-title-2"
      class="sub-title">
      <span>{{ item.faculty }}</span>
    </div>
  </GenericCard>
</template>

<script>
import GenericCard from 'components/cards/GenericCard.vue';

export default {
  name: 'ExampleCard',
  components: { GenericCard },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
