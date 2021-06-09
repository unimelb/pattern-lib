<template>
  <main>
    <SectionWrap
      small
      class="bg-white">
      <div class="grid grid--1col">
        <ListItem>
          <CardBioHeader
            name="John longnamer-Smith"
            title="Vice-Chancellor"
            thumb="https://randomuser.me/api/portraits/lego/2.jpg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae similique, exercitationem unde facilis possimus earum odio eos molestias, et aliquam illo velit! Vel, molestiae, eveniet! Molestias doloremque iste itaque consequatur!
          </CardBioHeader>
        </ListItem>
      </div>
    </SectionWrap>
    <SectionWrap
      small
      class="bg-alt">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ipsum neque, labore ducimus obcaecati voluptatem dignissimos! Est, ad, dolor. Alias doloribus tenetur sint illum beatae, inventore ullam hic sequi sit.
    </SectionWrap>
  </main>
</template>

<script>
import CardBioHeader from '../../CardBioHeader.vue';

export default {
  components: { CardBioHeader },
};
</script>
