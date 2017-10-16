<template>
  <form class="form form--inline">
    <label>Search</label>
    <div class="form--inline__row">
      <span class="form--inline__input">
        <input type="search" placeholder="Don't use the placeholder as a label!">
      </span>
      <button class="form--inline__button">
        <SvgIcon class="form--inline__svg" name="search" />
      </button>
    </div>
    <label>Email</label>
    <div class="form--inline__row">
      <span class="form--inline__input">
        <input type="email" placeholder="jane@example.com">
      </span>
      <button class="form--inline__button form--inline__button--text">Submit!</button>
    </div>
  </form>
</template>
