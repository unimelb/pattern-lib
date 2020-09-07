<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--4col">
      <ListItem>
        <CardImageLink
          thumb="https://picsum.photos/640/400"
          aria-label="image alt text"
          heading="Non duis et."
          href="https://www.unimelb.edu.au/" />
      </ListItem>
      <ListItem>
        <CardImageLink
          thumb="https://picsum.photos/640/400"
          aria-label="image alt text"
          heading="Non duis et voluptate culpa anim amet."
          href="https://www.unimelb.edu.au/" />
      </ListItem>
      <ListItem>
        <CardImageLink
          thumb="https://picsum.photos/640/400"
          aria-label="image alt text"
          heading="Non duis et voluptate culpa anim amet. Non duis et voluptate culpa anim amet."
          href="https://www.unimelb.edu.au/" />
      </ListItem>
      <ListItem>
        <CardImageLink
          thumb="https://picsum.photos/640/400"
          aria-label="image alt text"
          heading="Non duis et voluptate culpa anim amet."
          href="https://www.unimelb.edu.au/" />
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardImageLink from '../../CardImageLink.vue';

export default {
  components: { CardImageLink },
  readme: { source: true, html: true },
};
</script>
