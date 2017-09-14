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
                <label><span class="footer-search__label">Search</span><a class="footer-search__submit link--disabled" href="#"><svg class="footer-search__icon" focusable="false" height="21" role="presentation" width="21"><use xlink:href="#icon-search"></use></svg></a><input aria-label="Search the University" class="footer-search__input" name="q" placeholder="Type to search" type="search"></label>
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
                <a class="icon-link link" href="http://about.unimelb.edu.au/governance-and-leadership/faculties"><svg class="icon-link__icon svg" focusable="false" height="21" role="presentation" viewBox="0 0 48 48" width="21"><path d="M24 14V6H4v36h40V14H24zM12 38H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm8 24h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm20 24H24v-4h4v-4h-4v-4h4v-4h-4v-4h16v20zm-4-16h-4v4h4v-4zm0 8h-4v4h4v-4z"></path></svg><span class="icon-link__text">Faculties &amp; graduate schools</span></a>
              </li>
              <li>
                <a class="icon-link link" href="https://maps.unimelb.edu.au/"><svg class="icon-link__icon svg" focusable="false" height="21" role="presentation" viewBox="0 0 48 48" width="21"><path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path></svg><span class="icon-link__text">Maps</span></a>
              </li>
              <li>
                <a class="icon-link link" href="http://library.unimelb.edu.au/"><svg class="icon-link__icon svg" focusable="false" height="21" role="presentation" viewBox="0 0 48 48" width="21"><path d="M36 4H12C9.79 4 8 5.79 8 8v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM12 8h10v16l-5-3-5 3V8z"></path></svg><span class="icon-link__text">Library</span></a>
              </li>
              <li>
                <a class="icon-link link" href="http://www.campaign.unimelb.edu.au/"><svg class="icon-link__icon svg" focusable="false" height="21" role="presentation" viewBox="0 0 48 48" width="21"><path d="M9 21v14h6V21H9zm12 0v14h6V21h-6zM5 45h38v-6H5v6zm28-24v14h6V21h-6zM24 3L5 13v4h38v-4L24 3z"></path></svg><span class="icon-link__text">Support the campaign</span></a>
              </li>
              <li>
                <a class="icon-link link" href="http://www.unimelb.edu.au/contact/"><svg class="icon-link__icon svg" focusable="false" height="21" role="presentation" viewBox="0 0 48 48" width="21"><path d="M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49C35.1 30.6 37.51 31 40 31c1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2C21.22 42 6 26.78 6 8c0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z"></path></svg><span class="icon-link__text">Contact us</span></a>
              </li>
              <li>
                <a class="icon-link link" href="http://about.unimelb.edu.au/careers"><svg class="icon-link__icon svg" focusable="false" height="21" role="presentation" viewBox="0 0 48 48" width="21"><path d="M38.4 14.2h-7.2v-3.6c0-1.998-1.602-3.6-3.6-3.6h-7.2c-1.998 0-3.6 1.602-3.6 3.6v3.6H9.6c-1.998 0-3.582 1.602-3.582 3.6L6 37.6c0 1.998 1.602 3.6 3.6 3.6h28.8c1.998 0 3.6-1.602 3.6-3.6V17.8c0-1.998-1.602-3.6-3.6-3.6zm-10.8 0h-7.2v-3.6h7.2v3.6z"></path></svg><span class="icon-link__text">Jobs</span></a>
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
                <a class="footer__social__link" href="https://www.facebook.com/unimelb"><svg aria-label="Facebook" class="footer__social__icon svg" focusable="false" height="21" role="img" viewBox="0 0 48 48" width="21"><path d="M41.792382 4H6.207618C4.98810765 4 4 4.98810764 4 6.207618v35.584764C4 43.0115926 4.98810764 44 6.207618 44h19.1575682V28.5099553H20.15248v-6.0368536h5.2127062V18.021147c0-5.1665455 3.1555599-7.9797973 7.7644308-7.9797973 2.207618 0 4.1051504.1644099 4.658029.2378473v5.3992971l-3.196475.0014987c-2.5066131 0-2.9918994 1.1910346-2.9918994 2.9388446v3.8542643h5.9779538l-.7784364 6.0368536h-5.1995174V44H41.792382C43.0115926 44 44 43.0115926 44 41.792382V6.207618C44 4.98810765 43.0115926 4 41.792382 4"></path></svg></a>
              </li>
              <li>
                <a class="footer__social__link" href="https://www.twitter.com/unimelb"><svg aria-label="Twitter" class="footer__social__icon svg" focusable="false" height="21" role="img" viewBox="0 0 48 48" width="21"><path d="M39.9 16.1v1.1c0 10.8-8.3 23.3-23.3 23.3-4.6 0-9-1.3-12.6-3.7.7.1 1.3.1 2 .1 3.8 0 7.4-1.3 10.2-3.5-3.6-.1-6.6-2.4-7.7-5.7.5.1 1 .1 1.5.1.7 0 1.5-.1 2.2-.3-3.8-.8-6.6-4.1-6.6-8v-.1c1.1.6 2.4 1 3.7 1-2.2-1.5-3.7-4-3.7-6.8 0-1.5.4-2.9 1.1-4.1 4 5 10.1 8.2 16.9 8.6-.1-.6-.2-1.2-.2-1.9 0-4.5 3.7-8.2 8.2-8.2 2.4 0 4.5 1 6 2.6 1.9-.4 3.6-1 5.2-2-.6 1.9-1.9 3.5-3.6 4.5 1.7-.2 3.2-.6 4.7-1.3-1 1.6-2.4 3.1-4 4.3z"></path></svg></a>
              </li>
              <li>
                <a class="footer__social__link" href="https://www.linkedin.com/company/university-of-melbourne"><svg aria-label="LinkedIn" class="footer__social__icon svg" focusable="false" height="21" role="img" viewBox="0 0 48 48" width="21"><path d="M44 36.5c0 4.1-3.4 7.5-7.5 7.5h-25C7.4 44 4 40.6 4 36.5v-25C4 7.4 7.4 4 11.5 4h25c4.1 0 7.5 3.4 7.5 7.5v25zM13.2 10.7c-2.1 0-3.4 1.4-3.4 3.1 0 1.7 1.3 3.1 3.3 3.1 2.1 0 3.4-1.4 3.4-3.1.1-1.7-1.2-3.1-3.3-3.1zm3 26.8V19.4h-6v18.1h6zm21.6 0V27.1c0-5.5-3-8.1-6.9-8.1-3.2 0-4.7 1.8-5.4 3h.1v-2.6h-6s.1 1.7 0 18.1h6V27.4c0-.5 0-1.1.2-1.5.4-1.1 1.4-2.2 3.1-2.2 2.2 0 3 1.6 3 4.1v9.7h5.9z"></path></svg></a>
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
  import localAsset from "../images/logo-unhoused.svg";

  export default {
    name: 'BoilerplateFooter',
    props: {
      logo: {
        type: String,
        default: (process.env.NODE_ENV === "development" ? localAsset : "cdnurl")
      }      
    }
  }
</script>
