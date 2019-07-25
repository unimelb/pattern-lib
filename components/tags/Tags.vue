<template>
  <div class="tags">
    <ul class="tags__list">
      <li
        v-for="item in data"
        :key="item.id"
        class="tags__item list-reset"
      >
        <a
          :href="item.href"
          class="tags__link">
          {{ item.value }}
        </a>
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
