<template>
  <div>
    <header class="page-header page-header--l3 page-header--study">
      <div class="page-header__inner">
        <MegaMenuTitle
          title="Faculty name"
          href="/faculty-name"/>
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
      href="/link-to-faculty"/>
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