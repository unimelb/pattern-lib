<template>
  <section
    :style="{ backgroundImage: `url(${crest})` }"
    class="section section--image bg-inverted-dark">
    <div class="section__inner">
      <div class="grid grid--3col grid--center">
        <ListItem>
          <CardPathfinder
            href="www.unimelb.edu.au"
            title="Engagement outcomes">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus facilis libero in, ipsam quidem cupiditate! Dignissimos pariatur, repellendus dolore nemo saepe, et dolor maxime, enim rem sapiente debitis minima blanditiis.
          </CardPathfinder>
        </ListItem>
        <ListItem>
          <CardPathfinder
            href="www.unimelb.edu.au"
            title="A longer title goes here">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus facilis libero in, ipsam quidem cupiditate! Dignissimos pariatur, repellendus dolore nemo saepe, et dolor maxime, enim rem sapiente debitis minima blanditiis.
          </CardPathfinder>
        </ListItem>
        <ListItem>
          <CardPathfinder
            href="www.unimelb.edu.au"
            title="World class research">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus facilis libero in, ipsam quidem cupiditate! Dignissimos pariatur, repellendus dolore nemo saepe, et dolor maxime, enim rem sapiente debitis minima blanditiis.
          </CardPathfinder>
        </ListItem>
      </div>
    </div>
  </section>
</template>

<script>
import crest from './crest.png';
import CardPathfinder from '../../../cards/CardPathfinder.vue';

export default {
  components: { CardPathfinder },
  readme: { source: true, html: true },
  data: () => ({ crest }),
};
</script>
