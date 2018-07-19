<template>
  <dl class="list-def">
    <template v-if="name">
      <dt>Contact :</dt>
      <dd>{{ name }}</dd>
    </template>
    <template v-if="phone">
      <dt>Phone :</dt>
      <dd><a :href="`tel:${phone.replace(/ /g, '')}`">{{ phone }}</a></dd>
    </template>
    <template v-if="email">
      <dt>Email :</dt>
      <dd class="text-nowrap"><a :href="`mailto:${email}`">{{ email }}</a></dd>
    </template>
  </dl>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
  },
};
</script>
