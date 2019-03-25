<template>
  <table
    id="statstable"
    class="table table--striped">
    <thead>
      <tr
        class="table__row--inverted"
        scope="col">
        <th id="header-rankings">
          Independently published global and program rankings
        </th>
        <th id="header-aus-ranking">
          Australia ranking
        </th>
        <th id="header-world-ranking">
          World ranking
        </th>
      </tr>
    </thead>


    <tbody>


      <tr>
        <td
          headers="header-rankings qs-world-heading"
          colspan="3">
          <AccordionGroup>
            <Accordion name="Arts">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. .</p>
              <ButtonIcon size="xsml">I am a child component</ButtonIcon>
            </Accordion>
          </AccordionGroup>
        </td>
      </tr>


      <tr>
        <td headers="header-rankings qs-world-heading">
          Academic reputation
        </td>
        <td headers="header-aus-ranking qs-world-heading">
          1
        </td>
        <td headers="header-world-ranking qs-world-heading">
          17
        </td>
      </tr>


      <!--<tr>-->
      <!--<td headers="header-rankings qs-world-heading">-->
      <!--Academic reputation-->
      <!--</td>-->
      <!--<td headers="header-aus-ranking qs-world-heading">-->
      <!--1-->
      <!--</td>-->
      <!--<td headers="header-world-ranking qs-world-heading">-->
      <!--17-->
      <!--</td>-->
      <!--</tr>-->

      <!--<AccordionTable>-->
      <!--<template slot="header-table">-->
      <!--<tr>-->
      <!--<td headers="header-rankings qs-world-heading">-->
      <!--Academic reputation-->
      <!--</td>-->
      <!--<td headers="header-aus-ranking qs-world-heading">-->
      <!--1-->
      <!--</td>-->
      <!--<td headers="header-world-ranking qs-world-heading">-->
      <!--17-->
      <!--</td>-->
      <!--</tr>-->
      <!--</template>-->
      <!--</AccordionTable>-->

      <!--<AccordionTable>-->
      <!--<template slot="header-table">-->
      <!--<tr>-->
      <!--<td headers="header-rankings qs-world-heading">-->
      <!--Employer reputation-->
      <!--</td>-->
      <!--<td headers="header-aus-ranking qs-world-heading">-->
      <!--1-->
      <!--</td>-->
      <!--<td headers="header-world-ranking qs-world-heading">-->
      <!--11-->
      <!--</td>-->
      <!--</tr>-->
      <!--</template>-->
      <!--</AccordionTable>-->
    </tbody>


  </table>
</template>


<script>
import AccordionTable from '../accordion/AccordionTable.vue';

import Accordion from '../accordion/Accordion.vue';
import AccordionGroup from '../accordion/AccordionGroup.vue';


export default {
  name: 'TableExpandable',
  components: { AccordionTable, Accordion, AccordionGroup },
};
</script>
