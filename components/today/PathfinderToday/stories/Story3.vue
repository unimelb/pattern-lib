<template>
  <PathfinderToday
    :items="pathfinderLinks">
    <template
      #before>
      <div class="row shim-mb1">
        <div class="col-xxs-12 col-sm-6 shim-mb1">
          <form class="form form--inline">
            <label
              for="search-input"
              class="heading-card">Search careers, interests, courses or specialisations</label>
            <div class="form--inline__row form--inline__row--center">
              <input
                id="search-input"
                aria-label="Search careers, interests, courses or specialisations"
                class="form--inline__search"
                type="search"
                placeholder="Type to search courses">
              <button
                class="form--inline__button form--inline__button--alt"
                aria-label="Search">
                <SvgIcon
                  class="form--inline__svg"
                  name="search" />
                <span class="form--inline__button-label">Search</span>
              </button>
            </div>
          </form>
        </div>
        <div
          role="navigation"
          aria-label="Popular searches"
          class="col-xxs-12 col-sm-6">
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
import SvgIcon from 'components/icons/SvgIcon.vue';
import PathfinderToday from '../PathfinderToday.vue';
import PathfinderTodayMd from './PathfinderToday.md';

export default {
  components: { PathfinderToday, SvgIcon },
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
