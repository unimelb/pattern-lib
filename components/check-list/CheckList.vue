<template>
  <div class="check-list">
    <ol class="check-list__list">
      <li v-for="(item, index) in items" :key="item" class="check-list__item">
        <input
          :id="`ui-${_uid}-${index}`"
          class="check-list__checkbox"
          type="checkbox"
          :checked="checkedItems[index]"
          @change="onCheckboxChange(index, $event)"
        >
        <label class="check-list__label" :for="`ui-${_uid}-${index}`">
          {{ item }}
        </label>
      </li>
    </ol>
    <ButtonIcon
      v-if="btnHref && btnText"
      class="check-list__btn"
      :disabled="!itemsAllChecked"
      :href="btnHref"
    >
      {{ btnText }}
    </ButtonIcon>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    btnHref: String,
    btnText: String,
  },
  data() {
    return {
      checkedItems: this.items.map(() => false),
    };
  },
  computed: {
    itemsAllChecked() {
      return this.checkedItems.indexOf(false) === -1;
    },
  },
  methods: {
    onCheckboxChange(index, evt) {
      this.$set(this.checkedItems, index, evt.target.checked);
    },
  },
};
</script>

