/**
 * Site navigation
 * @param  {Element} el
 * @param  {Object} props
 *         {Element} root - the root element of the page with class `uomcontent`
 *         {Function} closeSiteNav
 *         {Function} openGlobalNav
 */
export default class SiteNav {
  constructor(el, props) {
    this.el = el;
    this.props = props;

    this.state = { open: [this.el] }; // store nested panels that are currently open (include root)

    // Don't initialise site nav twice
    if (this.el.hasAttribute('data-bound')) return;
    this.el.setAttribute('data-bound', true);

    this.initSiteNav();
    this.initInternalLinks();

    // Loop through all list items (including nested items) to initialise nested panels
    const items = [].slice.call(this.props.rootList.querySelectorAll('li'));
    items.forEach(this.initNestedPanel.bind(this));
  }

  /**
  * Initialise site nav and move it to the root container of the page.
  */
  initSiteNav() {
    // Retrieve root list (create it if it doesn't exist)
    this.props.rootList = this.el.querySelector('ul'); // first `ul`
    if (!this.props.rootList) {
      this.props.rootList = document.createElement('ul');
      this.el.appendChild(this.props.rootList);
    }

    // Add custom classes to root element and list
    this.el.classList.add('sitenav', 'sitenav__panel');
    this.props.rootList.classList.add('sitenav__list');

    // Retrieve nav title and remove it from the DOM
    const title = this.el.querySelector('h2');
    title.parentNode.removeChild(title);

    // Inject item with link to homepage
    const absRootPath = this.el.getAttribute('data-absolute-root') || '/';
    const homeItem = document.createElement('li');
    homeItem.className = 'home';
    homeItem.innerHTML = `<a href="${absRootPath}">${(title.textContent)}</a>`;
    this.props.rootList.insertBefore(homeItem, this.props.rootList.firstChild);

    // Inject close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'sitenav__back-btn button-ui';
    closeBtn.textContent = 'Close';
    closeBtn.setAttribute('type', 'button');
    closeBtn.addEventListener('click', this.props.closeSiteNav);
    // Don't use `this.el.insertBefore()` in case the root list is wrapped in an extra container
    this.props.rootList.parentNode.insertBefore(closeBtn, this.props.rootList);

    // Move site nav to root container
    this.props.root.appendChild(this.el);
  }

  /**
  * Close site nav when an internal link is clicked.
  */
  initInternalLinks() {
    const internalLinks = [].slice.call(this.el.querySelectorAll('a[href^="#"]'));
    internalLinks.forEach((link) => {
      link.addEventListener('click', this.props.closeSiteNav);
    }, this);
  }

  /**
  * Initialise a nested panel (`<div class="inner"><ul>...</ul></div>`) inside a list item, if one exists.
  * For convenience, `inner` wrappers can omitted, in which case they are injected automatically.
  * @param {Element} item
  */
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
  }

  /**
  * Open a nested panel.
  * @param  {Element} panel
  * @param  {Boolean} open
  * @param  {Event} evt
  */
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
  }

  /**
  * Close a nested panel.
  * @param  {Element} panel
  * @param  {Boolean} open
  * @param  {Event} evt
  */
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
  }
}
