<template>
  <SectionWrap class="bg-white">
    <QuickLinks :menu-links="menuLinks">
      <div slot="content">
        <h2>Australia's leading university</h2>
        <p class="lead">
          Our distinctive Melbourne experience helps graduates become well-rounded, thoughtful and skilled professionals – making
          a positive impact across the globe.
        </p>
        <p>
          Our research helps solve social, economic and environmental challenges the world is facing today and into the future.
          And we’re tightly connected with our communities, at home and around the globe, a connection that enriches our learning,
          teaching and research.
        </p>
        <ButtonIcon
          icon="chevron-right"
          style="margin-top: 1.5rem;"
          class="btn--xwide"
        >
          Welcome from the Vice-Chancellor
        </ButtonIcon>
      </div>
    </QuickLinks>
  </SectionWrap>
</template>

<script>
import QuickLinks from '../QuickLinks.vue';

export default {
  components: { QuickLinks },
  data() {
    return {
      menuLinks: [
        {
          title: 'Strategy and governance',
          href: '#',
        },
        {
          title: 'Leadership',
          href: '#',
        },
        {
          title: 'Priorities and partnerships and priorities and partnerships',
          href: '#',
        },
        {
          title: 'News and resources',
          href: '#',
        },
        {
          title: 'Careers',
          href: '#',
        },
        {
          title: 'Campus and Maps',
          href: '#',
        },
      ],
    };
  },
};
</script>
