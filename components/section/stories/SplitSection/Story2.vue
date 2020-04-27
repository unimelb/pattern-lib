<template>
  <main class="bg-white">
    <SplitSection
      image-right
      bg-image="https://picsum.photos/seed/1/1200/540">
      <h3 class="heading-section">
        This is a header
      </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt error architecto provident beatae autem optio, et vel repellendus assumenda aliquid, non cumque esse aliquam neque earum voluptatibus, perferendis maiores obcaecati.</p>
    </SplitSection>
  </main>
</template>

<script>
import SplitSection from '../../SplitSection.vue';

export default {
  components: { SplitSection },
  readme: { source: true, html: true },
};
</script>
