import getOptionsCreator from '../getOptionsCreator';

const getDefaultLocationsOptions = (isChecked = false) => [
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
];
const getDefaultFacultiesOptions = (isChecked = false) => [
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
];

export const getLocationsOptions = getOptionsCreator(getDefaultLocationsOptions);
export const getFacultiesOptions = getOptionsCreator(getDefaultFacultiesOptions);
