export default function (value) {
  if (!value.length) {
    // eslint-disable-next-line no-console
    console.error('nestedCheckboxOptionsValidator: options min length 1');
    return false;
  }

  const validateOptions = (optionsToValidate) => optionsToValidate.every(
    (option) => {
      const hasLabel = !!option.label && typeof option.label === 'string';
      if (!hasLabel) {
        // eslint-disable-next-line no-console
        console.error('nestedCheckboxOptionsValidator: option must have label');
      }

      const hasName = !!option.name && typeof option.name === 'string';
      if (!hasName) {
        // eslint-disable-next-line no-console
        console.error('nestedCheckboxOptionsValidator: option must have name');
      }

      const hasOptions = option.options;
      const hasIsChecked = typeof option.isChecked === 'boolean';
      if (!hasOptions && !hasIsChecked) {
        // eslint-disable-next-line no-console
        console.error('nestedCheckboxOptionsValidator: option must have isChecked: boolean: ', option);
      }

      return hasLabel
        && hasName
        && (hasOptions
          ? validateOptions(option.options)
          : hasIsChecked);
    }
  );

  return validateOptions(value);
}
