<template>
  <PathfinderToday
    title-two-lines
    :items="pathfinderLinks">
    <template
      #before>
      <div class="grid grid--lg shim-mb1">
        <div class="cell cell--lg cell--tab-1of2 shim-mt0 shim-mb1">
          <InlineSearch
            id="couse-search"
            name="s"
            label="Search for a course"
            placeholder="Find a course"
            action="/find/"
            with-submit />
        </div>
        <div
          role="navigation"
          aria-label="Popular searches"
          class="cell cell--lg cell--tab-1of2 shim-mt0 shim-mb0">
          <p class="paragraph-sm shim-mb0">
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
      </div>
    </template>
  </PathfinderToday>
</template>

<script>
import InlineSearch from 'components/forms/InlineSearch.vue';
import PathfinderToday from '../PathfinderToday.vue';
import PathfinderTodayMd from './PathfinderToday.md';

export default {
  components: { PathfinderToday, InlineSearch },
  readme: { custom: PathfinderTodayMd, source: true, html: false },
  data() {
    return {
      pathfinderLinks: [
        {
          title: 'Undergraduate courses',
          description: 'Flexible first degrees that you can tailor to your career goals, or explore new possibilities.',
          href: '/landing-page/',
        },
        {
          title: 'Graduate courses',
          description: 'Study in small classes led by experts alongside others who share your interests and goals.',
          href: '/landing-page/',
        },
        {
          title: 'Graduate research',
          description: 'Access dedicated research centres, advanced  facilities, generous scholarships and more.',
          href: '/landing-page/',
        },
        {
          title: 'Short courses and microcredentials',
          description: 'Upskill, expand your knowledge and take the next step in your career with focused courses.',
          href: '/landing-page/',
        },
      ],
    };
  },
};
</script>
