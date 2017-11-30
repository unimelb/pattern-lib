<script>
export default {
  name: 'tab-group',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  beforeCreate() {
    const list = this.$slots.default;
    this.items = list.filter(item => item.tag === 'section');
  },
  mounted() {
    this.tabs = [].slice.call(this.$el.querySelectorAll('.tabs__tablist-item > a'));
    this.panels = [].slice.call(this.$el.querySelectorAll('.tabs__panel'));
  },
  methods: {
    getCurrent(target) {
      let curr = -1;
      this.tabs.forEach((tab, index) => {
        if (tab === target) curr = index;
      }, this);
      return curr;
    },
    handleClick(e) {
      e.preventDefault();
      this.showTab(this.getCurrent(e.target));
    },
    showTab(curr) {
      this.tabs.forEach((tab, index) => {
        tab.setAttribute('tabindex', index === curr ? 0 : -1);
      }, this);

      this.panels.forEach((panel, index) => {
        panel.setAttribute('aria-hidden', index !== curr);

        if (index === curr) {
          panel.setAttribute('tabindex', 0);
          panel.setAttribute('aria-selected', 'true');
          // panel.focus();
        }
      }, this);
    },
    handleKey(e) {
      console.log(e);

      const curr = this.getCurrent(e.target);

      const prev = curr - 1 < 0 ? this.tabs.length : curr - 1;
      const next = curr + 1 > this.tabs.length ? 0 : curr + 1;

      // don't catch key events when ⌘ or Alt modifier is present
      if (e.metaKey || e.altKey) return;

      // catch left/right and up/down arrow key events
      // if new next/prev tab available, show it by passing tab anchor to _showTab method
      switch (e.keyCode) {
        case 37:
        case 38:
          this.showTab(prev);
          e.preventDefault();
          break;
        case 39:
        case 40:
          this.showTab(next);
          e.preventDefault();
          break;
        default:
          break;
      }
    },
  },
  render() {
    return (
      <div class="tabs">
        <ul class="tabs__tablist" role="tablist">
          {this.items.map((item, index) => (
            <li class="tabs__tablist-item" role="presentation">
              <a onClick={this.handleClick} class="tabs__tab" id={`ui-${this._uid}-tab-${index + 1}`} href={`#ui-${this._uid}-tab-panel-${index + 1}`} role="tab" aria-controls={`ui-${this._uid}-tab-panel-${index + 1}`} tabindex={index === 0 ? 0 : -1}>
                { item.data.attrs.title }
              </a>
            </li>
          ))}
        </ul>
        {this.items.map((item, index) => (
          <section class="tabs__panel" role="tabpanel" id={`ui-${this._uid}-tab-panel-${index + 1}`} aria-hidden={index !== 0} aria-labelledby={`ui-${this._uid}-tab-${index + 1}`}>
            { item.children }
          </section>
        ))}
      </div>
    );
  },
};
</script>
