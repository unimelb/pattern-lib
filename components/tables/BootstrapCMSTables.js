const isTableParentAComponent = (element) => {
  const componentsToCompare = ['responsive-table', 'compacted-table'];
  const parentName = element.parentElement.tagName.toLowerCase();

  return componentsToCompare.includes(parentName);
};

const createElement = (elementName) => document.createElement(elementName);

const hasClass = (element, classToCheck) => element.classList.contains(classToCheck);

const isCompactedTable = (element) => hasClass(element, 'table--is-compacted');

const isNormalTable = (element) => hasClass(element, 'table--is-not-responsive');

const BootstrapCMSTables = () => {
  const tableElements = document.querySelectorAll('table');
  const elem = [].slice.call(tableElements);

  elem.forEach((el) => {
    const hasBeenWrapped = isTableParentAComponent(el);
    const isACompactedTable = isCompactedTable(el);
    const isANormalTable = isNormalTable(el);
    let wrapper;

    // Table has manually been wrapped in a table component.
    if (hasBeenWrapped) {
      return;
    }

    // If the user has specified that the table is not responsive.
    if (isANormalTable) {
      return;
    }

    if (isACompactedTable) {
      wrapper = createElement('compacted-table');
    } else {
      wrapper = createElement('responsive-table');
    }

    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  });
};

export default BootstrapCMSTables;
