<template>
  <div>
    <ButtonIcon href="www.google.com">
      <span style="color: red; background-color: blue;">I am a button with an icon</span>
    </ButtonIcon>
    <div class="grid">
      <div class="cell cell--tab-1of4">
        <ButtonIcon
          href="www.google.com"
        >
          I am a button with an icon and the name is super long to make it wrap onto the next line
        </ButtonIcon>
      </div>
      <div class="cell cell--tab-1of4">
        <ButtonIcon
          top
          href="www.google.com"
        >
          I am a button with an icon and the name is super long, the icon is top aligned
        </ButtonIcon>
      </div>
    </div>
  </div>
</template>
