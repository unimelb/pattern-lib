<template>
  <section class="section bg-inverted-dark" :style="`background-image: url(${image});`">
    <div class="section__inner">
      <div class="listing listing--three listing--center">
        <ListItem v-for="box in boxes.split(',')" :key="box.id">
          <CardPathfinder :title="box" />
        </ListItem>
      </div>
    </div>
  </section>
</template>

<script>
  import ListItem from '../../listing/stories/listitem.vue';
  import CardPathfinder from '../../card/stories/card-pathfinder.vue';

  export default {
    name: 'Pathfinder',
    components: {CardPathfinder, ListItem},
    props: {
      image: {
        type: String,
        default: "http://via.placeholder.com/400x200"
      },
      boxes: {
        type: String
      }
    }
  }
</script>