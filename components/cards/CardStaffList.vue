<template>
  <div
    class="btn-owner card card--stafflist card--bdr-blue bg-white">
    <a
      :href="href"
      title="profile image"
      aria-label="Profile image">
      <div
        :style="{ backgroundImage: `url(${thumb})` }"
        class="card__thumb"/>
    </a>
    <div class="card__inner ">
      <a
        :href="href"
        title="profile name link"
        aria-label="Profile Name">
        <h3 class="card__header">{{ meta }}</h3>
      </a>
      <p class="card__meta">{{ title }}</p>
      <div
        v-if="cols < 4"
        class="card__footer">
        <a
          v-if="phone"
          :href="'tel:' + phone"
          class="card__phone"
          title="profile phone number"
          aria-label="Phone Number"
        >
          <SvgIcon
            name="phone"
            width="15px"
            height="15px"/>
          {{ phone }}
        </a>
        <a
          v-if="email"
          :href="'mailto:' + email"
          class="card__email"
          title="profile email"
          aria-label="Email"
        >
          <SvgIcon
            name="envelope"
            width="15px"
            height="15px"/>
          {{ email }}</a>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  props: {
    thumb: {
      type: String,
      default: 'https://via.placeholder.com/400x200',
    },
    title: {
      type: String,
      default: 'Test title',
    },
    meta: {
      type: String,
      default: 'Test title',
    },
    href: {
      type: String,
      default: '#',
    },
    excerpt: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quae doloribus, aliquid modi? Blanditiis quod, ullam aliquam provident, accusamus neque aut necessitatibus accusantium maxime voluptates sit consequatur illum tempora magnam.',
    },
    phone: {
      type: [String, Boolean],
      default: false,
    },
    email: {
      type: [String, Boolean],
      default: false,
    },
    cols: {
      type: Number,
      default: 0,
    },
  },
};

</script>
