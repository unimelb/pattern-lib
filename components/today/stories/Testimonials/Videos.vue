<template>
  <TestimonialsVideos
    :testimonials="[{
      name: 'Nigel Huang',
      title: 'What is it like studying online compared to on campus?',
      video: {
        url: 'https://www.youtube.com/embed/MH5pJ4jokpI',
        duration: 28,
        preview: 'https://study.unimelb.edu.au/__data/assets/file/0022/265405/Byrd_Video.mp4',
      },
      imgSrc: 'https://study.unimelb.edu.au/__data/assets/image/0021/265404/Byrd_Advice.jpg',
    },{
      name: 'Nigel Huang',
      title: 'What is it like studying online compared to on campus?',
      video: {
        url: 'https://www.youtube.com/embed/MH5pJ4jokpI',
        duration: 28,
        preview: 'https://study.unimelb.edu.au/__data/assets/file/0022/265405/Byrd_Video.mp4',
      },
      imgSrc: 'https://study.unimelb.edu.au/__data/assets/image/0021/265404/Byrd_Advice.jpg',
    }]" />
</template>

<script>
import MaxWidthDecorator from 'storybook/decorators/MaxWidthDecorator.vue';
import TestimonialsVideos from 'components/testimonials/TestimonialsVideos.vue';

export default {
  components: { TestimonialsVideos },
  readme: { source: true, html: true },
  decorator: MaxWidthDecorator,
};
</script>
