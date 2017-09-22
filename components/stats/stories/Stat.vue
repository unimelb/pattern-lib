<template>
  <li class="stats__item">
    <svg class="stats__icon" role="presentation" focusable="false" width="128" height="128">
      <use :xlink:href="icon" />
    </svg>
    <strong class="stats__value">
      <span class="stats__value__hash">#</span>
      <span class="stats__value__num">{{number}}</span>
    </strong>
    <span class="stats__text">{{meta}}</span>
  </li>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        default: "globe"
      },
      number: {
        type: String,
        default: "1"
      },
      meta: {
        type: String,
        default: "in Australia"
      },
    }
  }
</script>