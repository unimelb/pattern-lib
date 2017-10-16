<template>
  <footer id="page-footer" class="page-footer">
    <div class="page-footer__top">
      <div class="page-footer__inner max">
        <div class="page-footer__header">
          <div class="page-footer__header__logo">
            <a class="link-img" href="https://www.unimelb.edu.au"><img alt="The University of Melbourne homepage" height="117" :src="logo" width="117"></a>
          </div>
          <div class="page-footer__header__search">
            <form action="https://search.unimelb.edu.au" class="page-footer-search" id="search">
              <div class="page-footer-search__field">
                <label><span class="page-footer-search__label">Search</span><a class="page-footer-search__submit" href="#"><icon class="page-footer-search__icon" name="search" /></a><input aria-label="Search the University" class="page-footer-search__input" name="q" placeholder="Type to search" type="search"></label>
              </div>
            </form>
          </div>
        </div>
        <div class="page-footer__main grid clearfix">
          <div class="page-footer__main__users cell cell--wide-1of4">
            <ul class="page-footer__users list-reset list-chevrons links-reset">
              <li><a href="https://students.unimelb.edu.au/">Current students</a></li>
              <li><a href="https://staff.unimelb.edu.au/">Staff</a></li>
              <li><a href="https://www.alumni.unimelb.edu.au/">Alumni</a></li>
            </ul>
          </div>
          <div class="page-footer__main__popular cell cell--wide-1of2">
            <ul class="page-footer__popular list-reset links-reset clearfix">
              <li><a class="link-icon" href="http://about.unimelb.edu.au/governance-and-leadership/faculties">
                <icon class="link-icon__icon svg" name="faculty" /><span class="link-icon__text">Faculties &amp; graduate schools</span>
              </a></li>
              <li><a class="link-icon" href="https://maps.unimelb.edu.au/">
                <icon class="link-icon__icon svg" name="location" /><span class="link-icon__text">Maps</span>
              </a></li>
              <li><a class="link-icon" href="http://library.unimelb.edu.au/">
                <icon class="link-icon__icon svg" name="library" /><span class="link-icon__text">Library</span>
              </a></li>
              <li><a class="link-icon" href="http://www.campaign.unimelb.edu.au/">
                <icon class="link-icon__icon svg" name="campaign" /><span class="link-icon__text">Support the campaign</span>
              </a></li>
              <li><a class="link-icon" href="http://www.unimelb.edu.au/contact/">
                <icon class="link-icon__icon svg" name="phone" /><span class="link-icon__text">Contact us</span>
              </a></li>
              <li><a class="link-icon" href="http://about.unimelb.edu.au/careers">
                <icon class="link-icon__icon svg" name="jobs" /><span class="link-icon__text">Jobs</span>
              </a></li>
            </ul>
          </div>
          <div class="page-footer__main__ack cell cell--wide-1of4">
            <p class="page-footer__ack">We acknowledge and pay respect to the Traditional Owners of the lands upon which our campuses are situated.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-footer__bottom">
      <div class="page-footer__inner max">
        <div class="grid clearfix">
          <div class="cell cell--wide-3of4">
            <div class="grid clearfix">
              <div class="cell cell--tab-1of2 cell--desk-1of3">
                <a class="page-footer__sitemap-heading" href="https://coursesearch.unimelb.edu.au/">Study at Melbourne</a>
                <ul class="page-footer__sitemap-pages page-footer__sitemap-pages--minor list-reset list-chevrons">
                  <li><a class="link-reset" href="https://coursesearch.unimelb.edu.au/undergrad">Undergraduate study</a></li>
                  <li><a class="link-reset" href="https://coursesearch.unimelb.edu.au/grad">Graduate study</a></li>
                  <li><a class="link-reset" href="https://futurestudents.unimelb.edu.au/">Future students</a></li>
                  <li><a class="link-reset" href="https://futurestudents.unimelb.edu.au/admissions">Admissions, fees &amp; applications</a></li>
                  <li><a class="link-reset" href="https://futurestudents.unimelb.edu.au/info/international">International students</a></li>
                  <li><a class="link-reset" href="http://www.unimelb.edu.au/campustour">Campus tour</a></li>
                </ul>
              </div>
              <div class="cell cell--tab-1of2 cell--desk-1of3">
                <a class="page-footer__sitemap-heading" href="http://about.unimelb.edu.au/">About us</a>
                <ul class="page-footer__sitemap-pages page-footer__sitemap-pages--minor list-reset list-chevrons">
                  <li><a class="link-reset" href="http://about.unimelb.edu.au/strategy-and-leadership">Strategy and leadership</a></li>
                  <li><a class="link-reset" href="http://about.unimelb.edu.au/tradition-of-excellence">Tradition of excellence</a></li>
                  <li><a class="link-reset" href="http://about.unimelb.edu.au/international-connections">International connections</a></li>
                  <li><a class="link-reset" href="http://about.unimelb.edu.au/campuses-and-facilities">Campuses and facilities</a></li>
                  <li><a class="link-reset" href="http://about.unimelb.edu.au/governance-and-leadership">Structure and governance</a></li>
                  <li><a class="link-reset" href="http://about.unimelb.edu.au/policy-and-publications">Policy and publications</a></li>
                  <li><a class="link-reset" href="http://about.unimelb.edu.au/careers">Careers at Melbourne</a></li>
                </ul>
              </div>
              <div class="cell cell--tab-1of2 cell--desk-1of3 cell--tab-clear">
                <a class="page-footer__sitemap-heading" href="http://www.unimelb.edu.au/contact">Contact &amp; Maps</a>
                <ul class="page-footer__sitemap-pages page-footer__sitemap-pages--minor list-reset list-chevrons">
                  <li><a class="link-reset" href="https://ask.unimelb.edu.au/app/ask">Contact us</a></li>
                  <li><a class="link-reset" href="https://ask.unimelb.edu.au/">Enquiries</a></li>
                  <li><a class="link-reset" href="http://newsroom.melbourne.edu/">Media</a></li>
                  <li><a class="link-reset" href="http://findanexpert.unimelb.edu.au/">Find an expert</a></li>
                  <li><a class="link-reset" href="https://maps.unimelb.edu.au/">Campus maps</a></li>
                  <li><a class="link-reset" href="http://about.unimelb.edu.au/campuses-and-facilities/transport-and-parking">Traffic, parking &amp; bicycles</a></li>
                  <li><a class="link-reset" href="http://directory.unimelb.edu.au/">Find a staff member</a></li>
                </ul>
              </div>
              <div class="cell cell--tab-1of2 cell--desk-1of3 cell--desk-clear cell--wide-clear">
                <a class="page-footer__sitemap-heading" href="https://www.alumni.unimelb.edu.au/">Alumni &amp; friends</a>
                <ul class="page-footer__sitemap-pages page-footer__sitemap-pages--minor list-reset list-chevrons">
                  <li><a class="link-reset" href="https://www.alumni.unimelb.edu.au/alumni/alumni-benefits">Benefits &amp; services</a></li>
                  <li><a class="link-reset" href="https://www.alumni.unimelb.edu.au/give/">Give</a></li>
                  <li><a class="link-reset" href="https://www.alumni.unimelb.edu.au/volunteer">Volunteer</a></li>
                  <li><a class="link-reset" href="http://mag.alumni.unimelb.edu.au/?sl=1">3010: alumni magazine</a></li>
                </ul>
              </div>
              <div class="cell cell--tab-1of2 cell--desk-1of3 cell--tab-clear">
                <a class="page-footer__sitemap-heading" href="http://research.unimelb.edu.au/">Research</a>
                <ul class="page-footer__sitemap-pages page-footer__sitemap-pages--minor list-reset list-chevrons">
                  <li><a class="link-reset" href="http://research.unimelb.edu.au/melbourne-research-institutes">Research institutes</a></li>
                  <li><a class="link-reset" href="http://findanexpert.unimelb.edu.au/">Find an expert or supervisor</a></li>
                  <li><a class="link-reset" href="http://gradresearch.unimelb.edu.au/">Graduate researchers</a></li>
                  <li><a class="link-reset" href="https://pursuit.unimelb.edu.au/">Pursuit: our research showcase</a></li>
                </ul>
              </div>
              <div class="cell cell--tab-1of2 cell--desk-1of3">
                <a class="page-footer__sitemap-heading" href="http://engagement.unimelb.edu.au/">Engagement</a>
                <ul class="page-footer__sitemap-pages page-footer__sitemap-pages--minor list-reset list-chevrons">
                  <li><a class="link-reset" href="https://events.unimelb.edu.au/">Events</a></li>
                  <li><a class="link-reset" href="http://businessconnect.unimelb.edu.au/">Business &amp; Industry</a></li>
                  <li><a class="link-reset" href="http://www.sport.unimelb.edu.au/fitnesscentres">Sports facilities</a></li>
                  <li><a class="link-reset" href="https://shop.unimelb.edu.au/">Shop</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="cell cell--wide-1of4">
            <p class="screenreaders-only">Follow us on:</p>
            <ul class="page-footer__social list-reset links-reset">
              <li><a class="page-footer__social__link" href="https://www.facebook.com/unimelb"><icon aria-label="Facebook" class="page-footer__social__icon svg" name="facebook" /></a></li>
              <li><a class="page-footer__social__link" href="https://www.twitter.com/unimelb"><icon aria-label="Twitter" class="page-footer__social__icon svg" name="twitter" /></a></li>
              <li><a class="page-footer__social__link" href="https://www.linkedin.com/company/university-of-melbourne"><icon aria-label="LinkedIn" class="page-footer__social__icon svg" name="linkedin" /></a></li>
            </ul>
            <dl class="page-footer__contact clearfix">
              <dt>Phone:</dt>
              <dd>13 MELB <small>(<a href="tel:136352">13 6352</a>)</small></dd>
              <dt>International:</dt>
              <dd><a href="tel:+61390355511">+61 3 9035 5511</a></dd>
              <dt>ABN:</dt>
              <dd>84 002 705 224</dd>
              <dt>CRICOS Provider Code:</dt>
              <dd>00116K <small>(<a href="http://services.unimelb.edu.au/international/visas">visa information</a>)</small></dd>
            </dl>
          </div>
        </div>
        <div class="page-footer__legal links-reset">
          <a href="http://safety.unimelb.edu.au/emergency">Emergency Information</a>
          <span class="page-footer__legal__sep">|</span>
          <a href="http://www.unimelb.edu.au/governance/disclaimer">Disclaimer &amp; Copyright</a>
          <span class="page-footer__legal__sep">|</span>
          <a href="http://www.unimelb.edu.au/accessibility">Accessibility</a>
          <span class="page-footer__legal__sep">|</span>
          <a href="http://www.unimelb.edu.au/governance/compliance/privacy">Privacy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { logo } from 'shared';

export default {
  data: () => ({ logo }),
};
</script>
