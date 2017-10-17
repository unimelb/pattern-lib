<template>
  <section class="section section--image bg-inverted-dark" :style="`background-image: url('${crest}')`">
     <div class="section__inner">
        <div class="listing listing--three listing--center">
          <ListItem>
            <CardPathfinder title="Engagement outcomes">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus facilis libero in, ipsam quidem cupiditate! Dignissimos pariatur, repellendus dolore nemo saepe, et dolor maxime, enim rem sapiente debitis minima blanditiis.
            </CardPathfinder>
          </ListItem>
          <ListItem>
            <CardPathfinder title="A longer title goes here">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus facilis libero in, ipsam quidem cupiditate! Dignissimos pariatur, repellendus dolore nemo saepe, et dolor maxime, enim rem sapiente debitis minima blanditiis.
            </CardPathfinder>
          </ListItem>
          <ListItem>
            <CardPathfinder title="World class research">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus facilis libero in, ipsam quidem cupiditate! Dignissimos pariatur, repellendus dolore nemo saepe, et dolor maxime, enim rem sapiente debitis minima blanditiis.
            </CardPathfinder>
          </ListItem>
        </div>
     </div>
  </section>
</template>

<script>
import crest from './crest.png';
import CardPathfinder from './../../../cards/CardPathfinder.vue';

export default {
  components: { CardPathfinder },
  data: () => ({ crest }),
};
</script>
