<template>
  <div class="page-footer__top">
    <div class="page-footer__inner max">
      <div class="page-footer__header">
        <div class="page-footer__header-logo">
          <Logo
            size="lg"
            no-padding />
        </div>
        <div class="page-footer__header-search">
          <form
            id="search"
            aria-hidden="true"
            action="https://search.unimelb.edu.au"
            class="page-footer-search">
            <div class="page-footer-search__field">
              <label
                class="page-footer-search__label"
                for="f_s_q">University Search</label>
              <input
                id="f_s_q"
                class="page-footer-search__input"
                name="q"
                placeholder="Type to search"
                type="search">
              <button
                type="submit"
                class="page-footer-search__submit"
                aria-label="Submit"
                onclick="submit()"
                href="#">
                <SvgIcon
                  class="page-footer-search__icon"
                  name="search" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="page-footer__main grid">
        <div class="page-footer__main__users cell cell--wide-1of4">
          <ul class="page-footer__users list-reset list-chevrons links-reset">
            <li>
              <a href="https://students.unimelb.edu.au/">Current students</a>
            </li>
            <li>
              <a href="https://staff.unimelb.edu.au/">Staff</a>
            </li>
            <li>
              <a href="https://www.alumni.unimelb.edu.au/">Alumni</a>
            </li>
          </ul>
        </div>
        <div class="page-footer__main__popular cell cell--wide-1of2">
          <ul class="page-footer__popular list-reset links-reset">
            <li>
              <a
                class="link-icon"
                href="https://about.unimelb.edu.au/strategy/our-structure/faculties-and-graduate-schools">
                <SvgIcon
                  class="link-icon__icon svg"
                  name="faculty" />
                <span class="link-icon__text">Faculties &amp; graduate schools</span>
              </a>
            </li>
            <li>
              <a
                class="link-icon"
                href="https://maps.unimelb.edu.au/">
                <SvgIcon
                  class="link-icon__icon svg"
                  name="location" />
                <span class="link-icon__text">Maps</span>
              </a>
            </li>
            <li>
              <a
                class="link-icon"
                href="https://library.unimelb.edu.au/">
                <SvgIcon
                  class="link-icon__icon svg"
                  name="library" />
                <span class="link-icon__text">Library</span>
              </a>
            </li>
            <li>
              <a
                class="link-icon"
                href="https://www.alumni.unimelb.edu.au/give">
                <SvgIcon
                  class="link-icon__icon svg"
                  name="campaign" />
                <span class="link-icon__text">Support the campaign</span>
              </a>
            </li>
            <li>
              <a
                class="link-icon"
                href="https://www.unimelb.edu.au/contact/">
                <SvgIcon
                  class="link-icon__icon svg"
                  name="phone" />
                <span class="link-icon__text">Contact us</span>
              </a>
            </li>
            <li>
              <a
                class="link-icon"
                href="https://about.unimelb.edu.au/careers">
                <SvgIcon
                  class="link-icon__icon svg"
                  name="jobs" />
                <span class="link-icon__text">Jobs</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="page-footer__main__contacts cell cell--wide-1of4">
          <p class="screenreaders-only">
            Follow us on:
          </p>
          <SocialListGeneric
            :icon-size="22"
            class="page-footer__social"
            facebook-link="https://www.facebook.com/unimelb"
            twitter-link="https://twitter.com/unimelb"
            linkedin-link="https://www.linkedin.com/school/university-of-melbourne/" />
          <dl class="page-footer__contact list-def list-def--wrap">
            <dt>Phone:</dt>
            <dd>
              13 MELB
              <small>
                (
                <a href="tel:136352">13 6352</a>)
              </small>
            </dd>
            <dt>International:</dt>
            <dd>
              <a href="tel:+61390355511">+61 3 9035 5511</a>
            </dd>
            <dt>ABN:</dt>
            <dd>84 002 705 224</dd>
            <dt>CRICOS Provider Code:</dt>
            <dd>
              00116K
              <small>
                (
                <a href="https://services.unimelb.edu.au/international/visas">visa information</a>)
              </small>
            </dd>
          </dl>
        </div>
      </div>
      <div class="page-footer__legal links-reset">
        <a href="https://safety.unimelb.edu.au/emergency">Emergency information</a>
        <span class="page-footer__legal__sep">|</span>
        <a href="https://unimelb.edu.au/disclaimer">Disclaimer and copyright</a>
        <span class="page-footer__legal__sep">|</span>
        <a href="https://www.unimelb.edu.au/accessibility">Accessibility</a>
        <span class="page-footer__legal__sep">|</span>
        <a href="https://unimelb.edu.au/privacy">Privacy</a>
      </div>
    </div>
  </div>
</template>

<script>
import SocialListGeneric from '../social-list/SocialListGeneric.vue';
import SvgIcon from '../icons/SvgIcon.vue';
import Logo from '../logo/Logo.vue';

export default {
  components: {
    SocialListGeneric,
    SvgIcon,
    Logo,
  },
};
</script>
