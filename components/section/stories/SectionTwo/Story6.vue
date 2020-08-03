<template>
  <SectionWrap class="two-column-header-text">
    <div class="grid grid--center">
      <ListItem cols="1of2">
        <h3 class="two-column-header-text__heading">
          Discover engineering at Melbourne
        </h3>
      </ListItem>
      <ListItem cols="1of2">
        <p class="two-column-header-text__description">
          Anim mollit ut eu amet ipsum eu incididunt voluptate commodo mollit Lorem Lorem dolor. Commodo nisi pariatur proident quis eu excepteur magna. Culpa sit ut eu labore voluptate.
        </p>
        <button-icon
          href="www.google.com"
          class="btn--cta">
          I am a button
        </button-icon>
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import SectionWrap from '../../SectionWrap.vue';

export default {
  components: { SectionWrap },
  readme: { source: true, html: true },
};
</script>
