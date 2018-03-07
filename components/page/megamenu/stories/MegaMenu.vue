<template>
  <div>
    <HeaderFullwidth />
    <nav class="megamenu">
      <ul class="megamenu__level-1">
        <li
          class="megamenu__item"
          v-for="(level1, index) in items"
          :key="`level1-${index}`"
        >
          <a
            role="menuitem"
            aria-haspopup="true"
            :aria-expanded="level1.open ? 'true' : 'false'"
            @click="toggleMenu(index)"
            :href="level1.href ? level1.href : '#'"
            tabindex="0"
          >
            {{ level1.title }}
          </a>
          <ul class="megamenu__level-2" :class="{'megamenu__level-2--open': level1.open}">
            <li
              class="megamenu__item"
              v-for="(level2, index) in level1.items"
              :key="`level2-${index}`"
              >
                <h3 class="text-white">
                  {{ level2.title }}
                </h3>
                <ul class="megamenu__level-3">
                  <li
                    v-for="(level3, index) in level2.items"
                    :key="`level3-${index}`"
                  >
                    <a :href="level3.href">
                      {{ level3.title }}
                    </a>
                  </li>
                </ul>
            </li>
          </ul>
        </li>
        <MegaMenuLogin v-if="showLogin" />
      </ul>
    </nav>
  </div>
</template>

<script>
import HeaderFullwidth from './HeaderFullwidth.vue';
import MegaMenuLogin from './MegaMenuLogin.vue';

export default {
  components: { HeaderFullwidth, MegaMenuLogin },
  data() {
    return {
      showLogin: false,
      items: [
        {
          title: 'Why, Melbourne?',
          open: false,
          items: [
            {
              title: 'Why Melbourne',
              items: [
                { title: 'Entry requirements', href: 'http://www.google.com' },
                { title: 'Entry requirements', href: 'http://www.google.com' },
                { title: 'Entry requirements', href: 'http://www.google.com' },
                { title: 'Entry requirements', href: 'http://www.google.com' },
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
                { title: 'Entry non requirements', href: 'http://www.google.com' },
                { title: 'Entry non requirements', href: 'http://www.google.com' },
                { title: 'Entry non requirements', href: 'http://www.google.com' },
                { title: 'Entry non requirements', href: 'http://www.google.com' },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleMenu(index) {
      this.items.forEach((link, i) => {
        link.open = (i === index && !link.open);
      });
    },
  },
};
</script>
