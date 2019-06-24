<template>
  <table class="table table--striped table--is-not-responsive">
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
</template>

<script>
import TableNotResponsiveDoc from './table-not-responsive.md';

export default {
  readme: { custom: TableNotResponsiveDoc, source: false, html: true },
};
</script>
