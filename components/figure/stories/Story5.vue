<template>
  <section-wrap
    small
    bg-color="white"
  >
    <div>
      <h2>Heading</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit eum cum pariatur excepturi deleniti ipsum architecto possimus? Pariatur vitae, saepe magnam cupiditate earum cum, soluta mollitia repudiandae tempore, modi eos.</p>
      <figure-wrap
        inset
        small
        right
        caption="embed test"
      >
        <img
          src="https://picsum.photos/600/400?random&gravity=center"
          alt="alt text goes here"
        >
      </figure-wrap>
      <p>Blanditiis exercitationem id sapiente voluptatem dolorum est sapiente. Qui explicabo voluptatem dolores perspiciatis laborum animi. Similique animi molestiae ipsam accusamus incidunt rerum. Et fugiat ut eum dolores id. Quaerat repudiandae facere voluptas fuga laboriosam quo illo adipisci. Doloremque autem cum ea voluptatem id.</p>
      <p>At aperiam porro. Voluptas alias harum. Repellendus quaerat modi laudantium sed corrupti alias et quibusdam. At quas quia quos vel et sit eum officia.</p>
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
