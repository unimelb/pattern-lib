<template>
  <div class="tags">
    <div class="tags__heading">
      <SvgIcon
        aria-label="Tags"
        class="push-icon__icon"
        width="15px"
        height="15px"
        name="tag" />
    </div>
    <div class="tags__listing">
      <a href="">tag</a>,
      nonlinked,
      <a
        class="tag"
        href="">multi word</a>,
      <a
        class="tag tag--truncate"
        href=""
        title="tag truncated because it's way too long">tag truncated because it's way too long</a>
    </div>
  </div>
</template>
