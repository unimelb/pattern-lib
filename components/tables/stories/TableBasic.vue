<template>
  <tables
    :table="items"
  />
</template>

<script>
import Tables from '../Tables';
import TablesDocs from './tables-docs.md';

const table = {
  thead: ['Subject name', 'Campus', 'Teaching period', 'Credit', 'Level', 'Subject code'],
  tbody: [
    {
      'Subject name': 'Acting for Camera', Campus: 'Southbank', 'Teaching period': 'Winter Term', Credit: '12.5', Level: 'UG3', 'Subject code': 'DRAM30020',
    },
    {
      'Subject name': 'Interactive Art Media 1', Campus: 'Southbank', 'Teaching period': 'Semester 1, Semester 2', Credit: '12.5', Level: 'UG1', 'Subject code': 'FLTV10021',
    },
    {
      'Subject name': 'Art and the Botanical', Campus: 'Parkville', 'Teaching period': 'Summer Term, February, June, Winter Term', Credit: '12.5', Level: 'UG2', 'Subject code': 'FINA20044',
    },
  ],
};

export default {
  components: { Tables },
  readme: { custom: TablesDocs, source: true, html: true },
  data() {
    return {
      items: table,
    };
  },
};
</script>
