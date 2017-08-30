export default class DisableEmptyLinks {
  constructor() {
    let selectors = ['a[href=""]', 'a[href="#"]'];
    for (let i=selectors.length - 1; i >= 0; i--)
      this.disable(document.querySelectorAll(selectors[i]));
  }

  disable(collection) {
    for (let i=collection.length - 1; i >= 0; i--) {
      collection[i].classList.add('link--disabled');
      collection[i].addEventListener('click', function(e) {
        e.preventDefault();
      });
    }
  }
}
