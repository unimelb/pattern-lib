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
            <h3>test content container</h3>
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
