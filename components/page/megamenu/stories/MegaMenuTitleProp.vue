<template>
  <div>
    <header class="page-header page-header--l3 page-header--study">
      <div class="page-header__inner">
        <MegaMenuTitle
          title="This is a another Faculty name"
          href="/faculty-name"
          width="10%"/>
      </div>
    </header>
  </div>
</template>

<script>
import MegaMenuTitle from '../MegaMenuTitle.vue';
import { codeBlock } from '../../../../.storybook/utils';

const markup = codeBlock(`
<MegaMenuTitle
      title="Faculty name"
      href="/link-to-faculty"
      width="Faculty block width"/>
`);

export default {
  name: 'MegaMenuTitleProp',
  components: { MegaMenuTitle },
  readme: {
    custom: markup,
    source: false,
  },
};
</script>
