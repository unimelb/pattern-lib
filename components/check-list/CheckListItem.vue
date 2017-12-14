<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
    toggle: {
      type: Function,
      required: true,
    },
  },
  computed: {
    inputId() {
      return `ui-${this._uid}`;
    },
    onChange() {
      return this.toggle.bind(this, this.index);
    },
  },
  render() {
    return (
      <li key={this.index} class="check-list__item">
        <input
          id={this.inputId}
          class="check-list__checkbox"
          type="checkbox"
          checked={this.checked}
          onChange={this.onChange}
        />
        <label class="check-list__label" for={this.inputId}>
          {this.content}
        </label>
      </li>
    );
  },
};
</script>
