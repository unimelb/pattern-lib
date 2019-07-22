<template>
  <section-wrap bg-color="white">
    <AccordionFilter
      :data="data"
      show-ssr>
      <p>Server-side Code is rended on page load.  Click on Search to filter on data object.</p>
    </AccordionFilter>
  </section-wrap>
</template>

<script>
import AccordionFilter from '../accordion/AccordionFilter.vue';
import accordionReadme from '../accordion/accordionCMS.md';

export default {
  components: { AccordionFilter },
  readme: { custom: accordionReadme, source: false, html: false },
  data() {
    return {
      data: [
        {
          name: 'arts',
          semester: 'january',
          location: 'location 1',
          points: 'points 1',
          discipline: 'discipline 1',
          audition: 'audition 1',
          abrod: 'abrod 1',
          overview:
            'Exercitation quis sunt fugiat aute adipisicing nulla pariatur ad et fugiat commodo mollit proident. Esse reprehenderit duis ea fugiat reprehenderit amet proident. Labore consequat dolore incididunt enim qui aute nulla ad magna occaecat ullamco. Ipsum consequat commodo ut ullamco sunt ea aliqua magna elit ea aliquip id quis ex. Voluptate voluptate mollit eu irure ipsum labore laborum sunt dolor dolore est. Nostrud tempor non duis excepteur nulla excepteur cupidatat excepteur et laborum tempor. Sit est sit exercitation deserunt sint incididunt.',
          buttonText: 'Handbook Link',
        },
        {
          name: 'science',
          semester: 'february',
          location: 'location 2',
          points: 'points 2',
          discipline: 'discipline 2',
          audition: 'audition 2',
          abrod: 'abrod 2',
          overview:
            'Exercitation quis sunt fugiat aute adipisicing nulla pariatur ad et fugiat commodo mollit proident. Esse reprehenderit duis ea fugiat reprehenderit amet proident. Labore consequat dolore incididunt enim qui aute nulla ad magna occaecat ullamco. Ipsum consequat commodo ut ullamco sunt ea aliqua magna elit ea aliquip id quis ex. Voluptate voluptate mollit eu irure ipsum labore laborum sunt dolor dolore est. Nostrud tempor non duis excepteur nulla excepteur cupidatat excepteur et laborum tempor. Sit est sit exercitation deserunt sint incididunt.',
          buttonText: 'Handbook Link',
        },
        {
          name: 'arts',
          semester: 'january',
          location: 'location 1',
          points: 'points 1',
          discipline: 'discipline 1',
          audition: 'audition 1',
          abrod: 'abrod 1',
          overview:
            'Exercitation quis sunt fugiat aute adipisicing nulla pariatur ad et fugiat commodo mollit proident. Esse reprehenderit duis ea fugiat reprehenderit amet proident. Labore consequat dolore incididunt enim qui aute nulla ad magna occaecat ullamco. Ipsum consequat commodo ut ullamco sunt ea aliqua magna elit ea aliquip id quis ex. Voluptate voluptate mollit eu irure ipsum labore laborum sunt dolor dolore est. Nostrud tempor non duis excepteur nulla excepteur cupidatat excepteur et laborum tempor. Sit est sit exercitation deserunt sint incididunt.',
          buttonText: 'Handbook Link',
        },
        {
          name: 'science',
          semester: 'february',
          location: 'location 2',
          points: 'points 2',
          discipline: 'discipline 2',
          audition: 'audition 2',
          abrod: 'abrod 2',
          overview:
            'Exercitation quis sunt fugiat aute adipisicing nulla pariatur ad et fugiat commodo mollit proident. Esse reprehenderit duis ea fugiat reprehenderit amet proident. Labore consequat dolore incididunt enim qui aute nulla ad magna occaecat ullamco. Ipsum consequat commodo ut ullamco sunt ea aliqua magna elit ea aliquip id quis ex. Voluptate voluptate mollit eu irure ipsum labore laborum sunt dolor dolore est. Nostrud tempor non duis excepteur nulla excepteur cupidatat excepteur et laborum tempor. Sit est sit exercitation deserunt sint incididunt.',
          buttonText: 'Handbook Link',
        },
        {
          name: 'arts',
          semester: 'january',
          location: 'location 1',
          points: 'points 1',
          discipline: 'discipline 1',
          audition: 'audition 1',
          abrod: 'abrod 1',
          overview:
            'Exercitation quis sunt fugiat aute adipisicing nulla pariatur ad et fugiat commodo mollit proident. Esse reprehenderit duis ea fugiat reprehenderit amet proident. Labore consequat dolore incididunt enim qui aute nulla ad magna occaecat ullamco. Ipsum consequat commodo ut ullamco sunt ea aliqua magna elit ea aliquip id quis ex. Voluptate voluptate mollit eu irure ipsum labore laborum sunt dolor dolore est. Nostrud tempor non duis excepteur nulla excepteur cupidatat excepteur et laborum tempor. Sit est sit exercitation deserunt sint incididunt.',
          buttonText: 'Handbook Link',
        },
        {
          name: 'science',
          semester: 'february',
          location: 'location 2',
          points: 'points 2',
          discipline: 'discipline 2',
          audition: 'audition 2',
          abrod: 'abrod 2',
          overview:
            'Exercitation quis sunt fugiat aute adipisicing nulla pariatur ad et fugiat commodo mollit proident. Esse reprehenderit duis ea fugiat reprehenderit amet proident. Labore consequat dolore incididunt enim qui aute nulla ad magna occaecat ullamco. Ipsum consequat commodo ut ullamco sunt ea aliqua magna elit ea aliquip id quis ex. Voluptate voluptate mollit eu irure ipsum labore laborum sunt dolor dolore est. Nostrud tempor non duis excepteur nulla excepteur cupidatat excepteur et laborum tempor. Sit est sit exercitation deserunt sint incididunt.',
          buttonText: 'Handbook Link',
        },
        {
          name: 'arts',
          semester: 'january',
          location: 'location 1',
          points: 'points 1',
          discipline: 'discipline 1',
          audition: 'audition 1',
          abrod: 'abrod 1',
          overview:
            'Exercitation quis sunt fugiat aute adipisicing nulla pariatur ad et fugiat commodo mollit proident. Esse reprehenderit duis ea fugiat reprehenderit amet proident. Labore consequat dolore incididunt enim qui aute nulla ad magna occaecat ullamco. Ipsum consequat commodo ut ullamco sunt ea aliqua magna elit ea aliquip id quis ex. Voluptate voluptate mollit eu irure ipsum labore laborum sunt dolor dolore est. Nostrud tempor non duis excepteur nulla excepteur cupidatat excepteur et laborum tempor. Sit est sit exercitation deserunt sint incididunt.',
          buttonText: 'Handbook Link',
        },
        {
          name: 'science',
          semester: 'february',
          location: 'location 2',
          points: 'points 2',
          discipline: 'discipline 2',
          audition: 'audition 2',
          abrod: 'abrod 2',
          overview:
            'Exercitation quis sunt fugiat aute adipisicing nulla pariatur ad et fugiat commodo mollit proident. Esse reprehenderit duis ea fugiat reprehenderit amet proident. Labore consequat dolore incididunt enim qui aute nulla ad magna occaecat ullamco. Ipsum consequat commodo ut ullamco sunt ea aliqua magna elit ea aliquip id quis ex. Voluptate voluptate mollit eu irure ipsum labore laborum sunt dolor dolore est. Nostrud tempor non duis excepteur nulla excepteur cupidatat excepteur et laborum tempor. Sit est sit exercitation deserunt sint incididunt.',
          buttonText: 'Handbook Link',
        },
        {
          name: 'arts',
          semester: 'january',
          location: 'location 1',
          points: 'points 1',
          discipline: 'discipline 1',
          audition: 'audition 1',
          abrod: 'abrod 1',
          overview:
            'Exercitation quis sunt fugiat aute adipisicing nulla pariatur ad et fugiat commodo mollit proident. Esse reprehenderit duis ea fugiat reprehenderit amet proident. Labore consequat dolore incididunt enim qui aute nulla ad magna occaecat ullamco. Ipsum consequat commodo ut ullamco sunt ea aliqua magna elit ea aliquip id quis ex. Voluptate voluptate mollit eu irure ipsum labore laborum sunt dolor dolore est. Nostrud tempor non duis excepteur nulla excepteur cupidatat excepteur et laborum tempor. Sit est sit exercitation deserunt sint incididunt.',
          buttonText: 'Handbook Link',
        },
        {
          name: 'test',
          semester: 'february',
          location: 'test',
          points: 'points 2',
          discipline: 'discipline 2',
          audition: 'audition 2',
          abrod: 'abrod 2',
          overview:
            'Exercitation quis sunt fugiat aute adipisicing nulla pariatur ad et fugiat commodo mollit proident. Esse reprehenderit duis ea fugiat reprehenderit amet proident. Labore consequat dolore incididunt enim qui aute nulla ad magna occaecat ullamco. Ipsum consequat commodo ut ullamco sunt ea aliqua magna elit ea aliquip id quis ex. Voluptate voluptate mollit eu irure ipsum labore laborum sunt dolor dolore est. Nostrud tempor non duis excepteur nulla excepteur cupidatat excepteur et laborum tempor. Sit est sit exercitation deserunt sint incididunt.',
          buttonText: 'Handbook Link',
        },
        {
          name: 'aaa',
          semester: 'january',
          location: 'sssss',
          points: 'points 1',
          discipline: 'discipline 1',
          audition: 'audition 1',
          abrod: 'abrod 1',
          overview:
            'Exercitation quis sunt fugiat aute adipisicing nulla pariatur ad et fugiat commodo mollit proident. Esse reprehenderit duis ea fugiat reprehenderit amet proident. Labore consequat dolore incididunt enim qui aute nulla ad magna occaecat ullamco. Ipsum consequat commodo ut ullamco sunt ea aliqua magna elit ea aliquip id quis ex. Voluptate voluptate mollit eu irure ipsum labore laborum sunt dolor dolore est. Nostrud tempor non duis excepteur nulla excepteur cupidatat excepteur et laborum tempor. Sit est sit exercitation deserunt sint incididunt.',
          buttonText: 'Handbook Link',
        },
        {
          name: 'bbbb',
          semester: 'february',
          location: 'location 2',
          points: 'points 2',
          discipline: 'discipline 2',
          audition: 'xxxxx',
          abrod: 'abrod 2',
          overview:
            'Exercitation quis sunt fugiat aute adipisicing nulla pariatur ad et fugiat commodo mollit proident. Esse reprehenderit duis ea fugiat reprehenderit amet proident. Labore consequat dolore incididunt enim qui aute nulla ad magna occaecat ullamco. Ipsum consequat commodo ut ullamco sunt ea aliqua magna elit ea aliquip id quis ex. Voluptate voluptate mollit eu irure ipsum labore laborum sunt dolor dolore est. Nostrud tempor non duis excepteur nulla excepteur cupidatat excepteur et laborum tempor. Sit est sit exercitation deserunt sint incididunt.',
          buttonText: 'Handbook Link',
        },
      ],
    };
  },
};
</script>
