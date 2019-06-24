<template>
  <TableResponsive>
    <table class="table table--striped">
      <thead>
        <tr class="table__row--inverted">
          <th>Heading 1</th>
          <th>A really really long Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Faculty of Architecture, Building and Planning
          </td>
          <td>
            Professor Julie Willis
          </td>
        </tr>
        <tr>
          <td>
            Faculty of Arts
          </td>
          <td>
            Professor Mark Considine
          </td>
        </tr>
        <tr>
          <td>
            <a href="#">Faculty of Business and Economics</a>
          </td>
          <td>
            Professor Paul Kofman
            Professor Zeger Degraeve
            (Dean Melbourne Business School)
          </td>
        </tr>
        <tr>
          <td>
            Faculty of Medicine, Dentistry and Health Sciences
          </td>
          <td>
            Professor Shitij Kapur
          </td>
        </tr>
      </tbody>
    </table>
  </TableResponsive>
</template>

<script>
import TableResponsive from '../TableResponsive.vue';
import TableResponsiveDoc from './table-responsive.md';

export default {
  components: { TableResponsive },
  readme: { custom: TableResponsiveDoc, source: false, html: true },
};
</script>
