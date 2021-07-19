<template>
  <footer
    id="page-footer"
    class="page-footer-alt">
    <div class="page-footer-alt__top bg-inverted">
      <div class="max">
        <div class="page-footer-alt__top-inner grid grid--lg">
          <div class="page-footer-alt__content cell cell--lg cell--desk-2of3 cell--wide-1of2 shim-mb0 shim-mt0">
            <h2 class="screenreaders-only">
              Site footer
            </h2>
            <div class="page-footer-alt__reconciliation">
              <h3 class="heading-sm shim-mb067">
                We acknowledge and pay respect to the Traditional Owners of the lands upon which our campuses are situated
              </h3>
              <ButtonIcon
                href="https://about.unimelb.edu.au/reconciliation"
                class="btn--text">
                Read about our commitment to reconciliation
              </ButtonIcon>
            </div>
            <div class="grid grid--lg">
              <div class="cell cell--lg cell--tab-1of2 shim-mb0 shim-mt0">
                <ul class="list-reset page-footer-alt__primary-links">
                  <li
                    v-for="(link, index) in computedPrimaryLinks"
                    :key="index"
                    class="page-footer-alt__primary-links-item">
                    <ButtonIcon
                      :href="link.href"
                      class="btn--text">
                      {{ link.text }}
                    </ButtonIcon>
                  </li>
                </ul>
              </div>
              <div class="cell cell--lg cell--tab-1of2 shim-mb0 shim-mt0">
                <div class="page-footer-alt__contact">
                  <p class="shim-mb1">
                    Phone: 13 MELB (13 6352)<br>International: +61 3 9035 5511
                  </p>
                  <p class="shim-mb1">
                    Address:<br>The University of Melbourne <br>Grattan Street, Parkville, <br>Victoria, 3010, Australia
                  </p>
                  <ButtonIcon
                    href="https://about.unimelb.edu.au/priorities-and-partnerships/campus-development/campus-locations"
                    class="btn--text">
                    View all Campus locations
                  </ButtonIcon>
                </div>
              </div>
            </div>
          </div>
          <div class="page-footer-alt__brand cell cell--lg cell--desk-1of3 cell--wide-1of2 shim-mb0 shim-mt0">
            <div class="page-footer-alt__brand-items">
              <Logo size="lg" />
              <ul class="page-footer-alt__social list-reset">
                <li
                  v-for="(link, i) in socialLinks"
                  :key="i"
                  class="page-footer-alt__social-item">
                  <a
                    class="link-reset page-footer-alt__social-link"
                    :href="link.href"
                    target="_blank">
                    <span class="screenreaders-only">
                      {{ link.text }}
                    </span>
                    <svg
                      class="page-footer-alt__social-icon"
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
    </div>
    <div class="page-footer-alt__bottom bg-inverted-darker">
      <div class="page-footer-alt__bottom-inner max">
        <ul class="list-reset page-footer-alt__secondary-links">
          <li
            v-for="(link, index) in computedSecondaryLinks"
            :key="index"
            class="list-reset page-footer-alt__secondary-links-item">
            <a
              :href="link.href"
              class="page-footer-alt__secondary-links-link">
              {{ link.text }}
            </a>
          </li>
        </ul>
        <div class="page-footer-alt__def-list">
          <dl class="page-footer-alt__def-list-item">
            <dt>CRICOS number:</dt>
            <dd>00116K</dd>
          </dl>
          <dl class="page-footer-alt__def-list-item">
            <dt>ABN:</dt>
            <dd>84 002 705 224</dd>
          </dl>
        </div>
      </div>
    </div>
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
  props: {
    primaryLinks: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
    secondaryLinks: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      defaultPrimaryLinks: [
        { text: 'About us', href: 'https://about.unimelb.edu.au/' },
        { text: 'Careers at Melbourne', href: 'https://about.unimelb.edu.au/careers' },
        { text: 'Safety and respect', href: 'https://students.unimelb.edu.au/campus-life/policy-and-conduct/respect-at-the-university' },
        { text: 'Newsroom', href: 'https://about.unimelb.edu.au/newsroom' },
        { text: 'Contact', href: 'https://www.unimelb.edu.au/contact' },
      ],
      defaultSecondaryLinks: [
        { text: 'Emergency information', href: 'https://safety.unimelb.edu.au/emergency' },
        { text: 'Online terms and privacy', href: 'https://www.unimelb.edu.au/legal' },
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
  computed: {
    computedPrimaryLinks() {
      return this.primaryLinks.length ? this.primaryLinks : this.defaultPrimaryLinks;
    },
    computedSecondaryLinks() {
      return this.secondaryLinks.length ? this.secondaryLinks : this.defaultSecondaryLinks;
    },
  },
};
</script>
