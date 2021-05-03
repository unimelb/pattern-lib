<template>
  <footer
    id="page-footer"
    class="page-footer-today">
    <div class="page-footer-today__top bg-inverted">
      <div class="max">
        <div class="page-footer-today__top-inner grid grid--today">
          <div class="page-footer-today__content cell cell--today cell--desk-2of3 cell--wide-1of2">
            <h2 class="screenreaders-only">
              Site footer
            </h2>
            <div class="page-footer-today__reconciliation">
              <p class="heading-sm shim-mb067">
                We acknowledge and pay respect to the Traditional Owners of the lands upon which our campuses are situated
              </p>
              <ButtonIcon
                href="https://unimelb.edu.au/reconciliation"
                class="btn--text">
                Read about our commitment to reconciliation
              </ButtonIcon>
            </div>
            <div class="grid grid--today">
              <div class="cell cell--today cell--tab-1of2">
                <ul class="list-reset page-footer-today__primary-links">
                  <li
                    v-for="(link, index) in primaryLinks"
                    :key="index">
                    <ButtonIcon
                      :href="link.href"
                      class="btn--text">
                      {{ link.text }}
                    </ButtonIcon>
                  </li>
                </ul>
              </div>
              <div class="cell cell--today cell--tab-1of2">
                <div class="page-footer-today__contact">
                  <p>Phone: 13 MELB (13 6352)</p>
                  <p>International: +61 3 9035 5511 </p>
                  <p>Address:<br>The University of Melbourne <br>Grattan Street, Parkville, <br>Victoria, 3010, Australia</p>
                  <p>
                    <ButtonIcon
                      href="https://about.unimelb.edu.au/priorities-and-partnerships/campus-development/campus-locations"
                      class="btn--text">
                      View all Campus locations
                    </ButtonIcon>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="page-footer-today__brand cell cell--today cell--desk-1of3 cell--wide-1of2">
            <Logo size="lg" />
            <ul class="page-footer-today__social list-reset">
              <li
                v-for="(link, i) in socialLinks"
                :key="i">
                <a
                  class="link-reset"
                  :href="link.href"
                  target="_blank">
                  <span class="screenreaders-only">
                    {{ link.text }}
                  </span>
                  <svg
                    class="page-footer-today__social-icon"
                    focusable="false"
                    role="presentation">
                    <use
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      :xlink:href="`#icon-${link.icon}`" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="page-footer-today__bottom bg-inverted-darker">
      <div class="page-footer-today__bottom-inner max">
        <ul class="list-reset page-footer-today__secondary-links">
          <li
            v-for="(link, index) in secondaryLinks"
            :key="index">
            <a
              :href="link.href"
              class="col-white">
              {{ link.text }}
            </a>
          </li>
        </ul>
        <dl class="page-footer-today__def-list">
          <dt>CRICOS number:</dt>
          <dd>00116K</dd>
          <dt>ABN:</dt>
          <dd>84 002 705 224</dd>
        </dl>
      </div>
    </div>
    <!-- START LIVEAGENT (DO NOT DELETE)-->
    <div
      id="liveagent"
      class="liveagent" />
    <!-- END LIVEAGENT (DO NOT DELETE)-->
  </footer>
</template>

<script>
import ButtonIcon from 'components/buttons/ButtonIcon.vue';
import Logo from 'components/logo/Logo.vue';

export default {
  components: {
    ButtonIcon,
    Logo,
  },
  data() {
    return {
      primaryLinks: [
        { text: 'About us', href: 'https://about.unimelb.edu.au/' },
        { text: 'Careers at Melbourne', href: 'https://about.unimelb.edu.au/careers' },
        { text: 'Alumni', href: 'https://www.unimelb.edu.au/alumni' },
        { text: 'Newsroom', href: 'https://about.unimelb.edu.au/newsroom' },
        { text: 'Contact', href: 'https://www.unimelb.edu.au/contact' },
      ],
      secondaryLinks: [
        { text: 'Emergency information', href: 'https://safety.unimelb.edu.au/emergency' },
        { text: 'Disclaimer and copyright', href: 'https://www.unimelb.edu.au/legal' },
        { text: 'Accessibility', href: 'https://www.unimelb.edu.au/accessibility' },
        { text: 'Privacy', href: 'https://about.unimelb.edu.au/strategy/governance/compliance-obligations/privacy' },
      ],
      socialLinks: [
        { text: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/unimelb' },
        { text: 'Twitter', icon: 'twitter', href: 'https://twitter.com/unimelb' },
        { text: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/school/university-of-melbourne' },
        { text: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/unimelb' },
      ],
    };
  },
};
</script>
