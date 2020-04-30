const updateOptions = (options, [firstKey, ...restKeys]) => {
  const foundOption = options.find((option) => option.name === firstKey);

  if (restKeys.length) {
    updateOptions(foundOption.options, restKeys);
  } else {
    foundOption.isChecked = true;
  }
};

export default (getDefaultOptions) => {
  const createOptionsBasedOnKeys = (optionKeysArray) => {
    const options = getDefaultOptions();

    optionKeysArray.forEach((optionKeys) => {
      updateOptions(options, optionKeys);
    });

    return options;
  };

  return (boolOrOptionKeysArray) => (typeof boolOrOptionKeysArray === 'boolean'
    ? getDefaultOptions(boolOrOptionKeysArray)
    : createOptionsBasedOnKeys(boolOrOptionKeysArray));
};
