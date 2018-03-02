<template>
  <PageFooter />
</template>

<script>
import PageFooter from '../PageFooter.vue';
import { codeBlock } from '.storybook/utils';

const out = codeBlock(`<page-footer></page-footer>

or

<footer id="page-footer" class="page-footer">
  <div class="page-footer__top">
    <div class="page-footer__inner max">
      <div class="page-footer__header">
        <div class="page-footer__header__logo">
          <a href="https://www.unimelb.edu.au" class="link-img">
            <img alt="The University of Melbourne homepage" height="117" src="https://d2glwx35mhbfwf.cloudfront.net/v1.5.0/logo.svg" width="117">
          </a>
        </div>
        <div class="page-footer__header__search">
          <form action="https://search.unimelb.edu.au" id="search" class="page-footer-search">
            <div class="page-footer-search__field">
              <label for="f_s_q" class="page-footer-search__label">Search</label>
              <input id="f_s_q" aria-label="Search the University" name="q" placeholder="Type to search" type="search" class="page-footer-search__input">
              <button type="submit" aria-label="Submit" onclick="submit()" role="button" href="#" class="page-footer-search__submit">
                <svg focusable="false" role="presentation" class="page-footer-search__icon">
                  <use xlink:href="#icon-search"></use>
                </svg>
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
              <a href="http://about.unimelb.edu.au/governance-and-leadership/faculties" class="link-icon">
                <svg focusable="false" role="presentation" class="link-icon__icon svg">
                  <use xlink:href="#icon-faculty"></use>
                </svg><span class="link-icon__text">Faculties &amp; graduate schools</span></a>
            </li>
            <li>
              <a href="https://maps.unimelb.edu.au/" class="link-icon">
                <svg focusable="false" role="presentation" class="link-icon__icon svg">
                  <use xlink:href="#icon-location"></use>
                </svg><span class="link-icon__text">Maps</span></a>
            </li>
            <li>
              <a href="http://library.unimelb.edu.au/" class="link-icon">
                <svg focusable="false" role="presentation" class="link-icon__icon svg">
                  <use xlink:href="#icon-library"></use>
                </svg><span class="link-icon__text">Library</span></a>
            </li>
            <li>
              <a href="http://www.campaign.unimelb.edu.au/" class="link-icon">
                <svg focusable="false" role="presentation" class="link-icon__icon svg">
                  <use xlink:href="#icon-campaign"></use>
                </svg><span class="link-icon__text">Support the campaign</span></a>
            </li>
            <li>
              <a href="http://www.unimelb.edu.au/contact/" class="link-icon">
                <svg focusable="false" role="presentation" class="link-icon__icon svg">
                  <use xlink:href="#icon-phone"></use>
                </svg><span class="link-icon__text">Contact us</span></a>
            </li>
            <li>
              <a href="http://about.unimelb.edu.au/careers" class="link-icon">
                <svg focusable="false" role="presentation" class="link-icon__icon svg">
                  <use xlink:href="#icon-jobs"></use>
                </svg><span class="link-icon__text">Jobs</span></a>
            </li>
          </ul>
        </div>
        <div class="page-footer__main__contacts cell cell--wide-1of4">
          <p class="screenreaders-only">Follow us on:</p>
          <ul class="social-list list-reset links-reset bg-saw-tooth page-footer__social">
            <li class="">
              <a href="https://www.facebook.com/unimelb" class="social-list__link">
                <svg width="22" height="22" focusable="false" role="img" aria-label="Facebook" class="social-list__icon">
                  <use xlink:href="#icon-facebook"></use>
                </svg>
              </a>
            </li>
            <li class="">
              <a href="https://www.twitter.com/unimelb" class="social-list__link">
                <svg width="22" height="22" focusable="false" role="img" aria-label="Twitter" class="social-list__icon">
                  <use xlink:href="#icon-twitter"></use>
                </svg>
              </a>
            </li>
            <li class="">
              <a href="https://www.linkedin.com/company/university-of-melbourne" class="social-list__link">
                <svg width="22" height="22" focusable="false" role="img" aria-label="LinkedIn" class="social-list__icon">
                  <use xlink:href="#icon-linkedin"></use>
                </svg>
              </a>
            </li>
          </ul>
          <dl class="page-footer__contact list-def list-def--wrap">
            <dt>Phone:</dt>
            <dd>13 MELB
              <small>(
                <a href="tel:136352">13 6352</a>)</small>
            </dd>
            <dt>International:</dt>
            <dd>
              <a href="tel:+61390355511">+61 3 9035 5511</a>
            </dd>
            <dt>ABN:</dt>
            <dd>84 002 705 224</dd>
            <dt>CRICOS Provider Code:</dt>
            <dd>00116K
              <small>(
                <a href="http://services.unimelb.edu.au/international/visas">visa information</a>)</small>
            </dd>
          </dl>
        </div>
      </div>
      <div class="page-footer__legal links-reset">
        <a href="http://safety.unimelb.edu.au/emergency">Emergency Information</a> <span class="page-footer__legal__sep">|</span>
        <a href="http://www.unimelb.edu.au/governance/disclaimer">Disclaimer &amp; Copyright</a> <span class="page-footer__legal__sep">|</span>
        <a href="http://www.unimelb.edu.au/accessibility">Accessibility</a> <span class="page-footer__legal__sep">|</span>
        <a href="http://www.unimelb.edu.au/governance/compliance/privacy">Privacy</a>
      </div>
    </div>
  </div>
  <div class="page-footer__bottom">
    <div class="page-footer__inner max">
      <div class="grid">
        <div class="cell cell--wide-3of4">
          <SectionToggle class="section-toggle section-toggle--mobile">
            <SectionTogglePanel title="Site Map" close="Close Site Map">
              <div class="grid">
                <div class="cell cell--tab-1of2 cell--desk-1of3">
                  <a href="https://coursesearch.unimelb.edu.au/" class="page-footer__sitemap-heading">Study at Melbourne</a>
                  <ul class="page-footer__sitemap-pages page-footer__sitemap-pages--minor list-reset list-chevrons">
                    <li>
                      <a href="https://coursesearch.unimelb.edu.au/undergrad" class="link-reset">Undergraduate study</a>
                    </li>
                    <li>
                      <a href="https://coursesearch.unimelb.edu.au/grad" class="link-reset">Graduate study</a>
                    </li>
                    <li>
                      <a href="https://futurestudents.unimelb.edu.au/" class="link-reset">Future students</a>
                    </li>
                    <li>
                      <a href="https://futurestudents.unimelb.edu.au/admissions" class="link-reset">Admissions, fees &amp; applications</a>
                    </li>
                    <li>
                      <a href="https://futurestudents.unimelb.edu.au/info/international" class="link-reset">International students</a>
                    </li>
                    <li>
                      <a href="http://www.unimelb.edu.au/campustour" class="link-reset">Campus tour</a>
                    </li>
                  </ul>
                </div>
                <div class="cell cell--tab-1of2 cell--desk-1of3">
                  <a href="http://about.unimelb.edu.au/" class="page-footer__sitemap-heading">About us</a>
                  <ul class="page-footer__sitemap-pages page-footer__sitemap-pages--minor list-reset list-chevrons">
                    <li>
                      <a href="http://about.unimelb.edu.au/strategy-and-leadership" class="link-reset">Strategy and leadership</a>
                    </li>
                    <li>
                      <a href="http://about.unimelb.edu.au/tradition-of-excellence" class="link-reset">Tradition of excellence</a>
                    </li>
                    <li>
                      <a href="http://about.unimelb.edu.au/international-connections" class="link-reset">International connections</a>
                    </li>
                    <li>
                      <a href="http://about.unimelb.edu.au/campuses-and-facilities" class="link-reset">Campuses and facilities</a>
                    </li>
                    <li>
                      <a href="http://about.unimelb.edu.au/governance-and-leadership" class="link-reset">Structure and governance</a>
                    </li>
                    <li>
                      <a href="http://about.unimelb.edu.au/policy-and-publications" class="link-reset">Policy and publications</a>
                    </li>
                    <li>
                      <a href="http://about.unimelb.edu.au/careers" class="link-reset">Careers at Melbourne</a>
                    </li>
                  </ul>
                </div>
                <div class="cell cell--tab-1of2 cell--desk-1of3 cell--tab-clear">
                  <a href="http://www.unimelb.edu.au/contact" class="page-footer__sitemap-heading">Contact &amp; Maps</a>
                  <ul class="page-footer__sitemap-pages page-footer__sitemap-pages--minor list-reset list-chevrons">
                    <li>
                      <a href="https://ask.unimelb.edu.au/app/ask" class="link-reset">Enquiries</a>
                    </li>
                    <li>
                      <a href="http://newsroom.melbourne.edu/" class="link-reset">Media</a>
                    </li>
                    <li>
                      <a href="http://findanexpert.unimelb.edu.au/" class="link-reset">Find an expert</a>
                    </li>
                    <li>
                      <a href="https://maps.unimelb.edu.au/" class="link-reset">Campus maps</a>
                    </li>
                    <li>
                      <a href="http://about.unimelb.edu.au/campuses-and-facilities/transport-and-parking" class="link-reset">Traffic, parking &amp; bicycles</a>
                    </li>
                    <li>
                      <a href="http://directory.unimelb.edu.au/" class="link-reset">Find a staff member</a>
                    </li>
                  </ul>
                </div>
                <div class="cell cell--tab-1of2 cell--desk-1of3 cell--desk-clear cell--wide-clear">
                  <a href="https://www.alumni.unimelb.edu.au/" class="page-footer__sitemap-heading">Alumni &amp; friends</a>
                  <ul class="page-footer__sitemap-pages page-footer__sitemap-pages--minor list-reset list-chevrons">
                    <li>
                      <a href="https://www.alumni.unimelb.edu.au/alumni/alumni-benefits" class="link-reset">Benefits &amp; services</a>
                    </li>
                    <li>
                      <a href="https://www.alumni.unimelb.edu.au/give/" class="link-reset">Give</a>
                    </li>
                    <li>
                      <a href="https://www.alumni.unimelb.edu.au/volunteer" class="link-reset">Volunteer</a>
                    </li>
                    <li>
                      <a href="http://mag.alumni.unimelb.edu.au/?sl=1" class="link-reset">3010: alumni magazine</a>
                    </li>
                  </ul>
                </div>
                <div class="cell cell--tab-1of2 cell--desk-1of3 cell--tab-clear">
                  <a href="http://research.unimelb.edu.au/" class="page-footer__sitemap-heading">Research</a>
                  <ul class="page-footer__sitemap-pages page-footer__sitemap-pages--minor list-reset list-chevrons">
                    <li>
                      <a href="http://research.unimelb.edu.au/melbourne-research-institutes" class="link-reset">Research institutes</a>
                    </li>
                    <li>
                      <a href="http://findanexpert.unimelb.edu.au/" class="link-reset">Find an expert or supervisor</a>
                    </li>
                    <li>
                      <a href="http://gradresearch.unimelb.edu.au/" class="link-reset">Graduate researchers</a>
                    </li>
                    <li>
                      <a href="https://pursuit.unimelb.edu.au/" class="link-reset">Pursuit: our research showcase</a>
                    </li>
                  </ul>
                </div>
                <div class="cell cell--tab-1of2 cell--desk-1of3">
                  <a href="http://engagement.unimelb.edu.au/" class="page-footer__sitemap-heading">Engagement</a>
                  <ul class="page-footer__sitemap-pages page-footer__sitemap-pages--minor list-reset list-chevrons">
                    <li>
                      <a href="https://events.unimelb.edu.au/" class="link-reset">Events</a>
                    </li>
                    <li>
                      <a href="http://businessconnect.unimelb.edu.au/" class="link-reset">Business &amp; Industry</a>
                    </li>
                    <li>
                      <a href="http://www.sport.unimelb.edu.au/fitnesscentres" class="link-reset">Sports facilities</a>
                    </li>
                    <li>
                      <a href="https://shop.unimelb.edu.au/" class="link-reset">Shop</a>
                    </li>
                  </ul>
                </div>
              </div>
            </SectionTogglePanel>
          </SectionToggle>
        </div>
        <div class="page-footer__main__ack cell cell--wide-1of4">
          <p class="page-footer__ack">We acknowledge and pay respect to the Traditional Owners of the lands upon which our campuses are situated.</p>
        </div>
      </div>
    </div>
  </div>
</footer>
`);

export default {
  components: { PageFooter },
  readme: { custom: out, source: false },
};
</script>
