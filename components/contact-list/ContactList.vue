<template>
  <dl class="list-def clearfix">
    <template v-if="name">
      <dt class="list-def__term">Contact :</dt>
      <dd class="list-def__desc">{{ name }}</dd>
    </template>
    <template v-if="phone">
      <dt class="list-def__term">Phone :</dt>
      <dd class="list-def__desc"><a :href="`tel:${phone.replace(/ /g, '')}`">{{ phone }}</a></dd>
    </template>
    <template v-if="email">
      <dt class="list-def__term">Email :</dt>
      <dd class="list-def__desc"><a class="text-nowrap" :href="`mailto:${email}`">{{ email }}</a></dd>
    </template>
  </dl>
</template>

<script>
export default {
  props: {
    name: String,
    phone: String,
    email: String,
  },
};
</script>
