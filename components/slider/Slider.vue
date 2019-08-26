<template>
  <hooper :settings="hooperSettings">
    <slide>
      slide 1
    </slide>
    <slide>
      slide 2
    </slide>
    <slide>
      slide 3
    </slide>
    <slide>
      slide 4
    </slide>
    <slide>
      slide 5
    </slide>
    <slide>
      slide 6
    </slide>
    <hooper-navigation slot="hooper-addons"/>
    <hooper-progress slot="hooper-addons"/>
  </hooper>

</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Progress as HooperProgress,
} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperProgress,
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        infiniteScroll: true,
        keysControl: true,
        autoPlay: true,
      },
    };
  },
};
</script>

<style>
.hooper-slide {
    background-color: #62caaa;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: 2px solid #fff;
    font-size: 30px;
    border-radius: 10px;
}
</style>
