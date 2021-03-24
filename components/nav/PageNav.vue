<template>
  <div class="header-tools__menu">
    <a
      id="sitemapbutton"
      role="button"
      aria-haspopup="true"
      aria-controls="sitemapmenu"
      href="#sitemap"
      class="link-icon--vertical link-reset"
      @click.prevent="activateMenu">
      <svg
        class="link-icon__icon svg"
        focusable="false"
        viewBox="10 10 26 28">
        <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z" />
      </svg>
      <span class="link-icon__text">Menu</span>
    </a>
    <div
      id="sitemap"
      ref="sitemap"
      class="sitenav sitenav__panel"
      role="navigation">
      <button
        class="sitenav__back-btn button-ui"
        aria-label="Close"
        type="button"
        @click.prevent="dismissMenu">
        Close
      </button>
      <!-- eslint-disable vue/no-v-html -->
      <h2
        ref="navtitle"
        v-html="title" />
      <!-- eslint-enable vue/no-v-html -->
      <slot />
    </div>
  </div>
</template>

<script>
// page-nav-activate-menu
// page-nav-dismiss-menu
// page-nav-open-nested-panel
// page-nav-close-nested-panel

import Blanket from '../search/blanket';

export default {
  name: 'PageNav',
  props: {
    title: {
      type: String,
      default: 'Site Navigation',
    },
    root: {
      type: String,
      default: '/',
    },
  },
  mounted() {
    this.blanket = new Blanket();

    this.state = { open: [this.$refs.sitemap] };

    this.initSiteNav();
    this.initLinks();
    this.initInternalLinks();
    this.initNestedPanels();

    this.$refs.sitemap.setAttribute('aria-hidden', true);
  },
  methods: {
    activateMenu() {
      this.blanket.show({ onClick: this.dismissMenu.bind(this) });
      this.$refs.sitemap.classList.add('active');
      this.$refs.sitemap.removeAttribute('aria-hidden');
      this.rootList.querySelector('a').focus();
      this.$emit('page-nav-activate-menu');
    },

    dismissMenu() {
      this.blanket.hide();
      this.$refs.sitemap.classList.remove('active');
      this.$refs.sitemap.setAttribute('aria-hidden', true);
      this.$emit('page-nav-dismiss-menu');
    },

    initSiteNav() {
      // 1. Retrieve root list (create it if it doesn't exist)
      this.rootList = this.$refs.sitemap.querySelector('ul'); // first `ul`
      if (!this.rootList) {
        this.rootList = document.createElement('ul');
        this.$refs.sitemap.appendChild(this.rootList);
      }

      this.rootList.classList.add('sitenav__list');
      this.rootList.id = 'sitemapmenu';
      this.rootList.setAttribute('role', 'menu');
      this.rootList.setAttribute('aria-labelledby', 'sitemapbutton');

      // 2. Inject home link as first item
      this.$refs.navtitle.parentNode.removeChild(this.$refs.navtitle);

      const homeItem = document.createElement('li');
      homeItem.className = 'home';
      homeItem.setAttribute('role', 'none');
      homeItem.innerHTML = `<a href="${this.root}" role="menuitem">${(this.$refs.navtitle.textContent)}</a>`;
      this.rootList.insertBefore(homeItem, this.rootList.firstChild);

      // 3. Move site nav to root container
      // document.body.appendChild(this.$refs.sitemap);
    },

    // Set aria role
    initLinks() {
      const internalLinks = [].slice.call(this.$refs.sitemap.querySelectorAll('a[href]'));
      internalLinks.forEach((link) => {
        link.setAttribute('role', 'menuitem');
      }, this);
    },

    initInternalLinks() {
      const internalLinks = [].slice.call(this.$refs.sitemap.querySelectorAll('a[href^="#"]'));
      internalLinks.forEach((link) => {
        link.addEventListener('click', this.dismissMenu);
      }, this);
    },

    initNestedPanels() {
      const items = [].slice.call(this.rootList.querySelectorAll('li'));
      items.forEach(this.initNestedPanel.bind(this));
    },

    initNestedPanel(item) {
      // Look for nested panel and list
      let panel = item.querySelector('.inner');
      const list = item.querySelector('ul');
      // no nested list found
      if (!list) {
        return;
      }

      // If `inner` container is omitted, inject it (i.e. wrap nested list in panel)
      // Second condition is for when `inner` is omitted at current nesting level, but provided at deeper level
      if (!panel || list.parentElement !== panel) {
        panel = document.createElement('div');
        panel.className = 'inner';
        panel.appendChild(list);
        item.appendChild(panel);
      }

      // Add custom classes to `inner` wrapper and list
      panel.classList.add('sitenav__panel');
      panel.classList.add('sitenav__panel--nested'); // One call for each token: IE does not support multiple params on .add()
      list.classList.add('sitenav__list');

      // Look for the item's link and use it as the trigger for opening the nested panel
      const trigger = item.querySelector('a');
      trigger.classList.add('sitenav__nested-trigger');
      trigger.setAttribute('role', 'menuitem');
      trigger.addEventListener('click', this.openNestedPanel.bind(this, panel, true));

      // Inject button to close nested panel
      const backBtn = document.createElement('button');
      backBtn.className = 'sitenav__back-btn button-ui';
      backBtn.textContent = 'Back';
      backBtn.setAttribute('type', 'button');
      backBtn.setAttribute('aria-label', 'Back');
      backBtn.addEventListener('click', this.closeNestedPanel.bind(this, panel, false));
      list.before(backBtn);

      // Inject link to parent in child
      const insertParent = document.createElement('a');
      insertParent.classList.add('sitenav__nested-parent');
      insertParent.textContent = trigger.textContent;
      insertParent.setAttribute('href', trigger.getAttribute('href'));
      insertParent.setAttribute('role', 'menuitem');
      list.before(insertParent);
    },

    openNestedPanel(panel, open, evt) {
      evt.preventDefault();

      // Retrieve parent panel (i.e. the panel that was last opened)
      const parent = [...this.state.open].pop();

      // Hide parent sidebar (and scroll back to top to work around nested absolute positioning)
      parent.classList.add('sitenav__panel--nested-open');
      parent.scrollTop = 0;

      // Open panel and push to state
      panel.classList.add('sitenav__panel--open');
      this.state.open.push(panel);
      this.$emit('page-nav-open-nested-panel');
    },

    closeNestedPanel(panel, open, evt) {
      evt.preventDefault();

      // Close panel and remove from state
      panel.classList.remove('sitenav__panel--open');
      this.state.open.pop();

      // Scroll to top to avoid confusion when re-opening the panel
      panel.scrollTop = 0;

      // Show parent sidebar (i.e. vertical overflow)
      const parent = [...this.state.open].pop();
      parent.classList.remove('sitenav__panel--nested-open');
      this.$emit('page-nav-close-nested-panel');
    },
  },
};
</script>
