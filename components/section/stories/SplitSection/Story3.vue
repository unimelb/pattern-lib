<template>
  <main class="bg-white">
    <SplitSection
      image-left
      quote="University of Melbourne has provided opportunities i could never imagine. This is a ridiculously long quote because people like to be especially verbose. eos minima at"
      cite="Rebecca Lam, Molecular Biology"
      bg-image="https://picsum.photos/seed/1/1200/600">
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
