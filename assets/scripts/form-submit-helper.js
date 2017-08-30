export default class FormSubmitHelper {
  constructor(props) {
    this.props = props || {};

    if (this.props.el && this.props.form) {
      this.el = document.querySelector(this.props.el);
      this.form = document.querySelector(this.props.form);

      if (this.el && this.form)
        this.el.addEventListener('click', this.submitForm.bind(this));
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.form.submit();
  }
}
