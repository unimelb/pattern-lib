export default class Blanket {
  constructor() {
    this.el = document.querySelector('.blanket');
    this.props = {};

    // Don't re-initialise blanket if it already exists
    if (!this.el) {
      this.el = document.createElement('div');
      this.el.className = 'blanket';

      // Add the blanket to the DOM
      document.querySelector('body').appendChild(this.el);
    }
  }

  /**
   * Show blanket
   * @param {Object} opts (optional)
   *        {Function} onClick - click handler to register
   */
  show(opts) {
    this.el.classList.add('on');

    // If a click handler is provided, register it
    if (opts.onClick) {
      this.props.onClick = opts.onClick;
      this.el.addEventListener('click', opts.onClick);
    }
  }

  /**
   * Hide blanket and clean up
   */
  hide() {
    this.el.classList.remove('on');

    // If a click handler was provided when the modal was shown, remove it
    if (this.props.onClick) {
      this.el.removeEventListener('click', this.props.onClick);
      this.props.onClick = null;
    }
  }

  /**
   * Toggle blanket
   */
  toggle(force) {
    this.el.classList.toggle('on', force);
  }
}
