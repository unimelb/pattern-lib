<template>
  <CardInPageNavigation>
  <div>
    <h2 class="title">{{ cardTitle }}</h2>
    <hr class="line"/>
    <div class="linkContainer">
    <li class="removeBullet" v-for="(link, index) in cardLinks" :key="index">
      <a class="link" :href="link.url">{{ link.title }}
        <SvgIcon
      name="chevron-right"
      class="icon" />
      </a>
    </li>
    </div>
  </div>
  </CardInPageNavigation>
</template>

<script>
import CardInPageNavigation from '../cards/CardInPageNavigation.vue';


export default {
  components: { CardInPageNavigation },
  props: {
    cardTitle: {
      type: String,
      default: '',
    },
    cardLinks: {
      type: Array,
      default: [],
    },
  }
};
</script>

<style scoped>
.title {
  font-size: 18px;
  color: #4A4A4A;
  font-weight: 600;
  text-transform: uppercase;
}

.line {
  width: 40px;
  margin: 0;
  border: 1px solid #505D68;
}

.removeBullet {
 list-style-type: none;
}

.link {
  font-size: 16px;
  color: #4A4A4A;
  letter-spacing: 0;
  font-weight: 400;
}

.icon {
  display: inline;
  fill: #424B5A;
  margin-left: 6px;
  width: 8px;
  height: 8px;
}

.linkContainer {
  margin-top: 23px;
}
</style>
