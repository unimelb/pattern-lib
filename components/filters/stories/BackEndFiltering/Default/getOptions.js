import getOptionsCreator from '../getOptionsCreator';

const defaultOptionsCreators = {
  locations: (isChecked = false) => [
    {
      label: 'All',
      name: 'all',
      options: [
        {
          label: 'Sydney',
          name: 'sydney',
          options: [
            {
              label: 'CBD',
              name: 'cbd',
              isChecked,
            },
            {
              label: 'Bondi',
              name: 'bondi',
              isChecked,
            },
          ],
        },
        {
          label: 'Melbourne',
          name: 'melbourne',
          options: [
            {
              label: 'Southbank',
              name: 'southbank',
              isChecked,
            },
            {
              label: 'Parkville',
              name: 'parkville',
              isChecked,
            },
          ],
        },
        {
          label: 'Gold coast',
          name: 'goldCoast',
          options: [
            {
              label: 'CBD',
              name: 'cbd',
              isChecked,
            },
          ],
        },
      ],
    },
  ],
  faculties: (isChecked = false) => [
    {
      label: 'All',
      name: 'all',
      options: [
        {
          label: 'Faculty of History',
          name: 'facultyOfHistory',
          isChecked,
        },
        {
          label: 'Faculty of Sociology',
          name: 'facultyOfSociology',
          isChecked,
        },
        {
          label: 'Faculty of Art',
          name: 'facultyOfArt',
          isChecked,
        },
      ],
    },
  ],
};

export default (name, boolOrOptionKeysArray) => {
  const getDefaultOptions = defaultOptionsCreators[name];

  return getOptionsCreator(getDefaultOptions)(boolOrOptionKeysArray);
};
