import getOptionsCreator from '../getOptionsCreator.js';

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

export default getOptionsCreator(getDefaultOptions);
