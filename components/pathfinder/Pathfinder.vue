<template>
  <section
    :style="{ backgroundImage: `url(${image})` }"
    class="section section--image bg-inverted-dark">
    <div class="section--image-mask"/>
    <div class="section__inner">
      <div class="listing listing--three listing--center">
        <ListItem
          v-for="box in boxes.split(',')"
          :key="box">
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
      default: 'https://via.placeholder.com/400x200',
    },
    boxes: {
      type: String,
      default: '',
    },
  },
};
</script>
