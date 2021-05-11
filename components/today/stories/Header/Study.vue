<template>
  <PageHeaderStudy
    title="Start your life of learning"
    :img="{ src: studySubjectImage }"
    :bg-src="studyBgImage"
    :bg-color-src="studyBgColorImage">
    <p class="paragraph-sm shim-mt1 shim-mb0">
      Popular searches:
    </p>
    <ul class="list-inline paragraph-sm">
      <li>
        <a href="/find/?s=Science">Science</a>
      </li>
      <li>
        <a href="/find/?s=Business">Business</a>
      </li>
      <li>
        <a href="/find/?s=Bachelor%20of%20Design">Bachelor of Design</a>
      </li>
      <li>
        <a href="/find/?s=Criminology">Criminology</a>
      </li>
    </ul>
  </PageHeaderStudy>
</template>

<script>
import PageHeaderStudy from 'components/header/PageHeaderStudy.vue';

import studyBgColorImage from './static/study-bg-color.jpg';
import studySubjectImage from './static/study-bg-subject.png';
import studyBgImage from './static/study-bg.jpg';

export default {
  components: {
    PageHeaderStudy,
  },
  readme: { source: true, html: true },
  data() {
    return {
      studyBgColorImage,
      studySubjectImage,
      studyBgImage,
    };
  },
};
</script>
