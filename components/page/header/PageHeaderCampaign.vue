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
        class="btn--cta">Call to Action</button-icon>
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
    padding: 138px 26px 26px 26px;

    @media (--bp-x-desktop) {
      align-items: flex-start;
      padding: 117px 0 117px 100px;
      max-width: 775px;
    }
  }

  &__title {
    font-family: var(--ff-normal);
    font-size: 27px;
    font-weight: 600;
    letter-spacing: -0.4px;
    line-height: 27px;
    text-align: center;
    margin: 0;

    @media (--bp-x-tablet) {
      font-size: 58px;
      letter-spacing: -0.85px;
      line-height: 64px;
    }

    @media (--bp-wide) {
      font-size: 68px;
      letter-spacing: -1px;
      line-height: 66px;
    }
  }
}

.btn--cta {
  margin-top: 40px;
}
</style>
