<template>
  <div
    :style="`background-image: url(${img})`"
    class="campaign">
    <div class="campaign__container">
      <h1
        v-if="title"
        class="campaign__title">{{ title }}</h1>
      <h1
        v-if="subTitle"
        class="campaign__title">{{ subTitle }}</h1>
      <button-icon
        :href="link"
        class="btn--cta">{{ buttonText }}</button-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
@import "../../_vars.css";

.campaign {
  background-position: 65%;
  background-size: cover;
  min-height: 386px;

  @media (--bp-x-tablet) {
    background-position: 50%;
  }

  @media (--bp-wide) {
    min-height: 400px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8.625rem 1.625rem 1.625rem 1.625rem;

    @media (--bp-x-desktop) {
      align-items: flex-start;
      padding: 7.3125rem 0 7.3125rem 6.25rem;
      max-width: 48.4375rem;
    }
  }

  &__title {
    font-family: var(--ff-normal);
    font-size: 1.6875rem;
    font-weight: var(--fw-semibold);
    letter-spacing: -0.025rem;
    line-height: 1.6875rem;
    text-align: center;
    margin: 0;

    @media (--bp-x-tablet) {
      font-size: 3.625rem;
      letter-spacing: -0.0531rem;
      line-height: 4rem;
    }

    @media (--bp-wide) {
      font-size: 4.25rem;
      letter-spacing: -0.0625rem;
      line-height: 4.125rem;
    }
  }
}

.btn--cta {
  margin-top: 2.5rem;
}
</style>
