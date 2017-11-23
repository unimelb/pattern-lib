<template>
  <SectionWrap small class="bg-white">
    <div class="grid grid--1col">
      <ListItem>
        <CardBioHeader name="John longnamer-Smith" title="Vice-Chancellor" thumb="https://randomuser.me/api/portraits/lego/1.jpg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae similique, exercitationem unde facilis possimus earum odio eos molestias, et aliquam illo velit! Vel, molestiae, eveniet! Molestias doloremque iste itaque consequatur!
        </CardBioHeader>
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardBioHeader from './../../CardBioHeader.vue';

export default {
  components: { CardBioHeader },
};
</script>
