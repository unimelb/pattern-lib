<template>
  <div class="showcase_container">
    <div class="showcase_container-inner">
      <div>
        <img :src="studentThumb">
      </div>
      <div class="studentDetails">
        <h6>{{ studentName }}</h6>
        <p>{{ studyProgram }}</p>
        <button @click="isHidden = !isHidden">
          <span v-if="isHidden">Show Bio</span>
          <span v-if="!isHidden">Hide Bio</span>
        </button>
      </div>
    </div>
    <div>
      <p v-show="!isHidden">{{ bio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Showcase",
  props: {
    studentThumb: {
      type: String,
      default: "https://via.placeholder.com/192x136"
    },
    studentName: {
      type: String,
      default: ""
    },
    studyProgram: {
      type: String,
      default: ""
    },
    bio: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isHidden: true
    };
  }
};
</script>

<style scoped>
.showcase_container {
  display: flex;
  flex-direction: column;
  border-bottom: 0.4rem solid black);
}

.showcase_container-inner {
  display: flex;
}

.studentDetails {
  display: flex;
  flex-direction: column;
}
</style>
