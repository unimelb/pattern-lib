<template>
  <form class="form form--inline">
    <label for="f_q0">Search</label>
    <div class="form--inline__row">
      <span class="form--inline__input">
        <input id="f_q0" type="search" placeholder="Don't use the placeholder as a label!">
      </span>
      <button class="form--inline__button" aria-label="Search">
        <SvgIcon class="form--inline__svg" name="search" />
      </button>
    </div>
    <label for="f_eml0">Email</label>
    <div class="form--inline__row">
      <span class="form--inline__input">
        <input id="f_eml0" aria-label="Email" type="email" placeholder="jane@example.com">
      </span>
      <button class="form--inline__button form--inline__button--text" aria-label="Submit">Submit!</button>
    </div>
  </form>
</template>
