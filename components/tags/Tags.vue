<template>
  <div class="tags">
    <ul class="tags__list">
      <li
        v-for="(item, index) in data"
        :key="index"
        class="tags__item list-reset">
        <a
          v-if="item.href"
          :href="item.href"
          class="tags__link">
          {{ item.value }}
        </a>
        <span v-else>{{ item.value || item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
