<template>
  <footer class="footer" id="footer">
    <div class="footer__top">
      <div class="footer__inner max">
        <div class="footer__header">
          <div class="footer__header__logo">
            <a class="logo" href="https://www.unimelb.edu.au"><img alt="The University of Melbourne homepage" class="logo__img" height="117" :src="logo" width="117"></a>
          </div>
          <div class="footer__header__search">
            <form action="https://search.unimelb.edu.au" class="footer-search" id="search">
              <div class="footer-search__field">
                <label><span class="footer-search__label">Search</span><a class="footer-search__submit link--disabled" href="#"><icon class="footer-search__icon" name="search" /></a><input aria-label="Search the University" class="footer-search__input" name="q" placeholder="Type to search" type="search"></label>
              </div>
            </form>
          </div>
        </div>
        <div class="footer__main grid clearfix">
          <div class="footer__main__users cell cell--wide-1of4">
            <ul class="footer__users list list--chevron-white">
              <li>
                <a class="link link--disabled" href="">Current students</a>
              </li>
              <li>
                <a class="link link--disabled" href="">Staff</a>
              </li>
              <li>
                <a class="link link--disabled" href="">Alumni</a>
              </li>
            </ul>
          </div>
          <div class="footer__main__popular cell cell--wide-1of2">
            <ul class="footer__popular list clearfix">
              <li>
                <a class="icon-link link" href="http://about.unimelb.edu.au/governance-and-leadership/faculties"><icon class="icon-link__icon svg" name="faculty" /><span class="icon-link__text">Faculties &amp; graduate schools</span></a>
              </li>
              <li>
                <a class="icon-link link" href="https://maps.unimelb.edu.au/"><icon class="icon-link__icon svg" name="location" /><span class="icon-link__text">Maps</span></a>
              </li>
              <li>
                <a class="icon-link link" href="http://library.unimelb.edu.au/"><icon class="icon-link__icon svg" name="library" /><span class="icon-link__text">Library</span></a>
              </li>
              <li>
                <a class="icon-link link" href="http://www.campaign.unimelb.edu.au/"><icon class="icon-link__icon svg" name="campaign" /><span class="icon-link__text">Support the campaign</span></a>
              </li>
              <li>
                <a class="icon-link link" href="http://www.unimelb.edu.au/contact/"><icon class="icon-link__icon svg" name="phone" /><span class="icon-link__text">Contact us</span></a>
              </li>
              <li>
                <a class="icon-link link" href="http://about.unimelb.edu.au/careers"><icon class="icon-link__icon svg" name="jobs" /><span class="icon-link__text">Jobs</span></a>
              </li>
            </ul>
          </div>
          <div class="footer__main__ack cell cell--wide-1of4">
            <p class="footer__ack">
              We acknowledge and pay respect to the Traditional Owners of the lands upon which our campuses are situated.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__inner max">
        <div class="grid clearfix">
          <div class="cell cell--wide-3of4">
            <div class="grid clearfix">
              <div class="cell cell--tab-1of2 cell--desk-1of3">
                <a class="footer__sitemap-heading" href="https://coursesearch.unimelb.edu.au/">Study at Melbourne</a>
                <ul class="footer__sitemap-pages list list--chevron-white">
                  <li>
                    <a class="link" href="https://coursesearch.unimelb.edu.au/undergrad">Undergraduate study</a>
                  </li>
                  <li>
                    <a class="link" href="https://coursesearch.unimelb.edu.au/grad">Graduate study</a>
                  </li>
                  <li>
                    <a class="link" href="https://futurestudents.unimelb.edu.au/">Future students</a>
                  </li>
                  <li>
                    <a class="link" href="https://futurestudents.unimelb.edu.au/admissions">Admissions, fees &amp; applications</a>
                  </li>
                  <li>
                    <a class="link" href="https://futurestudents.unimelb.edu.au/info/international">International students</a>
                  </li>
                  <li>
                    <a class="link" href="http://www.unimelb.edu.au/campustour">Campus tour</a>
                  </li>
                </ul>
              </div>
              <div class="cell cell--tab-1of2 cell--desk-1of3">
                <a class="footer__sitemap-heading" href="http://about.unimelb.edu.au/">About us</a>
                <ul class="footer__sitemap-pages list list--chevron-white">
                  <li>
                    <a class="link" href="http://about.unimelb.edu.au/strategy-and-leadership">Strategy and leadership</a>
                  </li>
                  <li>
                    <a class="link" href="http://about.unimelb.edu.au/tradition-of-excellence">Tradition of excellence</a>
                  </li>
                  <li>
                    <a class="link" href="http://about.unimelb.edu.au/international-connections">International connections</a>
                  </li>
                  <li>
                    <a class="link" href="http://about.unimelb.edu.au/campuses-and-facilities">Campuses and facilities</a>
                  </li>
                  <li>
                    <a class="link" href="http://about.unimelb.edu.au/governance-and-leadership">Structure and governance</a>
                  </li>
                  <li>
                    <a class="link" href="http://about.unimelb.edu.au/policy-and-publications">Policy and publications</a>
                  </li>
                  <li>
                    <a class="link" href="http://about.unimelb.edu.au/careers">Careers at Melbourne</a>
                  </li>
                </ul>
              </div>
              <div class="cell cell--tab-1of2 cell--desk-1of3 cell--tab-clear">
                <a class="footer__sitemap-heading" href="http://www.unimelb.edu.au/contact">Contact &amp; Maps</a>
                <ul class="footer__sitemap-pages list list--chevron-white">
                  <li>
                    <a class="link" href="https://ask.unimelb.edu.au/app/ask">Contact us</a>
                  </li>
                  <li>
                    <a class="link" href="https://ask.unimelb.edu.au/">Enquiries</a>
                  </li>
                  <li>
                    <a class="link" href="http://newsroom.melbourne.edu/">Media</a>
                  </li>
                  <li>
                    <a class="link" href="http://findanexpert.unimelb.edu.au/">Find an expert</a>
                  </li>
                  <li>
                    <a class="link" href="https://maps.unimelb.edu.au/">Campus maps</a>
                  </li>
                  <li>
                    <a class="link" href="http://about.unimelb.edu.au/campuses-and-facilities/transport-and-parking">Traffic, parking &amp; bicycles</a>
                  </li>
                  <li>
                    <a class="link" href="http://directory.unimelb.edu.au/">Find a staff member</a>
                  </li>
                </ul>
              </div>
              <div class="cell cell--tab-1of2 cell--desk-1of3 cell--desk-clear cell--wide-clear">
                <a class="footer__sitemap-heading" href="https://www.alumni.unimelb.edu.au/">Alumni &amp; friends</a>
                <ul class="footer__sitemap-pages list list--chevron-white">
                  <li>
                    <a class="link" href="https://www.alumni.unimelb.edu.au/alumni/alumni-benefits">Benefits &amp; services</a>
                  </li>
                  <li>
                    <a class="link" href="https://www.alumni.unimelb.edu.au/give/">Give</a>
                  </li>
                  <li>
                    <a class="link" href="https://www.alumni.unimelb.edu.au/volunteer">Volunteer</a>
                  </li>
                  <li>
                    <a class="link" href="http://mag.alumni.unimelb.edu.au/?sl=1">3010: alumni magazine</a>
                  </li>
                </ul>
              </div>
              <div class="cell cell--tab-1of2 cell--desk-1of3 cell--tab-clear">
                <a class="footer__sitemap-heading" href="http://research.unimelb.edu.au/">Research</a>
                <ul class="footer__sitemap-pages list list--chevron-white">
                  <li>
                    <a class="link" href="http://research.unimelb.edu.au/melbourne-research-institutes">Research institutes</a>
                  </li>
                  <li>
                    <a class="link" href="http://findanexpert.unimelb.edu.au/">Find an expert or supervisor</a>
                  </li>
                  <li>
                    <a class="link" href="http://gradresearch.unimelb.edu.au/">Graduate researchers</a>
                  </li>
                  <li>
                    <a class="link" href="https://pursuit.unimelb.edu.au/">Pursuit: our research showcase</a>
                  </li>
                </ul>
              </div>
              <div class="cell cell--tab-1of2 cell--desk-1of3">
                <a class="footer__sitemap-heading" href="http://engagement.unimelb.edu.au/">Engagement</a>
                <ul class="footer__sitemap-pages list list--chevron-white">
                  <li>
                    <a class="link" href="https://events.unimelb.edu.au/">Events</a>
                  </li>
                  <li>
                    <a class="link" href="http://businessconnect.unimelb.edu.au/">Business &amp; Industry</a>
                  </li>
                  <li>
                    <a class="link" href="http://www.sport.unimelb.edu.au/fitnesscentres">Sports facilities</a>
                  </li>
                  <li>
                    <a class="link" href="https://shop.unimelb.edu.au/">Shop</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="cell cell--wide-1of4">
            <p class="screenreaders-only">
              Follow us on:
            </p>
            <ul class="footer__social list">
              <li>
                <a class="footer__social__link" href="https://www.facebook.com/unimelb"><icon aria-label="Facebook" class="footer__social__icon svg" name="facebook" /></a>
              </li>
              <li>
                <a class="footer__social__link" href="https://www.twitter.com/unimelb"><icon aria-label="Twitter" class="footer__social__icon svg" name="twitter" /></a>
              </li>
              <li>
                <a class="footer__social__link" href="https://www.linkedin.com/company/university-of-melbourne"><icon aria-label="LinkedIn" class="footer__social__icon svg" name="linkedin" /></a>
              </li>
            </ul>
            <dl class="footer__contact clearfix">
              <dt>
                Phone:
              </dt>
              <dd>
                13 MELB <small>(<a href="tel:136352">13 6352</a>)</small>
              </dd>
              <dt>
                International:
              </dt>
              <dd>
                <a href="tel:+61390355511">+61 3 9035 5511</a>
              </dd>
              <dt>
                ABN:
              </dt>
              <dd>
                84 002 705 224
              </dd>
              <dt>
                CRICOS Provider Code:
              </dt>
              <dd>
                00116K <small>(<a href="http://services.unimelb.edu.au/international/visas">visa information</a>)</small>
              </dd>
            </dl>
          </div>
        </div>
        <div class="footer__legal">
          <a href="http://safety.unimelb.edu.au/emergency">Emergency Information</a> <span class="footer__legal__sep">|</span> <a href="http://www.unimelb.edu.au/governance/disclaimer">Disclaimer &amp; Copyright</a> <span class="footer__legal__sep">|</span> <a href="http://www.unimelb.edu.au/accessibility">Accessibility</a> <span class="footer__legal__sep">|</span> <a href="http://www.unimelb.edu.au/governance/compliance/privacy">Privacy</a> 
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import logoAsset from "../images/logo-unhoused.svg";

  export default {
    name: 'BoilerplateFooter',
    data: () => {
      return {
        logo: logoAsset
      }
    }
  }
</script>
