<template>
  <CardCourseList :items="items" />
</template>

<script>
import CardCourseList from '../../CardCourseList.vue';
import CardCourseListReadme from './card-course-list.md';

export default {
  components: { CardCourseList },
  readme: { custom: CardCourseListReadme, source: true, html: false },
  data() {
    return {
      items: [
        {
          title: 'Bachelor of Design',
          category: 'bachelor',
          type: 'bachelor',
          link: 'www.unimelb.edu.au',
        },
        {
          title: 'Bachelor of Fine Arts (Degree with Honours)',
          category: 'degree',
          type: 'degree',
          link: 'www.unimelb.edu.au',
        },
        {
          title: 'Bachelor of Fine Arts (Design and Production)',
          category: 'diploma',
          type: 'diploma',
          link: 'www.unimelb.edu.au',
        },
        {
          title: "Melbourne Chancellor's Scholarship",
          category: 'certificate',
          type: 'certificate',
          link: 'www.unimelb.edu.au',
        },
        {
          title: 'Bachelor of Science',
          category: 'coursework',
          type: 'coursework',
          link: 'www.unimelb.edu.au',
        },
        {
          title: 'Bachelor of Science (Extended)',
          category: 'research',
          type: 'research',
          link: 'www.unimelb.edu.au',
        },
        {
          title: 'Bachelor of Science (Extended)',
          category: 'major',
          type: 'major',
          link: 'www.unimelb.edu.au',
        },
        {
          title: 'Bachelor of Science (Extended)',
          category: 'phd',
          type: 'phd',
          link: 'www.unimelb.edu.au',
        },
        {
          title: 'Bachelor of Science (Extended)',
          category: 'specialisation',
          type: 'specialisation',
          link: 'www.unimelb.edu.au',
        },
        {
          title: 'Bachelor of Science (Extended)',
          category: 'interest',
          type: 'interest',
          link: 'www.unimelb.edu.au',
        },
        {
          title: 'Bachelor of Science (Extended)',
          category: 'pathway',
          type: 'pathway',
          link: 'www.unimelb.edu.au',
        },
        {
          title: 'Bachelor of Science (Extended)',
          category: 'short-course',
          type: 'short-course',
          link: 'www.unimelb.edu.au',
        },
        {
          title: 'Bachelor of Science (Extended)',
          category: 'microcredential',
          type: 'microcredential',
          link: 'www.unimelb.edu.au',
        },
        {
          title: 'Bachelor of Science (Extended)',
          category: 'honours',
          type: 'honours',
          link: 'www.unimelb.edu.au',
        },
      ],
    };
  },
};
</script>
