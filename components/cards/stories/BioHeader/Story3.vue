
<template>
  <main>
  <section-wrap small class="bg-white">
    <div class="listing listing--one">
      <list-item>
        <card-bio-header name="John longnamer-Smith" title="Vice-Chancellor" thumb="https://randomuser.me/api/portraits/lego/2.jpg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae similique, exercitationem unde facilis possimus earum odio eos molestias, et aliquam illo velit! Vel, molestiae, eveniet! Molestias doloremque iste itaque consequatur!
        </card-bio-header>
      </list-item>
    </div>
  </section-wrap>
  <section-wrap small class="bg-alt">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ipsum neque, labore ducimus obcaecati voluptatem dignissimos! Est, ad, dolor. Alias doloribus tenetur sint illum beatae, inventore ullam hic sequi sit.
  </section-wrap>
  </main>
</template>

<script>
import CardBioHeader from './../../CardBioHeader.vue';

export default {
  components: { CardBioHeader },
};
</script>
