<template>
  <TableCompacted>
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
      </thead>
      <tbody>
        <tr class="table__row--info">
          <td
            id="qs-world-heading"
            colspan="3">
            <a>QS World University Rankings</a>
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
        <tr>
          <td headers="header-rankings qs-world-heading">
            Employer reputation
          </td>
          <td headers="header-aus-ranking qs-world-heading">
            1
          </td>
          <td headers="header-world-ranking qs-world-heading">
            11
          </td>
        </tr>
        <tr class="table__row--info">
          <td
            id="qs-world-subjects"
            colspan="3">
            <a>QS World University Rankings (by subject)</a>
          </td>
        </tr>
        <tr>
          <td headers="header-rankings qs-world-subjects">
            Linguistics
          </td>
          <td headers="header-aus-ranking qs-world-subjects">
            1
          </td>
          <td headers="header-world-ranking qs-world-subjects">
            24
          </td>
        </tr>
        <tr>
          <td headers="header-rankings qs-world-subjects">
            Performing Arts
          </td>
          <td headers="header-aus-ranking qs-world-subjects">
            1
          </td>
          <td headers="header-world-ranking qs-world-subjects">
            26
          </td>
        </tr>
        <tr>
          <td headers="header-rankings qs-world-subjects">
            Computer Science and Information Systems
          </td>
          <td headers="header-aus-ranking qs-world-subjects">
            1
          </td>
          <td headers="header-world-ranking qs-world-subjects">
            14
          </td>
        </tr>
        <tr>
          <td headers="header-rankings qs-world-subjects">
            Electrical Engineering
          </td>
          <td headers="header-aus-ranking qs-world-subjects">
            1
          </td>
          <td headers="header-world-ranking qs-world-subjects">
            35
          </td>
        </tr>
        <tr>
          <td headers="header-rankings qs-world-subjects">
            Mechanical Engineering
          </td>
          <td headers="header-aus-ranking qs-world-subjects">
            1
          </td>
          <td headers="header-world-ranking qs-world-subjects">
            44
          </td>
        </tr>
        <tr>
          <td headers="header-rankings qs-world-subjects">
            Biological Sciences
          </td>
          <td headers="header-aus-ranking qs-world-subjects">
            1
          </td>
          <td headers="header-world-ranking qs-world-subjects">
            23
          </td>
        </tr>
        <tr>
          <td headers="header-rankings qs-world-subjects">
            Dentistry
          </td>
          <td headers="header-aus-ranking qs-world-subjects">
            1
          </td>
          <td headers="header-world-ranking qs-world-subjects">
            28
          </td>
        </tr>
        <tr>
          <td headers="header-rankings qs-world-subjects">
            Chemistry
          </td>
          <td headers="header-aus-ranking qs-world-subjects">
            1
          </td>
          <td headers="header-world-ranking qs-world-subjects">
            45
          </td>
        </tr>
        <tr>
          <td headers="header-rankings qs-world-subjects">
            Physics
          </td>
          <td headers="header-aus-ranking qs-world-subjects">
            1
          </td>
          <td headers="header-world-ranking qs-world-subjects">
            48
          </td>
        </tr>
        <tr>
          <td headers="header-rankings qs-world-subjects">
            Business and Management Studies
          </td>
          <td headers="header-aus-ranking qs-world-subjects">
            1
          </td>
          <td headers="header-world-ranking qs-world-subjects">
            22
          </td>
        </tr>
        <tr>
          <td headers="header-rankings qs-world-subjects">
            Education
          </td>
          <td headers="header-aus-ranking qs-world-subjects">
            1
          </td>
          <td headers="header-world-ranking qs-world-subjects">
            5
          </td>
        </tr>
        <tr>
          <td headers="header-rankings qs-world-subjects">
            Law
          </td>
          <td headers="header-aus-ranking qs-world-subjects">
            1
          </td>
          <td headers="header-world-ranking qs-world-subjects">
            11
          </td>
        </tr>
        <tr>
          <td headers="header-rankings qs-world-subjects">
            Economics and Econometrics
          </td>
          <td headers="header-aus-ranking qs-world-subjects">
            1
          </td>
          <td headers="header-world-ranking qs-world-subjects">
            25
          </td>
        </tr>
        <tr>
          <td headers="header-rankings qs-world-subjects">
            Statistics and Operational Research
          </td>
          <td headers="header-aus-ranking qs-world-subjects">
            1
          </td>
          <td headers="header-world-ranking qs-world-subjects">
            30
          </td>
        </tr>
        <tr class="table__row--highlight">
          <td headers="header-rankings qs-world-subjects">
            Times Higher Education World Reputation Rankings 2016
          </td>
          <td headers="header-aus-ranking qs-world-subjects">
            1
          </td>
          <td headers="header-world-ranking qs-world-subjects">
            49
          </td>
        </tr>
        <tr class="table__row--highlight">
          <td headers="header-rankings qs-world-subjects">
            US News Best Global Universities
          </td>
          <td headers="header-aus-ranking qs-world-subjects">
            1
          </td>
          <td headers="header-world-ranking qs-world-subjects">
            36
          </td>
        </tr>
      </tbody>
    </table>
  </TableCompacted>
</template>

<script>
import TableCompacted from '../TableCompacted.vue';

export default {
  components: { TableCompacted },
  readme: { html: true, source: false },
};
</script>
