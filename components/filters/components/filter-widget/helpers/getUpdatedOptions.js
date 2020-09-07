const updateOptions = (options, isChecked) => options.map((option) => {
  if (option.options && option.options.length) {
    return {
      ...option,
      options: updateOptions(option.options, isChecked),
    };
  }
  return {
    ...option,
    isChecked,
  };
});

export default (options, isChecked = false) => updateOptions(options, isChecked);
