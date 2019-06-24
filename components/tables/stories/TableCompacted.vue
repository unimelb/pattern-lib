<template>
  <TableCompacted>
    <table class="table table--striped table--is-compacted">
      <thead>
        <tr class="table__row--inverted">
          <th>Heading 1</th>
          <th>A really really long Heading</th>
          <th>Another heading</th>
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
          <td>Loreum Ipsum</td>
        </tr>
        <tr>
          <td>
            Faculty of Arts
          </td>
          <td>
            Professor Mark Considine
          </td>
          <td>Loreum Ipsum</td>
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
          <td>Loreum Ipsum</td>
        </tr>
        <tr>
          <td>
            Faculty of Medicine, Dentistry and Health Sciences
          </td>
          <td>
            Professor Shitij Kapur
          </td>
          <td>Loreum Ipsum</td>
        </tr>
      </tbody>
    </table>
  </TableCompacted>
</template>

<script>
import TableCompacted from '../TableCompacted.vue';
import TableCompactedDoc from './table-compacted.md';

export default {
  components: { TableCompacted },
  readme: { custom: TableCompactedDoc, source: false, html: true },
};
</script>
