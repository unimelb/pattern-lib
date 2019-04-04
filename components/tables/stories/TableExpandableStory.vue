<template>
  <SectionWrap bg-color="white">
    <table class="table table--striped">
      <tbody>
        <TableExpandable>
          <template slot="table">
            <tr>
              <td>
                Faculty of Architecture, Building and Planning
              </td>
              <td>
                Professor Julie Willis
              </td>
              <td>
                age 31
              </td>
              <td>
                age 31
              </td>
              <td>
                age 31
              </td>
            </tr>
          </template>
          <template slot="content">
            <h3>test content container</h3>
          </template>
        </TableExpandable>
        <TableExpandable>
          <template slot="table">
            <tr>
              <td>
                Faculty of Architecture, Building and Planning
              </td>
              <td>
                Professor Julie Willis
              </td>
              <td>
                age 31
              </td>
              <td>
                age 31
              </td>
              <td>
                age 31
              </td>
            </tr>
          </template>
          <template slot="content">
            <ButtonIcon
              size="xsml"
              class="shim-mb1">I am a child component</ButtonIcon>
            <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
          </template>
        </TableExpandable>
      </tbody>
    </table>
  </SectionWrap>
</template>


<script>
import AccordionTable from '../../accordion/AccordionTable.vue';
import AccordionGroup from '../../accordion/AccordionGroup.vue';
import TableExpandable from '../TableExpandable.vue';

export default {
  components: { AccordionTable, AccordionGroup, TableExpandable },
  readme: { html: true, source: false },
};
</script>
