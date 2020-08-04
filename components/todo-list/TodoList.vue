<template>
  <SectionWrap
    class="todo-list">
    <div class="grid grid--center">
      <ListItem
        class="todo-list__figure-text"
        cols="1of2">
        <FigureWrap
          :caption="false"
          inset>
          <FigureRounded
            :background-image="img"
            aria-label="test aria label" />
        </FigureWrap>
        <div>
          <h3 class="section-with-rounded-image__heading">
            {{ heading }}
          </h3>
          <p class="section-with-rounded-image__description">
            {{ description }}
          </p>
        </div>
      </ListItem>
      <ListItem
        class="todo-list__button-cards"
        cols="1of2">
        <ButtonCard
          v-for="data in buttonCardData"
          :key="data"
          :top-label="data.topLabel"
          :label="data.label"
          :link="data.link"
          :inverted="data.inverted" />
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import SectionWrap from 'components/section/SectionWrap.vue';
import FigureRounded from 'components/figure/FigureRounded.vue';
import FigureWrap from 'components/figure/FigureWrap.vue';
import ButtonCard from 'components/buttons/ButtonCard.vue';

export default {
  components: {
    SectionWrap,
    FigureRounded,
    FigureWrap,
    ButtonCard,
  },
  props: {
    img: {
      type: String,
      default: '',
    },
    heading: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    buttonCardData: {
      type: Array,
      default: () => [{}],
    },
  },
};
</script>
