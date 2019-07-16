<template>
  <ResponsiveTable>
    <table class="table table--striped">
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
  </ResponsiveTable>
</template>

<script>
import ResponsiveTable from '../ResponsiveTable.vue';

export default {
  components: { ResponsiveTable },
  readme: { html: true, source: false },
};
</script>
