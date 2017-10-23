<template>
  <form class="form" action="">
    <ul class="checklist">
      <slot></slot>
    </ul>

    <ButtonIcon :id="`check-list-1${this._uid}`" :href="href">{{ action }}</ButtonIcon>
  </form>
</template>

<script>
export default {
  props: {
    action: String,
    href: String,
  },
  mounted() {
    /* eslint-disable no-underscore-dangle */
    this.trigger = document.querySelector(`#check-list-1${this._uid}`);
    /* eslint-enable no-underscore-dangle */
    this.items = document.querySelectorAll('.checklist__item__checkbox', this.$el);

    if (this.trigger) {
      this.trigger.classList.add('btn--disabled');

      for (let i = this.items.length - 1; i > 0; i -= 1) {
        this.items[i].addEventListener('click', () => {
          const checked = document.querySelectorAll('.checklist__item__checkbox:checked', this.$el);

          if (this.items.length === checked.length) {
            this.trigger.classList.remove('btn--disabled');
          } else {
            this.trigger.classList.add('btn--disabled');
          }
        });
      }
    }
  },
};
</script>
