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
          link: '/find/courses/undergraduate/bachelor-of-design',
        },
        {
          title: 'Bachelor of Fine Arts (Degree with Honours)',
          category: 'degree',
          type: 'degree',
          link:
            '/find/courses/undergraduate/bachelor-of-fine-arts-degree-with-honours',
        },
        {
          title: 'Bachelor of Fine Arts (Design and Production)',
          category: 'diploma',
          type: 'diploma',
          link:
            '/find/courses/undergraduate/bachelor-of-fine-arts-design-and-production',
        },
        {
          title: "Melbourne Chancellor's Scholarship",
          category: 'certificate',
          type: 'certificate',
          link:
            "/find/courses/undergraduate/melbourne-chancellor's-scholarship",
        },
        {
          title: 'Bachelor of Science',
          category: 'coursework',
          type: 'coursework',
          link: '/find/courses/undergraduate/bachelor-of-science',
        },
        {
          title: 'Bachelor of Science (Extended)',
          category: 'research',
          type: 'research',
          link: '/find/courses/undergraduate/bachelor-of-science-extended',
        },
        {
          title: 'Bachelor of Science (Extended)',
          category: 'major',
          type: 'major',
          link: '/find/courses/undergraduate/bachelor-of-science-extended',
        },
        {
          title: 'Bachelor of Science (Extended)',
          category: 'phd',
          type: 'phd',
          link: '/find/courses/undergraduate/bachelor-of-science-extended',
        },
        {
          title: 'Bachelor of Science (Extended)',
          category: 'specialisation',
          type: 'specialisation',
          link: '/find/courses/undergraduate/bachelor-of-science-extended',
        },
        {
          title: 'Bachelor of Science (Extended)',
          category: 'interest',
          type: 'interest',
          link: '/find/courses/undergraduate/bachelor-of-science-extended',
        },
        {
          title: 'Bachelor of Science (Extended)',
          category: 'pathway',
          type: 'pathway',
          link: '/find/courses/undergraduate/bachelor-of-science-extended',
        },
        {
          title: 'Bachelor of Science (Extended)',
          category: 'short-course',
          type: 'short-course',
          link: '/find/courses/undergraduate/bachelor-of-science-extended',
        },
        {
          title: 'Bachelor of Science (Extended)',
          category: 'honours',
          type: 'honours',
          link: '/find/courses/undergraduate/bachelor-of-science-extended',
        },
      ],
    };
  },
};
</script>
