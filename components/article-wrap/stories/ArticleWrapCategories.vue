<template>
  <ArticleWrap
    title="Some other random news article"
    :date="['2017-04-03', '3 Apr. 2017']"
    type="news"
    :categories="true"
  >
    <p>It is important to note also that this School inherits a great tradition of education practice and scholarship, through 20 years of leadership by Dean and later Vice-Chancellor Professor Kwong Lee Dow. Since departing as dean Kwong has been a recognised leader of education debate and policy-making – embodying the idea of scholarly engagement in the community. He remains a role model for what a great engaged school and faculty of education can be.</p>
    <p>Scholarly engagement in the community is something which remains characteristic of the Melbourne Graduate School of Education to the present day. Last year’s successful ABC television series <em>Revolution School</em> is only one recent example.</p>
    <p>With such a legacy to build on, it seems to me the ongoing discussions you are now having about the future vision for this School should proceed with enormous confidence and optimism.</p>
    <p>So what are some of the challenges you might face in as you contemplate the future? A couple of broad questions might be relevant here.</p>
  </ArticleWrap>
</template>

<script>
import ArticleWrap from '../ArticleWrap.vue';

export default {
  components: { ArticleWrap },
};
</script>

