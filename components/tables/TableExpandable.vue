<template>
  <AccordionGroup>
    <AccordionTable>
      <template slot="title">
        <slot name="table"/>
      </template>
      <template slot="container">
        <slot name="content"/>
      </template>
    </AccordionTable>
  </AccordionGroup>
</template>

<script>
import AccordionTable from '../accordion/AccordionTable.vue';
import AccordionGroup from '../accordion/AccordionGroup.vue';

export default {
  name: 'TableExpandable',
  components: { AccordionTable, AccordionGroup },
  readme: { html: true, source: false },
};
</script>
