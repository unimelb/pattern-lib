<template>
  <div class="check-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    const list = this.$el.querySelector('.check-list__list');
    this.checkboxes = [].slice.call(list.querySelectorAll('.check-list__checkbox'));
    this.btn = this.$el.querySelector('.check-list__btn');

    // Toggle button once, then every time a checkbox is ticked/unticked
    this.toggleBtn();
    list.addEventListener('change', this.toggleBtn);
  },
  methods: {
    toggleBtn() {
      const allChecked = this.checkboxes.every(checkbox => checkbox.checked);
      this.btn.classList.toggle('btn--disabled', !allChecked);
    },
  },
};
</script>
