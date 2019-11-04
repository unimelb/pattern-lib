<template>
  <section-wrap
    small
    short
    bg-color="white">
    <div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit eum cum pariatur excepturi deleniti ipsum architecto possimus? Pariatur vitae, saepe magnam cupiditate earum cum, soluta mollitia repudiandae tempore, modi eos.</p>
      <FigureWrap caption="embed test">
        <img
          src="https://picsum.photos/800/400?random&gravity=center"
          alt="alt text goes here">
      </FigureWrap>
      <p>Molestiae accusantium ducimus tempora delectus minima mollitia quia dicta alias. Fugiat magnam consequatur voluptatem sunt. Nesciunt est occaecati possimus quis iure architecto sunt.</p>
      <FigureWrap
        fill
        caption="embed test">
        <img
          src="https://picsum.photos/820/400?random&gravity=center"
          alt="alt text goes here">
      </FigureWrap>
      <p>
        The example above uses the
        <code>&lt;figure class="figure figure--fill"&gt;</code> variant, to completely fill the container with no padding left/right.
      </p>
    </div>
  </section-wrap>
</template>

<script>
import FigureWrap from '../FigureWrap.vue';
export default {
  components: { FigureWrap },
  readme: { source: true, html: true },
};
</script>
