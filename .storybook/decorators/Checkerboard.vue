<template>
  <div class="checkerboard">
    <story />
  </div>
</template>

<style scoped>
  .checkerboard {
    background-color: rgba(0, 0, 0, .02);
    background-image: linear-gradient(45deg, rgba(0, 0, 0, .02) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, .02) 75%, rgba(0, 0, 0, .02)),
                      linear-gradient(45deg, rgba(0, 0, 0, .02) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, .02) 75%, rgba(0, 0, 0, .02));
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
    padding: 1rem;
  }
</style>

