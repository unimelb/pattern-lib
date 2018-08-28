<template>
  <div>
    <ButtonIcon href="www.google.com">I am a button with an icon</ButtonIcon>
    <div class="grid">
      <div class="cell cell--tab-1of4">
        <ButtonIcon href="www.google.com">I am a button with an icon and the name is super long to make it wrap onto the next line</ButtonIcon>
      </div>
      <div class="cell cell--tab-1of4">
        <ButtonIcon
          top
          href="www.google.com">I am a button with an icon and the name is super long, the icon is top aligned</ButtonIcon>
      </div>
    </div>

    <SectionWrap
      short
      bg-color="white"
    >
      <h3>New default</h3>
      <p><button class="button">Default button with chevron-right icon</button></p>
    </SectionWrap>

    <SectionWrap
      short
      bg-color="inverted"
    >
      <h3>Inverted</h3>
      <p><button class="button">Default button with chevron-right icon</button></p>
    </SectionWrap>
  </div>
</template>
