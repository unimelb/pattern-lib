<template>
  <SectionTwoCol direction="right">
    <div slot="main">
      <h3 class="heading-section">Doloribus in mollitia.</h3>
      <p>Qui rem enim alias accusantium ut nostrum et iste. A quo voluptatem in culpa repudiandae facere. Veritatis magnam omnis distinctio ea modi. Ipsam aperiam corporis dolorum.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa neque nemo, nam veritatis quasi ea perspiciatis laudantium aliquid alias velit sed quam tenetur dolorum, nihil quo pariatur cum commodi?</p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut numquam ex perspiciatis harum amet laudantium sint error vitae exercitationem sapiente a nisi debitis ipsum sed voluptates natus, esse aut modi.
    </div>
    <div slot="side">
      <FigureWrap>
        <img
          src="https://dummyimage.com/300x200.jpg"
          alt="">
      </FigureWrap>
    </div>
  </SectionTwoCol>
</template>

<script>
import SectionTwoCol from '../../SectionTwoCol.vue';
import FigureWrap from '../../../figure/FigureWrap.vue';
export default {
  components: { SectionTwoCol, FigureWrap },
};
</script>
