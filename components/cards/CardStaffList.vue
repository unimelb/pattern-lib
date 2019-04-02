<template>
  <div class="btn-owner card card--stafflist card--bdr-blue bg-white">
    <a
      :href="href"
      :style="{ backgroundImage: `url(${thumb})` }"
      title="profile image"
      aria-label="Profile image"
      class="card__thumb"
    />
    <div class="card__inner">
      <a
        :href="href"
        title="profile position link"
        aria-label="Profile position"
        class="card__header"
      >
        <h3>{{ position }}</h3>
      </a>
      <p class="card__meta">
        <a
          :href="href"
          title="profile name link"
          aria-label="Profile name">{{ name }}</a>
      </p>
      <div
        v-if="excerpt"
        class="card__excerpt">{{ excerpt }}</div>
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
          {{ email }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thumb: {
      type: String,
      default:
        'https://matrix-cms.unimelb.edu.au/__data/assets/image/0022/82903/pattern-library-staff-placeholder.png',
    },
    position: {
      type: String,
      default: 'Test position',
    },
    name: {
      type: String,
      default: 'Test name',
    },
    href: {
      type: String,
      default: '#',
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
    excerpt: {
      type: String,
      default: '',
    },
  },
};
</script>
