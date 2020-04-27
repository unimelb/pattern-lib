const getSelectedOptionLabels = (options) => options.reduce((selectedLabels, option) => {
  if (option.options && option.options.length) {
    const nestedSelectedOptions = getSelectedOptionLabels(option.options);
    return selectedLabels.concat(nestedSelectedOptions);
  }

  if (option.isChecked) {
    selectedLabels.push(option.label);
  }

  return selectedLabels;
}, []);

export default getSelectedOptionLabels;
