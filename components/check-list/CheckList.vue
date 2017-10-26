<script>
import CheckListItem from './CheckListItem.vue';
import ButtonIcon from '../buttons/ButtonIcon.vue';

export default {
  props: {
    checkedCount: {
      type: String,
      default: '0',
    },
  },
  data() {
    const count = parseInt(this.checkedCount, 10);

    return {
      checkedItems: this.items.map((item, index) => index < count),
    };
  },
  computed: {
    itemsAllChecked() {
      return this.checkedItems.indexOf(false) === -1;
    },
  },
  beforeCreate() {
    const list = this.$slots.list[0];
    this.items = list.children.filter(item => item.tag === 'li');

    const btn = this.$slots.btn[0];
    this.btnHref = btn.data.attrs.href;
    this.btnText = btn.children[0].text;
  },
  methods: {
    onToggleItem(index, evt) {
      this.$set(this.checkedItems, index, evt.target.checked);
    },
  },
  render() {
    return (
      <div class="check-list">
        <ol class="check-list__list">
          {this.items.map((item, index) => (
            <CheckListItem
              index={index}
              text={item.children[0].text}
              checked={this.checkedItems[index]}
              toggle={this.onToggleItem}
            />
          ))}
        </ol>
        <ButtonIcon
          href={this.btnHref}
          disabled={!this.itemsAllChecked}
        >
          {this.btnText}
        </ButtonIcon>
      </div>
    );
  },
};
</script>
