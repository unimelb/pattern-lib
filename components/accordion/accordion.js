import Fraccordion from './_fr-accordion.js';

// Convert attributes to props
export default function Accordion(el) {
  if (el.getAttribute('data-bound') !== 'true') {
    const props = { open: false, multiselect: true };

    if (el.hasAttribute('data-open')) {
      props.open = el.getAttribute('data-open');
    }

    if (el.hasAttribute('data-solo')) {
      props.multiselect = !el.getAttribute('data-solo');
    }

    Fraccordion({
      firstPanelsOpenByDefault: props.open,
      multiselectable: props.multiselect,
    });

    el.setAttribute('data-bound', 'true');
  }
}
