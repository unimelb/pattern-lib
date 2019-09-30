<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--4col">
      <ListItem
        v-for="item in items"
        :key="item.title">
        <CardImageList
          :border="false"
          :title="item.title"
          :meta="item.meta"
          thumb="https://dummyimage.com/300x200.jpg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim accusamus dolorum labore, odit libero maxime nam inventore neque ratione optio quos sapiente atque ex fuga blanditiis alias, ducimus ut? Voluptatibus.
        </CardImageList>
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardImageList from '../../CardImageList.vue';

export default {
  components: { CardImageList },
  data: () => ({
    items: [
      {
        title: 'Online synthesizing',
        meta: 'copy communities metrics',
      },
      {
        title: 'Visionary connecting Movies Designer microchip',
        meta: 'support methodologies leverage',
      },
      {
        title: 'paradigms Response revolutionary JSON',
        meta: 'Borders Tasty Shoes',
      },
      {
        title: 'Fuga debitis consequuntur.',
        meta: 'Enim explicabo fuga.',
      },
      {
        title: 'Molestiae est consequatur autem animi et rerum.',
        meta: 'Sint animi quisquam.',
      },
      {
        title: 'Sed quisquam tempore minima ut omnis molestiae.',
        meta: 'Enim et tempore.',
      },
      {
        title: 'Similique molestiae doloremque perferendis nihil.',
        meta: 'Consequatur beatae dolores pariatur dolorum natus voluptas molestiae iste.',
      },
      {
        title: 'Laborum eligendi et.',
        meta: 'Quis rerum aliquam.',
      },
      {
        title: 'Itaque sunt aut quibusdam non.',
        meta: 'Autem sint voluptatem quia excepturi fuga molestias fugiat.',
      },
      {
        title: 'Ut in deserunt atque quis dolorem.',
        meta: 'Distinctio quam voluptatem.',
      },
    ],
  }),
};

</script>
