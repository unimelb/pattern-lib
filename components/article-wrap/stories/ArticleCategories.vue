<template>
  <ArticleWrap
    title="MGSE Professoriate Planning Day"
    :date="['2017-04-03', '3 Apr. 2017']"
    type="speech"
    :contact="contact"
    :categories="['Sustainability','Tim Flannery', 'Melbourne Sustainable Society', 'Institute']"
  >
    <h2 class="heading-card">Opening remarks by Vice-Chancellor Glyn Davis</h2>
    <p>Thank you Johanna. It is a great pleasure to be here, and I am honoured to ask to start off a day of serious discussions amongst the academic leadership at a great graduate school of education.</p>
    <p>I’m conscious of what an important time this is with the departure of an outstanding leader in Professor Field Rickards. His contribution in 13 years as Dean (and indeed 43 years at the University) includes the transformation of the Faculty of Education into the MGSE and the reorganisation of professional teacher education at Melbourne, which has resulted in the school achieving stellar international rankings.</p>
    <p>From a wider University perspective, Field and the School have played an important role in shaping the Melbourne Curriculum (sometimes known as the Melbourne Model), with the Master of Teaching undoubtedly one its flagship degrees.</p>
    <BlockQuotation author="Steve Wozniak" border-top border-bottom>Never trust a computer you can’t throw out a window.</BlockQuotation>
    <p>More recently, through courses including the Master of Clinical Teaching, the clinical teaching model has begun reaching a generation of practising teaching professionals and leaders, as well as helping shape new teachers who are just beginning their classroom careers.</p>
    <p>It is important to note also that this School inherits a great tradition of education practice and scholarship, through 20 years of leadership by Dean and later Vice-Chancellor Professor Kwong Lee Dow. Since departing as dean Kwong has been a recognised leader of education debate and policy-making – embodying the idea of scholarly engagement in the community. He remains a role model for what a great engaged school and faculty of education can be.</p>
    <p>Scholarly engagement in the community is something which remains characteristic of the Melbourne Graduate School of Education to the present day. Last year’s successful ABC television series <em>Revolution School</em> is only one recent example.</p>
    <p>With such a legacy to build on, it seems to me the ongoing discussions you are now having about the future vision for this School should proceed with enormous confidence and optimism.</p>
    <p>So what are some of the challenges you might face in as you contemplate the future? A couple of broad questions might be relevant here.</p>
    <p>The first concerns the way education in general, and schools in particular, are increasingly being asked to sort out and settle a wide number of social problems – to solve all ills from the economic to the social and political; even health problems. How are teachers and educational leaders being prepared for the position of great social responsibility this places on their shoulders?</p>
    <p>The second concerns the multifaceted and rapid technological change of very recent years, and the impacts of this change on how we learn and how we teach. How important is technological change to learning? As a university and as a school, are we doing all we can to lead a way into the future in response to this question?</p>
    <p>The many experts present today will have answers to these questions. But I at least suggest that we need not be afraid of the possibilities for school or university in the face of technology.</p>
  </ArticleWrap>
</template>

<script>
import ArticleWrap from '../ArticleWrap.vue';
import BlockQuotation from '../../block-quotation/BlockQuotation.vue';

export default {
  components: { ArticleWrap, BlockQuotation },
  data() {
    return {
      contact: {
        name: 'John Robertson',
        phone: '+613 4234 2344',
        email: 'john.robertson@unimelb.edu.au',
      },
    };
  },
};
</script>

