<template>
  <ListingWrap class="listing--links" cols="3">
    <ListItem>
      <a href="https://coursesearch.unimelb.edu.au/undergrad"><h3>Undergraduate courses</h3> <p>An undergraduate course is your first degree at university. Search here if you’re a secondary school student, or looking to start your first degree at university.</p></a>
    </ListItem>
    <ListItem>
      <a href="https://coursesearch.unimelb.edu.au/grad"><h3>Graduate courses</h3> <p>Our graduate courses are ideal if you’re looking to get a professional masters qualification, develop specialist knowledge or undertake graduate research.</p></a>
    </ListItem>
    <ListItem>
      <a href="https://online.unimelb.edu.au/"><h3>Online Graduate courses</h3> <p>A collection of specialist online masters, graduate certificate and diploma programs that will take your career to the next level.</p></a>
    </ListItem>
  </ListingWrap>
</template>

<script>
import ListingWrap from '../../ListingWrap.vue';
import ListItem from '../../ListItem.vue';
import SectionWrap from '../../../section/SectionWrap.vue';

export default {
  components: { ListingWrap, ListItem },
  decorator: SectionWrap,
};
</script>
