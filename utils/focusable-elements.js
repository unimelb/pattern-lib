export default (element) => {
  const focusableSelectors = [
    'a[href]',
    'area[href]',
    'input',
    'select',
    'textarea',
    'button',
    'iframe',
    'object',
    'embed',
    '[contenteditable]',
    '[tabindex]:not([tabindex^="-"])',
  ];

  // Create array of focusable elements in context
  const focusableElements = [].slice.call(element.querySelectorAll(focusableSelectors.join()));

  // Filter out disabled elements.
  const filteredElements = focusableElements.filter((el) => !el.disabled);

  return filteredElements;
};
