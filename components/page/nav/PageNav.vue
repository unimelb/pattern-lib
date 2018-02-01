<template>
  <div class="header-tools__menu">
    <a class="link-icon--vertical link-reset" role="button" href="#sitemap" @click.prevent="activateMenu">
      <svg class="link-icon__icon svg" role="presentation" focusable="false" viewBox="10 10 26 28">
        <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z" />
      </svg>
      <span class="link-icon__text">Menu</span>
    </a>
    <div ref="sitemap" id="sitemap" class="sitenav sitenav__panel" role="navigation">
      <button class="sitenav__back-btn button-ui" type="button" @click.prevent="dismissMenu">Close</button>
      <h2 ref="navtitle" v-html="title"></h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Blanket from '../search/blanket';

export default {
  name: 'page-nav',
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
    this.initInternalLinks();
    this.initNestedPanels();

    this.$refs.sitemap.setAttribute('aria-hidden', true);
  },
  methods: {
    activateMenu() {
      this.blanket.show({ onClick: this.dismissMenu.bind(this) });
      this.$refs.sitemap.classList.add('active');
      this.$refs.sitemap.removeAttribute('aria-hidden');
    },

    dismissMenu() {
      this.blanket.hide();
      this.$refs.sitemap.classList.remove('active');
      this.$refs.sitemap.setAttribute('aria-hidden', true);
    },

    initSiteNav() {
      // 1. Retrieve root list (create it if it doesn't exist)
      this.rootList = this.$refs.sitemap.querySelector('ul'); // first `ul`
      if (!this.rootList) {
        this.rootList = document.createElement('ul');
        this.$refs.sitemap.appendChild(this.rootList);
      }

      this.rootList.classList.add('sitenav__list');

      // 2. Inject home link as first item
      this.$refs.navtitle.parentNode.removeChild(this.$refs.navtitle);

      const homeItem = document.createElement('li');
      homeItem.className = 'home';
      homeItem.innerHTML = `<a href="${this.root}">${(this.$refs.navtitle.textContent)}</a>`;
      this.rootList.insertBefore(homeItem, this.rootList.firstChild);

      // 3. Move site nav to root container
      document.body.appendChild(this.$refs.sitemap);
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
      if (!list) return; // no nested list found

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
      trigger.addEventListener('click', this.openNestedPanel.bind(this, panel, true));

      // Inject button to close nested panel
      const backBtn = document.createElement('button');
      backBtn.className = 'sitenav__back-btn button-ui';
      backBtn.textContent = 'Back';
      backBtn.setAttribute('type', 'button');
      backBtn.addEventListener('click', this.closeNestedPanel.bind(this, panel, false));
      panel.insertBefore(backBtn, list);

      // Inject link to parent in child
      const insertParent = document.createElement('li');
      const insertParentLink = document.createElement('a');
      insertParentLink.classList.add('sitenav__nested-parent');
      insertParentLink.textContent = trigger.textContent;
      insertParentLink.setAttribute('href', trigger.getAttribute('href'));
      insertParent.appendChild(insertParentLink);
      panel.insertBefore(insertParent, list);
    },

    openNestedPanel(panel, open, evt) {
      evt.preventDefault();

      // Retrieve parent panel (i.e. the panel that was last opened)
      const parent = this.state.open[this.state.open.length - 1];

      // Hide parent sidebar (and scroll back to top to work around nested absolute positioning)
      parent.classList.add('sitenav__panel--nested-open');
      parent.scrollTop = 0;

      // Open panel and push to state
      panel.classList.add('sitenav__panel--open');
      this.state.open.push(panel);
    },

    closeNestedPanel(panel, open, evt) {
      evt.preventDefault();

      // Close panel and remove from state
      panel.classList.remove('sitenav__panel--open');
      this.state.open.pop();

      // Scroll to top to avoid confusion when re-opening the panel
      panel.scrollTop = 0;

      // Show parent sidebar (i.e. vertical overflow)
      const parent = this.state.open[this.state.open.length - 1];
      parent.classList.remove('sitenav__panel--nested-open');
    },
  },
};
</script>
