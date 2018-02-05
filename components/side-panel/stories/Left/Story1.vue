<template>
  <main class="layout layout--left bg-light-blue">
    <SidePanel class="layout__pre bg-light-blue" title="Navigation">
      <SidePanelNavItem target="#section1"> Section 1</SidePanelNavItem>
      <SidePanelNavItem target="#section2"> Section 2</SidePanelNavItem>
      <SidePanelNavItem target="#section3"> Section 3</SidePanelNavItem>
    </SidePanel>
    <SectionWrap id="section1" class="bg-white">
      <h2>test content</h2>
      <p></p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus cupiditate illo vel similique ea, quos, soluta doloremque suscipit molestiae. Praesentium consectetur enim asperiores laborum assumenda explicabo, et odio, provident sit?
    </SectionWrap>
    <SectionWrap id="section2" class="bg-alt">
      test content
    </SectionWrap>
    <SectionWrap id="section3" class="bg-white">
      test content
    </SectionWrap>
  </main>
</template>

<script>
import SidePanel from '../../SidePanel.vue';
import SidePanelNavItem from '../../SidePanelNavItem.vue';
import PageDecorator from '.storybook/decorators/PageDecorator.vue';

export default {
  components: { SidePanel, SidePanelNavItem },
  decorator: PageDecorator,
};
</script>
