<template>
  <nav class="megamenu" ref="rootmenu">
    <ul class="menu__section">
      <li
        class="menu__item"
        v-for="(level1, index) in items"
        :key="`level1-${index}`"
        @mouseover="activateMenu(index)"
        @mouseout="dismissMenu"
      >
        <a
          role="menuitem"
          :href="level1.href ? level1.href : '#'"
          class="menu__link"
        >
          {{ level1.title }}
        </a>
        <div
          class="inner"
          v-for="(level2, index) in level1.items"
          :key="`level2-${index}`"
        >
          <h3 class="menu__sectiontitle">{{ level2.title }}</h3>
          <ul class="menu__section">
            <li class="menu__item" v-for="(level3, index) in level2.items" :key="`level3-${index}`">
              <a class="menu__link" :href="level3.href">{{ level3.title }}</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import Blanket from '../../search/blanket';

export default {
  data() {
    return {
      isActive: false,
      items: [
        {
          title: 'Why, Melbourne?',
          open: false,
          items: [
            {
              title: 'Why Melbourne',
              feature: '',
              items: [
                { title: 'Entry requirements1', href: 'http://www.google.com' },
                { title: 'Entry requirements2', href: 'http://www.google.com' },
                { title: 'Entry requirements3', href: 'http://www.google.com' },
                { title: 'Entry requirements4', href: 'http://www.google.com' },
                { title: 'Entry requirements5', href: 'http://www.google.com' },
              ],
            },
          ],
        },
        {
          title: 'Find a course',
          open: false,
          href: '/',
        },
        {
          title: 'Admissions',
          open: false,
          items: [
            {
              title: 'Admissions',
              items: [
                { title: 'Entry non requirements6', href: 'http://www.google.com' },
                { title: 'Entry non requirements7', href: 'http://www.google.com' },
                { title: 'Entry non requirements8 has a particularly long title for no good reason', href: 'http://www.google.com' },
                { title: 'Entry non requirements9', href: 'http://www.google.com' },
                { title: 'Entry non requirements10', href: 'http://www.google.com' },
                { title: 'Entry non requirements11', href: 'http://www.google.com' },
                { title: 'Entry non requirements12', href: 'http://www.google.com' },
                { title: 'Entry non requirements13', href: 'http://www.google.com' },
                { title: 'Entry non requirements14', href: 'http://www.google.com' },
                { title: 'Entry non requirements15', href: 'http://www.google.com' },
              ],
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.blanket = new Blanket();
  },
  methods: {
    activateMenu(lvl1index) {
      if (this.$parent.$refs.headerroot && this.items[lvl1index].items !== undefined && !this.isActive) {
        this.blanket.show({ onClick: this.dismissMenu.bind(this) });
        this.$parent.$refs.headerroot.classList.add('active');
        // this.$parent.$refs.headerroot.removeAttribute('aria-hidden');
        this.isActive = true;
      }
    },

    dismissMenu() {
      if (this.$parent.$refs.headerroot && this.isActive) {
        this.blanket.hide();
        this.$parent.$refs.headerroot.classList.remove('active');
        // this.$parent.$refs.headerroot.setAttribute('aria-hidden', true);
        this.isActive = false;
      }
    },
  },
};
</script>
