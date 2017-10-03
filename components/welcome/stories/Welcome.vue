<template>
  <div class="welcome">
    <div class="welcome__thumb">
      <figure>
        <img :src="img" alt="">
        <figcaption class="text-center"><h6>Professor Glynn Davies</h6></figcaption>
      </figure>
      <button-icon v-if="small" icon="chevron-right" class="btn--xsml">Bio and Recent Publications</button-icon>
    </div>
    <div class="welcome__inner ">
      <h2>Welcome from the Vice-Chancellor</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.</p>
      <img class="welcome__signature" :src="signature" alt="signature">
      <h6>Professor Glyn Davis AC</h6>
      <p>Vice Chancellor</p>
      <button-icon v-if="!small" icon="chevron-right" class="btn--xsml">Bio and Recent Publications</button-icon>
    </div>
  </div>

</template>

<script>
  import ButtonIcon from './../../buttons/stories/ButtonIcon.vue';

  export default {
    components: { ButtonIcon },
    props: {
      img:{
        type: String,
        default: "http://about-us-unimelb.netlify.com/images/leadership/senior-leadership/Glyn-Davis.jpg"
      },
      signature: {
        type: String,
        default: "http://about-us-unimelb.netlify.com/images/leadership/office-of-the-vice-chancellor/signature.png"
      },
      small: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>