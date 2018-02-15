<template>
  <ul class="news-block">
    <li class="news-block__item">
      <a class="news-block__link" href="http://melbournemodel.unimelb.edu.au/?in_c=hpbanner%7Cer_2017_brand_melbmodel">
        <img class="news-block__img" alt="" src="http://cms.unimelb.edu.au/__data/assets/image/0004/2649766/brand-tile.jpg">
        <h4 class="news-block__title">Talent for every possible future</h4>
        <p>Meet our Melbourne Model graduates</p>
        <Tag>future</Tag>
        <Tag>melbourne model</Tag>
        <Tag>story</Tag>
        <Tag>student</Tag>
      </a>
    </li>
    <li class="news-block__item">
      <Tag element="a" href="/tags/linked">linked</Tag>
      <Tag>not linked</Tag>
    </li>
  </ul>
</template>

<script>
import Tag from '../Tag.vue';

export default {
  components: { Tag },
};
</script>
