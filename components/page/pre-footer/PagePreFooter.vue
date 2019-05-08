<template>
  <div
    :class="className"
    class="pre-footer">
    <div class="pre-footer__inner">
      <div
        v-if="hasLinksSlots"
        class="pre-footer__links">
        <div class="pre-footer__links--link">
          <slot name="link-1" />
        </div>
        <div class="pre-footer__links--link">
          <slot
            name="link-2"/>
        </div>
      </div>
      <div
        v-if="hasSocialSlots"
        class="pre-footer__social">
        <slot name="social-1"/>
        <slot name="social-2"/>
        <slot name="social-3"/>
        <slot name="social-4"/>
        <slot name="social-5"/>
        <slot name="social-6"/>
        <slot name="social-7"/>
        <slot name="social-8"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagePreFooter',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    hasLinksSlots() {
      return (
        !!this.$slots['link-1']
        || !!this.$slots['link-2']
      );
    },
    hasSocialSlots() {
      return (
        !!this.$slots['social-1']
        || !!this.$slots['social-2']
        || !!this.$slots['social-3']
        || !!this.$slots['social-4']
        || !!this.$slots['social-5']
        || !!this.$slots['social-6']
        || !!this.$slots['social-7']
        || !!this.$slots['social-8']
      );
    },
  },
};
</script>
