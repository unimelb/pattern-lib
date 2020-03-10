import { mount } from 'vue-test-utils';
import NestedCheckboxView from '../NestedCheckboxView.vue';

const options = [
  {
    label: 'All (49)',
    name: 'all',
    isChecked: false,
    isIndeterminate: true,
    options: [
      {
        label: 'Undergraduate (7)',
        name: 'undergraduate',
        isChecked: false,
        isIndeterminate: true,
        options: [
          {
            label: 'Bachelor (6)',
            name: 'bachelor',
            isChecked: true,
            isIndeterminate: false,
          },
          {
            label: 'Diploma (1)',
            name: 'diploma',
            isChecked: true,
            isIndeterminate: false,
          },
          {
            label: 'Honours (0)',
            name: 'honours',
            isChecked: false,
            isIndeterminate: false,
          },
        ],
      },
      {
        label: 'Graduate (38)',
        name: 'graduate',
        isChecked: false,
        isIndeterminate: false,
        options: [
          {
            label: 'Certificate (10)',
            name: 'certificate',
            isChecked: false,
            isIndeterminate: false,
          },
          {
            label: 'Diploma (6)',
            name: 'diploma',
            isChecked: false,
            isIndeterminate: false,
          },
          {
            label: 'Master (22)',
            name: 'master',
            isChecked: false,
            isIndeterminate: false,
          },
        ],
      },
      {
        label: 'Research (4)',
        name: 'research',
        isChecked: false,
        isIndeterminate: false,
        options: [
          {
            label: 'Master (2)',
            name: 'master',
            isChecked: false,
            isIndeterminate: false,
          },
          {
            label: 'PhD (2)',
            name: 'phd',
            isChecked: false,
            isIndeterminate: false,
          },
        ],
      },
    ],
  },
];


describe('NestedCheckboxView', () => {
  it('should match snapshot', () => {
    const result = mount(NestedCheckboxView,
      {
        propsData: {
          options,
          parentNames: [],
        },
      }).element;

    expect(result).toMatchSnapshot();
  });
});
