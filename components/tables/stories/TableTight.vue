<template>
  <ResponsiveTable>
    <table
      class="table table--striped table--tight">
      <thead>
        <tr class="table__row--inverted">
          <th>
            Independently published global and program rankings
          </th>
          <th>
            Australia ranking
          </th>
          <th>
            World ranking
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="table__row--white">
          <th>
            <a>Times Higher Education World University Rankings 2016&nbsp;– 2017</a>
          </th>
          <th>
            1
          </th>
          <th>
            33
          </th>
        </tr>
        <tr class="table__row--white">
          <th>
            <a>Academic Ranking of World Universities</a>
          </th>
          <th>
            1
          </th>
          <th>
            40
          </th>
        </tr>
        <tr class="table__row--info">
          <th colspan="3">
            <a>QS World University Rankings</a>
          </th>
        </tr>
        <tr>
          <td>
            Academic reputation
          </td>
          <td>
            1
          </td>
          <td>
            17
          </td>
        </tr>
        <tr>
          <td>
            Employer reputation
          </td>
          <td>
            1
          </td>
          <td>
            11
          </td>
        </tr>
        <tr class="table__row--info">
          <th colspan="3">
            <a>QS World University Rankings (by subject)</a>
          </th>
        </tr>
        <tr>
          <td>
            Linguistics
          </td>
          <td>
            1
          </td>
          <td>
            24
          </td>
        </tr>
        <tr>
          <td>
            Performing Arts
          </td>
          <td>
            1
          </td>
          <td>
            26
          </td>
        </tr>
        <tr>
          <td>
            Computer Science and Information Systems
          </td>
          <td>
            1
          </td>
          <td>
            14
          </td>
        </tr>
        <tr>
          <td>
            Electrical Engineering
          </td>
          <td>
            1
          </td>
          <td>
            35
          </td>
        </tr>
        <tr>
          <td>
            Mechanical Engineering
          </td>
          <td>
            1
          </td>
          <td>
            44
          </td>
        </tr>
        <tr>
          <td>
            Biological Sciences
          </td>
          <td>
            1
          </td>
          <td>
            23
          </td>
        </tr>
        <tr>
          <td>
            Dentistry
          </td>
          <td>
            1
          </td>
          <td>
            28
          </td>
        </tr>
        <tr>
          <td>
            Chemistry
          </td>
          <td>
            1
          </td>
          <td>
            45
          </td>
        </tr>
        <tr>
          <td>
            Physics
          </td>
          <td>
            1
          </td>
          <td>
            48
          </td>
        </tr>
        <tr>
          <td>
            Business and Management Studies
          </td>
          <td>
            1
          </td>
          <td>
            22
          </td>
        </tr>
        <tr>
          <td>
            Education
          </td>
          <td>
            1
          </td>
          <td>
            5
          </td>
        </tr>
        <tr>
          <td>
            Law
          </td>
          <td>
            1
          </td>
          <td>
            11
          </td>
        </tr>
        <tr>
          <td>
            Economics and Econometrics
          </td>
          <td>
            1
          </td>
          <td>
            25
          </td>
        </tr>
        <tr>
          <td>
            Statistics and Operational Research
          </td>
          <td>
            1
          </td>
          <td>
            30
          </td>
        </tr>
        <tr class="highlight">
          <td>
            Times Higher Education World Reputation Rankings 2016
          </td>
          <td>
            1
          </td>
          <td>
            49
          </td>
        </tr>
        <tr class="highlight">
          <td>
            US News Best Global Universities
          </td>
          <td>
            1
          </td>
          <td>
            36
          </td>
        </tr>
      </tbody>
    </table>
  </ResponsiveTable>
</template>

<script>
import ResponsiveTable from '../ResponsiveTable.vue';
import TableTightDoc from './table-tight.md';

export default {
  components: { ResponsiveTable },
  readme: { custom: TableTightDoc, source: false, html: true },
};
</script>
