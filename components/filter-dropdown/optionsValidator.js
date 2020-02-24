import { every } from 'lodash';

export default function (value) {
  if (!value.length) {
    return false;
  }

  const validateOptions = (options) => every(
    options,
    ({
      id, label, isChecked, isIndeterminate, options: nestedOptions,
    }) => !!id
      && !!label
      && typeof isChecked === 'boolean'
      && typeof isIndeterminate === 'boolean'
      && (nestedOptions ? validateOptions(nestedOptions) : true)
  );

  return validateOptions(value);
}
