export default () => {
  const tableElements = document.querySelectorAll('table');
  const elem = [].slice.call(tableElements);

  elem.forEach((el) => {
    let wrapper;

    if (el.classList.contains('table--compacted')) {
      wrapper = document.createElement('table-compacted');
    } else {
      if (el.classList.contains('table--is-not-responsive')) {
        return;
      }

      wrapper = document.createElement('table-responsive');
    }

    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  });
};
