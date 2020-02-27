import _ from 'lodash';

export default function (value) {
  if (!value.length) {
    return false;
  }

  const validateOptions = (optionsToValidate) => _.every(
    optionsToValidate,
    (option) => !!option.label
      && !!option.name
      && typeof option.name === 'string'
      && (option.options
        ? validateOptions(option.options)
        : typeof option.isChecked === 'boolean')
  );

  return validateOptions(value);
}
