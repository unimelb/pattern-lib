const getDefaultOptions = (isChecked = false) => [
  {
    label: 'All',
    name: 'all',
    options: [
      {
        label: 'Undergraduate',
        name: 'undergrad',
        options: [
          {
            label: 'Bachelor',
            name: 'bachelor',
            isChecked,
          },
          {
            label: 'Diploma',
            name: 'diploma',
            isChecked,
          },
          {
            label: 'Honours',
            name: 'honours',
            isChecked,
          },
        ],
      },
      {
        label: 'Graduate',
        name: 'postgrad',
        options: [
          {
            label: 'Certificate of bla bla bla bla bla',
            name: 'certificate',
            isChecked,
          },
          {
            label: 'Diploma',
            name: 'diploma',
            isChecked,
          },
          {
            label: 'Master',
            name: 'master',
            isChecked,
          },
        ],
      },
      {
        label: 'Research',
        name: 'research',
        options: [
          {
            label: 'Master',
            name: 'master',
            isChecked,
          },
          {
            label: 'PhD',
            name: 'phd',
            isChecked,
          },
        ],
      },
    ],
  },
];

const updateOptions = (options, [firstKey, ...restKeys]) => {
  const foundOption = options.find((option) => option.name === firstKey);

  if (restKeys.length) {
    updateOptions(foundOption.options, restKeys);
  } else {
    foundOption.isChecked = true;
  }
};

const createOptionsBasedOnKeys = (optionKeysArray) => {
  const options = getDefaultOptions();

  optionKeysArray.forEach((optionKeys) => {
    updateOptions(options, optionKeys);
  });

  return options;
};

export default (boolOrOptionKeysArray) => (typeof boolOrOptionKeysArray === 'boolean'
  ? getDefaultOptions(boolOrOptionKeysArray)
  : createOptionsBasedOnKeys(boolOrOptionKeysArray));
