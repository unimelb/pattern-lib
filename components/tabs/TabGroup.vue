<script>
import Frtabs from './_fr-tabs.js';

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
    Frtabs();
  },
  render() {
    return (
      <div class="fr-tabs js-fr-tabs">
        <ul class="fr-tabs__tablist js-fr-tabs__tablist" role="tablist">
          {this.items.map((item, index) => (
            <li class="fr-tabs__tablist-item" role="presentation">
              <a class="fr-tabs__tab" id={`tab${index}`} href={`#panel${index}`} role="tab" aria-controls={`panel${index}`} tabindex={index === 0 ? 0 : -1}>
                { item.data.attrs.title }
              </a>
            </li>
          ))}
        </ul>
        {this.items.map((item, index) => (
          <section class="fr-tabs__panel js-fr-tabs__panel" role="tabpanel" id={`panel${index}`} aria-labelledby={`tab${index}`} tabindex={index === 0 ? 0 : -1}>
            { item.children }
          </section>
        ))}
      </div>
    );
  },
};
</script>
