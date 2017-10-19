<template>
  <SectionWrap small class="bg-inverted" :style="{ backgroundImage: 'url(http://about-us-unimelb.netlify.com/images/UoM-soft-3.png)' }">
    <CardFocusImageList
      element="div"
      color="white"
      fullimg
      hero
      titleabove
      img="http://about-us-unimelb.netlify.com/images/history.jpg"
      title="Postera crescam laude"
      >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ullam quisquam nihil. At ducimus explicabo quidem distinctio magnam voluptas totam, repudiandae voluptatem aliquid consequuntur cupiditate, voluptates! In quis ratione laborum?
    </CardFocusImageList>
</SectionWrap>
</template>

<script>
import CardFocusImageList from './../../CardFocusImageList.vue';

export default {
  components: { CardFocusImageList },
};
</script>
