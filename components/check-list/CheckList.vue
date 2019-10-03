<template>
  <div class="check-list">
    <ol class="check-list__list">
      <li
        v-for="(item, index) in items"
        :key="item.id"
        class="check-list__item">
        <input
          :id="`${namespace}-${index}`"
          :checked="checkedItems[index]"
          class="check-list__checkbox"
          type="checkbox"
          @change="toggle(index, $event)">
        <label
          :for="`${namespace}-${index}`"
          class="check-list__label"
          v-html="content[index].innerHTML" />
      </li>
    </ol>
    <ButtonIcon
      :href="btnHref"
      :disabled="!itemsAllChecked"
      :icon="btnIcon">
      {{ btnText }}
    </ButtonIcon>
  </div>
</template>

<script>
// check-list-toggle

import { stringToNum, vnodeToElement } from '../shared/utils';
import ButtonIcon from '../buttons/ButtonIcon.vue';

export default {
  components: { ButtonIcon },
  props: {
    checkedCount: {
      type: [Number, String],
      default: 0,
    },
  },
  data() {
    const numCheckedCount = stringToNum(this.checkedCount);
    return {
      checkedItems: this.items.map((item, index) => index < numCheckedCount),
    };
  },
  computed: {
    itemsAllChecked() {
      return this.checkedItems.indexOf(false) === -1;
    },
    namespace() {
      return `ui-checklist-${this._uid}`;
    },
  },
  beforeCreate() {
    const list = this.$slots.list[0];
    this.items = list.children.filter(item => item.tag === 'li');

    this.content = [];
    this.items.forEach((item, index) => {
      this.content[index] = document.createElement('div');
      item.children.forEach(node => this.content[index].appendChild(vnodeToElement(node)));
    });

    const btn = this.$slots.btn[0];
    this.btnHref = btn.data.attrs.href;
    this.btnText = btn.children[0].text;
    this.btnIcon = (btn.data.staticClass === 'download') ? 'download' : 'chevron-right';
  },
  methods: {
    toggle(index, evt) {
      this.$set(this.checkedItems, index, evt.target.checked);
      this.$emit('check-list-toggle', index);
    },
  },
};
</script>
