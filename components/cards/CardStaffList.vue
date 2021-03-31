<template>
  <div class="btn-owner card card--stafflist card--bdr-blue bg-white">
    <a
      :href="href"
      :style="{ backgroundImage: `url(${thumb})` }"
      :title="'profile of ' + name"
      :aria-label="'Photo of ' + name"
      class="card__thumb" />
    <div class="card__inner">
      <a
        :href="href"
        title="profile link"
        aria-label="Profile position"
        class="card__header">
        <h3 class="card__position">{{ position }}</h3>
        <h4 class="card__name">{{ name }}</h4>
      </a>
      <div
        v-if="excerpt"
        class="card__excerpt">
        {{ excerpt }}
      </div>
      <div
        v-if="renderFooter"
        class="card__footer">
        <a
          v-if="phone"
          :href="'tel:' + phone"
          class="card__phone"
          title="profile phone number"
          aria-label="Phone Number">
          <SvgIcon
            :name="'phone'"
            width="15px"
            height="15px" />
          {{ phone }}
        </a>
        <a
          v-if="email"
          :href="'mailto:' + email"
          class="card__email"
          title="profile email"
          aria-label="Email">
          <SvgIcon
            :name="'envelope'"
            width="15px"
            height="15px" />
          {{ email }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  components: {
    SvgIcon,
  },
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
  computed: {
    renderFooter() {
      const maxColumns = 4;

      return this.cols < maxColumns && (this.phone || this.email);
    },
  },
};
</script>
