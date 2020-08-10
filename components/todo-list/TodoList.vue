<template>
  <SectionWrap
    :class="`bg-${bgColor}`"
    class="todo-list">
    <div class="todo-list__container">
      <div class="todo-list__inner">
        <div class="todo-list__figure">
          <FigureWrap
            :caption="false"
            inset>
            <FigureRounded
              :background-image="img"
              :aria-label="ariaLabel" />
          </FigureWrap>
        </div>
        <div class="todo-list__header-txt">
          <h3 class="section-with-rounded-image__heading">
            {{ heading }}
          </h3>
          <p class="section-with-rounded-image__description">
            {{ description }}
          </p>
        </div>
      </div>
      <div class="todo-list__button-cards">
        <div class="todo-list__fill" />
        <ButtonCard
          v-for="data in buttonCardData"
          :key="data"
          :top-label="data.topLabel"
          :label="data.label"
          :link="data.link"
          :inverted="data.inverted" />
      </div>
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
    ariaLabel: {
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
    bgColor: {
      type: String,
      default: 'light-blue',
      validator: (value) => ['light-blue', 'alt'].includes(value),
    },
  },
};
</script>
