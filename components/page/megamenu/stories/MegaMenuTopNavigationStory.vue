<template>
  <div>
    <MegaMenuTopNavigation :top-navigation-items="items"/>
  </div>
</template>

<script>
import MegaMenuTopNavigation from '../MegaMenuTopNavigation.vue';
import { codeBlock } from '../../../../.storybook/utils';

const markup = codeBlock(`
<mega-menu-top-navigation
  top-navigation-items="[
        {
          title: "Students",
          href: "/students"
        },
        {
          title: "Alumni",
          href: "/alumni"
        },
        {
          title: "Supporters and Partners",
          href: "/supporters-and-partners"
        },
        {
          title: "Contact us",
          href: "/contact us"
        },
        {
          title: "FAQ",
          href: "/faq"
        }
      ]">
</mega-menu-top-navigation>
`);

export default {
  name: 'MegaMenuTopNavigationStory',
  components: { MegaMenuTopNavigation },
  readme: {
    custom: markup,
    source: false,
  },
  data() {
    return {
      items: [
        {
          title: 'Students',
          href: '/students',
        },
        {
          title: 'Alumni',
          href: '/alumni',
        },
        {
          title: 'Supporters and Partners',
          href: '/supporters-and-partners',
        },
        {
          title: 'Contact us',
          href: '/contact us',
        },
        {
          title: 'FAQ',
          href: '/faq',
        },
      ],
    };
  },
};
</script>
