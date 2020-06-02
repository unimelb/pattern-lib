const getSelectedNames = (options, parentNames = []) => options.reduce((selectedNames, option) => {
  if (option.options && option.options.length) {
    const nestedSelectedOptions = getSelectedNames(
      option.options,
      [...parentNames, option.name]
    );
    return selectedNames.concat(nestedSelectedOptions);
  }

  if (option.isChecked) {
    selectedNames.push([...parentNames, option.name]);
  }

  return selectedNames;
}, []);

export default getSelectedNames;
