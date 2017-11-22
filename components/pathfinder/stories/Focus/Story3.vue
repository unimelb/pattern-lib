<template>
  <section class="section section--image section--image-mask bg-inverted" :style="{ backgroundImage: 'url(http://about-us-unimelb.netlify.com/images/our-history/leaves.jpg)' }">
     <div class="section__inner">
        <div class="grid grid--3col grid--center">
          <ListItem>
            <CardPathfinder compact title="Engagement">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus facilis libero in, ipsam quidem cupiditate! Dignissimos pariatur, repellendus dolore nemo saepe, et dolor maxime, enim rem sapiente debitis minima blanditiis.
            </CardPathfinder>
          </ListItem>
          <ListItem>
            <CardPathfinder compact title="Something">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus facilis libero in, ipsam quidem cupiditate! Dignissimos pariatur, repellendus dolore nemo saepe, et dolor maxime, enim rem sapiente debitis minima blanditiis.
            </CardPathfinder>
          </ListItem>
          <ListItem>
            <CardPathfinder compact title="World class ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus facilis libero in, ipsam quidem cupiditate! Dignissimos pariatur, repellendus dolore nemo saepe, et dolor maxime, enim rem sapiente debitis minima blanditiis.
            </CardPathfinder>
          </ListItem>
        </div>
     </div>
  </section>
</template>

<script>
import CardPathfinder from './../../../cards/CardPathfinder.vue';

export default {
  components: { CardPathfinder },
};
</script>
