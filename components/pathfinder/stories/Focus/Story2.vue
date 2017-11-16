<template>
  <section class="section section--image bg-inverted-dark" :style="{ backgroundImage: `url(${crest})` }">
     <div class="section__inner">
        <div class="listing grid listing--center">
          <ListItem class="cell--desk-1of3">
            <CardPathfinder compact title="Engagement">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus facilis libero in, ipsam quidem cupiditate! Dignissimos pariatur, repellendus dolore nemo saepe, et dolor maxime, enim rem sapiente debitis minima blanditiis.
            </CardPathfinder>
          </ListItem>
          <ListItem class="cell--desk-1of3">
            <CardPathfinder compact title="Something">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus facilis libero in, ipsam quidem cupiditate! Dignissimos pariatur, repellendus dolore nemo saepe, et dolor maxime, enim rem sapiente debitis minima blanditiis.
            </CardPathfinder>
          </ListItem>
          <ListItem class="cell--desk-1of3">
            <CardPathfinder compact title="World class ">
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
