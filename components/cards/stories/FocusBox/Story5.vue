<template>
  <SectionWrap class="bg-alt colour-cycle--alt ">
    <div class="grid grid--3col">
      <ListItem>
        <CardStat
          :cols="3"
          stat="590K"
          element="div"
          class="card--image-focus--col-brand "
          vertical
          color="green"
          excerpt="should not be repeated within the text of the card"
        />
      </ListItem>
      <ListItem>
        <CardStat
          :cols="3"
          element="div"
          class="card--image-focus--col-brand "
          vertical
          color="teal"
          stat="123456"
          excerpt="six characters is the most this heading can fit in a 3 column setup"
        />
      </ListItem>
      <ListItem>
        <CardStat
          :cols="3"
          element="div"
          class="card--image-focus--col-brand "
          vertical
          color="yellow"
          stat="290%"
          excerpt="this card should read like a sentence with the stat as the first word"
        />
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>

import CardStat from '../../CardStat.vue';

export default {
  components: { CardStat },
};

</script>
