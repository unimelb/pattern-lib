<template>
  <main>
    <section-wrap
      small
      short
      bg-color="white">
      <div>
        <h2>Heading</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit eum cum pariatur excepturi deleniti ipsum architecto possimus? Pariatur vitae, saepe magnam cupiditate earum cum, soluta mollitia repudiandae tempore, modi eos.</p>
        <FigureWrap
          inset
          large
          right
          caption="embed test">
          <progressive-img
            src="https://picsum.photos/seed/1/800/400"
            alt="alt text goes here" />
        </FigureWrap>
        <p>Blanditiis exercitationem id sapiente voluptatem dolorum est sapiente. Qui explicabo voluptatem dolores perspiciatis laborum animi. Similique animi molestiae ipsam accusamus incidunt rerum. Et fugiat ut eum dolores id. Quaerat repudiandae facere voluptas fuga laboriosam quo illo adipisci. Doloremque autem cum ea voluptatem id.</p>
        <p>At aperiam porro. Voluptas alias harum. Repellendus quaerat modi laudantium sed corrupti alias et quibusdam. At quas quia quos vel et sit eum officia.</p>
      </div>
    </section-wrap>
    <section-wrap
      small
      short
      bg-color="white">
      <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit eum cum pariatur excepturi deleniti ipsum architecto possimus? Pariatur vitae, saepe magnam cupiditate earum cum, soluta mollitia repudiandae tempore, modi eos.</p>
        <FigureWrap
          inset
          left
          caption="embed test">
          <progressive-img
            src="https://picsum.photos/seed/2/800/400"
            alt="alt text goes here" />
        </FigureWrap>
        <p>Blanditiis exercitationem id sapiente voluptatem dolorum est sapiente. Qui explicabo voluptatem dolores perspiciatis laborum animi. Similique animi molestiae ipsam accusamus incidunt rerum. Et fugiat ut eum dolores id. Quaerat repudiandae facere voluptas fuga laboriosam quo illo adipisci. Doloremque autem cum ea voluptatem id.</p>
        <p>At aperiam porro. Voluptas alias harum. Repellendus quaerat modi laudantium sed corrupti alias et quibusdam. At quas quia quos vel et sit eum officia.</p>
      </div>
    </section-wrap>
    <section-wrap
      small
      short
      bg-color="white">
      <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit eum cum pariatur excepturi deleniti ipsum architecto possimus? Pariatur vitae, saepe magnam cupiditate earum cum, soluta mollitia repudiandae tempore, modi eos.</p>
        <FigureWrap
          inset
          small
          right
          caption="embed test">
          <progressive-img
            src="https://picsum.photos/seed/3/800/400"
            alt="alt text goes here" />
        </FigureWrap>
        <p>Blanditiis exercitationem id sapiente voluptatem dolorum est sapiente. Qui explicabo voluptatem dolores perspiciatis laborum animi. Similique animi molestiae ipsam accusamus incidunt rerum. Et fugiat ut eum dolores id. Quaerat repudiandae facere voluptas fuga laboriosam quo illo adipisci. Doloremque autem cum ea voluptatem id.</p>
        <p>At aperiam porro. Voluptas alias harum. Repellendus quaerat modi laudantium sed corrupti alias et quibusdam. At quas quia quos vel et sit eum officia.</p>
      </div>
    </section-wrap>
  </main>
</template>

<script>
import FigureWrap from '../FigureWrap.vue';

export default {
  components: { FigureWrap },
  readme: { html: true, source: true },
};
</script>
