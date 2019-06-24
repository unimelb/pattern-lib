<template>
  <TableCompacted>
    <table class="table table--striped">
      <thead>
        <tr class="table__row--inverted">
          <th scope="col">
            Day/Date
          </th>
          <th scope="col">
            Activity
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="table__row--info table__row--header">
          <th colspan="2">
            January using th
          </th>
        </tr>
        <tr>
          <td>
            Monday 6 January to Sunday 2 March
          </td>
          <td>
            Summer Term (8 weeks)
          </td>
        </tr>
        <tr>
          <td>
            Wednesday 22 January
          </td>
          <td>
            Academic Advice Day 1
          </td>
        </tr>
        <tr>
          <td>
            Monday 27 January
          </td>
          <td>
            University holiday for Australia Day
          </td>
        </tr>
        <tr>
          <td>
            Friday 31 January
          </td>
          <td>
            Council Planning Day
          </td>
        </tr>
        <tr class="table__row--info table__row--header">
          <td colspan="2">
            February
          </td>
        </tr>
        <tr>
          <td>
            Wednesday 12 February to Friday 14 February
          </td>
          <td>
            Conference of Deans and Heads of Departments
          </td>
        </tr>
        <tr>
          <td>
            Thursday 20 February
          </td>
          <td>
            Academic Advice Day 2
          </td>
        </tr>
        <tr>
          <td>
            Tuesday 25 February to Friday 28 February
          </td>
          <td>
            Week O: Orientation for all students
          </td>
        </tr>
        <tr class="table__row--info table__row--header">
          <td colspan="2">
            March
          </td>
        </tr>
        <tr>
          <td>
            Monday 3 March to Sunday 1 June
          </td>
          <td>
            Semester 1 (12 teaching weeks)
          </td>
        </tr>
        <tr>
          <td>
            Monday 10 March
          </td>
          <td>
            Labour Day (not a University Holiday)
          </td>
        </tr>
        <tr class="table__row--info table__row--header">
          <td colspan="2">
            April
          </td>
        </tr>
        <tr>
          <td>
            Good Friday 18 April to Sunday 27 April
          </td>
          <td>
            Easter Non Teaching Period &amp; UA (previously AVCC) Common Week
          </td>
        </tr>
        <tr>
          <td>
            Friday 25 April
          </td>
          <td>
            Anzac Day – University Holiday
          </td>
        </tr>
      </tbody>
    </table>
  </TableCompacted>
</template>

<script>
import TableCompacted from '../TableCompacted.vue';
import TableCompactedDoc from './table-compacted-complex.md';

export default {
  components: { TableCompacted },
  readme: { custom: TableCompactedDoc, source: false, html: true },
};
</script>
