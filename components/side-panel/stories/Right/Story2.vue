<template>
  <main class="layout layout--right clearfix bg-light-blue">
    <SidePanel class="layout__post bg-light-blue">
      <SidePanelNavItem target="#section1">Section 1</SidePanelNavItem>
      <SidePanelNavItem target="#section2">Section 2</SidePanelNavItem>
      <SidePanelNavItem target="#section3">Section 3</SidePanelNavItem>
    </SidePanel>
    <div class="layout__main">
      <div
        id="section1"
        class="bg-white content-block">
        <h2>test content</h2>
      </div>
      <section-wrap
        id="section2"
        class="bg-alt">test content</section-wrap>
      <section-wrap
        id="section3"
        class="bg-white">test content</section-wrap>
    </div>
  </main>
</template>

<script>
import SidePanel from '../../SidePanel.vue';
import SidePanelNavItem from '../../SidePanelNavItem.vue';
import PageDecorator from 'storybook/decorators/PageDecorator.vue';

export default {
  components: { SidePanel, SidePanelNavItem },
  decorator: PageDecorator,
  readme: { source: true, html: true },
};
</script>
