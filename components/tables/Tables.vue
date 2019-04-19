<template>
  <table
    id="statstable"
    class="table table--striped">
    <thead>
      <tr
        class="table__row--inverted"
        scope="col">
        <th
          v-for="(theaditem, theadindex) in table.thead"
          :key="theadindex">
          {{ theaditem }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(tritem, trindex) in table.tbody"
        :key="trindex"
      >
        <td
          v-for="(tditems, tdindex) in tritem"
          :key="tdindex"
          :data-label="tdindex !== table.thead[0] ? tdindex + ':' : '' "
        >
          {{ ' ' + tditems }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Tables',
  props: {
    table: {
      type: Object,
      required: true,
    },
  },
};
</script>
