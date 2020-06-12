import getSelectedNames from '../../../helpers/getSelectedNames';
import getOptionsQuantity from '../../../helpers/getOptionsQuantity';

const isFilterApplied = (options) => {
  const selectedOptionsLength = getSelectedNames(options).length;
  const optionsLength = getOptionsQuantity(options);

  return optionsLength !== selectedOptionsLength;
};

export default (optionsArray) => {
  const initialFiltersApplied = 0;
  return optionsArray.reduce(
    (appliedFiltersQuantity, options) => (isFilterApplied(options) ? appliedFiltersQuantity + 1 : appliedFiltersQuantity),
    initialFiltersApplied
  );
};
