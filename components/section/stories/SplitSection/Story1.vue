<template>
  <main class="bg-white">
    <SplitSection
      image-left
      bg-image="https://picsum.photos/seed/1/1200/540">
      <h3 class="heading-section">
        This is a header
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt error architecto provident beatae autem optio, et vel repellendus assumenda aliquid, non cumque esse aliquam neque earum voluptatibus, perferendis maiores obcaecati.
      </p>
      <a
        href="https://www.unimelb.edu.au"
        class="btn btn--icon btn--icon--chevron-right">
        Call to Action
      </a>
    </SplitSection>
  </main>
</template>

<script>
import SplitSection from '../../SplitSection.vue';

export default {
  components: { SplitSection },
  readme: { html: true, source: false },
};
</script>
