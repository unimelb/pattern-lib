<template>
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
</template>

<script>
import MegaMenuLogin from './MegaMenuLogin.vue';

export default {
  components: { MegaMenuLogin },
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
                { title: 'Entry requirements1', href: 'http://www.google.com' },
                { title: 'Entry requirements2', href: 'http://www.google.com' },
                { title: 'Entry requirements3', href: 'http://www.google.com' },
                { title: 'Entry requirements4', href: 'http://www.google.com' },
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
                { title: 'Entry non requirements5', href: 'http://www.google.com' },
                { title: 'Entry non requirements6', href: 'http://www.google.com' },
                { title: 'Entry non requirements7', href: 'http://www.google.com' },
                { title: 'Entry non requirements8', href: 'http://www.google.com' },
                { title: 'Entry non requirements9', href: 'http://www.google.com' },
                { title: 'Entry non requirements10', href: 'http://www.google.com' },
                { title: 'Entry non requirements11', href: 'http://www.google.com' },
                { title: 'Entry non requirements12', href: 'http://www.google.com' },
                { title: 'Entry non requirements13', href: 'http://www.google.com' },
                { title: 'Entry non requirements14', href: 'http://www.google.com' },
                { title: 'Entry non requirements15', href: 'http://www.google.com' },
                { title: 'Entry non requirements16', href: 'http://www.google.com' },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
