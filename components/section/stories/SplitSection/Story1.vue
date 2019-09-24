<template>
  <main class="bg-white">
    <SplitSection
      image-left
      bg-image="https://images.unsplash.com/photo-1495100793874-7f94aecae1fb?dpr=1&auto=compress,format&fit=crop&w=600&h=&q=80&cs=tinysrgb&crop="
    >
      <h3 class="heading-section">
        This is a header
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt error architecto provident beatae autem optio, et vel repellendus assumenda aliquid, non cumque esse aliquam neque earum voluptatibus, perferendis maiores obcaecati.
      </p>
      <a
        href="https://www.unimelb.edu.au"
        class="btn btn--icon btn--icon--chevron-right"
      >
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
