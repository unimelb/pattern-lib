<script>
import Fraccordion from './_fr-accordion.js';

export default {
  name: 'section-toggle',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    solo: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  beforeCreate() {
    const list = this.$slots.default;
    this.items = list.filter(item => item.tag === 'section');
  },
  mounted() {
    if (this.disabled) return;

    Fraccordion({
      headerIdPrefix: 'ui-toggle-header-',
      panelIdPrefix: 'ui-toggle-panel-',
      firstPanelsOpenByDefault: this.open,
      multiselectable: !this.solo,
    });
  },
  render() {
    return (
      <div class="fr-accordion js-fr-accordion">
        {this.items.map((item, index) => (
          <div class="fr-accordion__item">
            <div id={`ui-toggle-header-${this._uid}-${index + 1}`} class="fr-accordion__header js-fr-accordion__header">
              <h2>{ item.data.attrs.title }</h2>
            </div>
            <div id={`ui-toggle-panel-${this._uid}-${index + 1}`} class="fr-accordion__panel js-fr-accordion__panel">
              <div class="fr-accordion__panel__inner">
                { item.children }
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  },
};
</script>
