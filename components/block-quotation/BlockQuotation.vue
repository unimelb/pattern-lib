<template>
  <blockquote
    :class="{ 'block-quotation--bdr-top': borderTop, 'block-quotation--bdr-btm': borderBottom , 'block-quotation--small': size==='small'}"
    class="block-quotation"
  >
    <p class="block-quotation__content"><slot/></p>
    <cite
      v-if="author"
      class="block-quotation__author">{{ author }}
      <div
        v-if="subCite"
        class="block-quotation__sub-cite">{{ subCite }}</div>
    </cite>
  </blockquote>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      default: '',
    },
    subCite: {
      type: String,
      default: '',
    },
    borderTop: {
      type: Boolean,
      default: false,
    },
    borderBottom: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
    },
  },
};
</script>
