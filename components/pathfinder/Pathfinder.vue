<template>
  <section class="section section--image section--image-mask bg-inverted-dark" :style="`background-image: url(${image});`">
    <div class="section__inner">
      <div class="listing listing--three listing--center">
        <ListItem v-for="box in boxes.split(',')" :key="box">
          <CardPathfinder :title="box">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus facilis libero in, ipsam quidem cupiditate! Dignissimos pariatur, repellendus dolore nemo saepe, et dolor maxime, enim rem sapiente debitis minima blanditiis.
          </CardPathfinder>
        </ListItem>
      </div>
    </div>
  </section>
</template>

<script>
import CardPathfinder from '../cards/CardPathfinder.vue';

export default {
  name: 'Pathfinder',
  components: { CardPathfinder },
  props: {
    image: {
      type: String,
      default: 'http://via.placeholder.com/400x200',
    },
    boxes: {
      type: String,
    },
  },
};
</script>
