<template>
  <SectionWrap bg-color="inverted-dark" bg-image="http://cms.unimelb.edu.au/__data/assets/image/0005/2353784/UoM-soft-3.png">
      <div class="listing listing--three listing--center">
        <ListItem>
          <CardPathfinder compact title="Chancellor">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus facilssimos pariatur, repellendus dolore nemo saepe, et dolor maxime, enim rem sapiente debitis minima blanditiis.
          </CardPathfinder>
        </ListItem>
        <ListItem>
          <CardPathfinder compact title="Vice-Chancellor">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus facilis libero in, ipsam quidem cupiditate!
          </CardPathfinder>
        </ListItem>
        <ListItem>
          <CardPathfinder compact title="Senior leadership">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus facilis libero in, ipsam quidem cupiditate!
          </CardPathfinder>
        </ListItem>
      </div>
  </SectionWrap>
</template>

<script>
import CardPathfinder from './../../../cards/CardPathfinder.vue';

export default {
  components: { CardPathfinder },
};
</script>
