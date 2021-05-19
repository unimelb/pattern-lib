<template>
  <SectionAlt
    id="courses"
    bg-color="grey-light">
    <template #left>
      <h2 class="heading-md">
        Find a short course or microcredential
      </h2>
    </template>
    <InlineSearch
      id="couse-search"
      name="s"
      label="Search for a course"
      placeholder="Find by keyword"
      action="/find/"
      with-submit
      class="shim-mb2">
      <input
        type="hidden"
        name="studyType"
        value="microcert,short-course">
    </InlineSearch>
    <template
      v-for="(coursesByLetter, letter) in courses">
      <h3
        :id="`letter-${letter}`"
        :key="`heading-${letter}`"
        class="heading-xxs col-grey-mid-2 shim-mb033">
        <span class="screenreaders-only">Results in </span>{{ letter }}
      </h3>
      <ol
        :key="`list-${letter}`"
        class="shim-mb0 list-reset">
        <li
          v-for="(course, index) in coursesByLetter"
          :key="index"
          class="shim-mb033">
          <CardCourse
            :id="`${letter}-${course.slug}`"
            :title="course.title"
            :category="course.category"
            :type="course.type"
            :link="`/find/#${course.model}-${course.slug}`" />
        </li>
      </ol>
    </template>
  </SectionAlt>
</template>

<script>
import SectionAlt from 'components/section/SectionAlt.vue';
import InlineSearch from 'components/forms/InlineSearch.vue';
import CardCourse from 'components/cards/CardCourse.vue';

import SectionAltMd from './SectionAlt.md';

export default {
  readme: { custom: SectionAltMd, html: true, source: true },
  components: {
    SectionAlt,
    InlineSearch,
    CardCourse,
  },
  data() {
    return {
      courses: {
        '0-9': [
          {
            title: '3D Echocardiography',
            slug: '3d-echocardiography',
            category: 'Seminar',
            type: 'short-course',
            model: 'short-course',
          },
        ],
        A: [
          {
            title: 'Adult Dental Therapy (Preparation to Practice)',
            slug: 'adult-dental-therapy-preparation-to-practice',
            category: 'Short course',
            type: 'short-course',
            model: 'short-course',
          },
          {
            title: 'Aesthetic Crowns in Paediatric Dentistry',
            slug: 'aesthetic-crowns-in-paediatric-dentistry',
            category: 'Short course',
            type: 'short-course',
            model: 'short-course',
          },
          {
            title: 'Age-Related Macular Degeneration for Primary Eyecare Practitioners',
            slug: 'age-related-macular-degeneration-for-primary-eyecare-practitioners',
            category: 'Short course',
            type: 'short-course',
            model: 'short-course',
          },
          {
            title: 'Assessment of Diastolic Function',
            slug: 'assessment-of-diastolic-function',
            category: 'Short course',
            type: 'short-course',
            model: 'short-course',
          },
          {
            title: 'Assessment of Left Ventricular Systolic Function',
            slug: 'assessment-of-left-ventricular-systolic-function',
            category: 'Short course',
            type: 'short-course',
            model: 'short-course',
          },
        ],
        E: [
          {
            title: 'Effective Leadership Communication',
            slug: 'sample',
            category: 'Melbourne MicroCert',
            type: 'short-course',
            model: 'micro-certificate',
          },
        ],
      },
    };
  },
};
</script>
