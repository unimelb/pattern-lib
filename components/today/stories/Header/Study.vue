<template>
  <PageHeaderStudy
    title="Start your life of learning"
    :img="{ src: studySubjectImage, alt: 'Smiling student with a backpack in front of the Old Arts Clock-tower' }"
    :bg-src="studyBgImage"
    :bg-color-src="studyBgColorImage">
    <InlineSearch
      id="couse-search"
      name="s"
      label="Search for a course"
      placeholder="Find a course"
      action="/find/"
      with-submit
      dark />
    <div
      role="navigation"
      aria-label="Popular searches">
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
    </div>
  </PageHeaderStudy>
</template>

<script>
import InlineSearch from 'components/forms/InlineSearch.vue';
import PageHeaderStudy from 'components/header/PageHeaderStudy.vue';

import studyBgColorImage from './static/study-bg-color.jpg';
import studySubjectImage from './static/study-bg-subject.png';
import studyBgImage from './static/study-bg.jpg';

export default {
  components: {
    InlineSearch,
    PageHeaderStudy,
  },
  readme: {
    source: false,
    html: true,
    replace: {
      '<div class="page-header-study__bg progressive-image" style="max-width: 100%;"><span><canvas width="1" height="1" class="progressive-image-canvas"></canvas> <div class="progressive-image-wrapper"><img alt="" class="progressive-image-main" style="display: none;"> </div></span></div>': `<progressive-image class="page-header-alt__img-inner" no-ratio src="${studyBgImage}" alt=""></progressive-image>`,
      '<div class="page-header-study__img-bg progressive-image" style="max-width: 100%;"><span><canvas width="1" height="1" class="progressive-image-canvas"></canvas> <div class="progressive-image-wrapper"><img alt="" class="progressive-image-main" style="display: none;"> </div></span></div>': `<progressive-image class="page-header-study__img-bg" no-ratio src="${studyBgColorImage}" alt=""></progressive-image>`,
      '<div class="page-header-study__img-subject progressive-image" style="max-width: 100%;"><span><canvas width="1" height="1" class="progressive-image-canvas"></canvas> <div class="progressive-image-wrapper"><img alt="" class="progressive-image-main" style="display: none;"> </div></span></div>': `<progressive-image class="page-header-study__img-subject" no-ratio src="${studySubjectImage}" alt=""></progressive-image>`,
    },
  },
  data() {
    return {
      studyBgColorImage,
      studySubjectImage,
      studyBgImage,
    };
  },
};
</script>
