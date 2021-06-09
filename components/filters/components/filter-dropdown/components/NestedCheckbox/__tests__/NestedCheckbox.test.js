import { mount } from 'vue-test-utils';
import cloneDeep from 'lodash.clonedeep';
import NestedCheckbox from '../index.vue';

const options = [
  {
    label: 'All (49)',
    name: 'all',
    options: [
      {
        label: 'Undergraduate (7)',
        name: 'undergraduate',
        options: [
          {
            label: 'Bachelor (6)',
            name: 'bachelor',
            isChecked: true,
          },
          {
            label: 'Diploma (1)',
            name: 'diploma',
            isChecked: true,
          },
          {
            label: 'Honours (0)',
            name: 'honours',
            isChecked: false,
          },
        ],
      },
      {
        label: 'Graduate (38)',
        name: 'graduate',
        options: [
          {
            label: 'Certificate (10)',
            name: 'certificate',
            isChecked: false,
          },
          {
            label: 'Diploma (6)',
            name: 'diploma',
            isChecked: false,
          },
          {
            label: 'Master (22)',
            name: 'master',
            isChecked: false,
          },
        ],
      },
      {
        label: 'Research (4)',
        name: 'research',
        options: [
          {
            label: 'Master (2)',
            name: 'master',
            isChecked: false,
          },
          {
            label: 'PhD (2)',
            name: 'phd',
            isChecked: false,
          },
        ],
      },
    ],
  },
];

describe('NestedCheckbox', () => {
  it('should match snapshot', () => {
    const result = mount(NestedCheckbox,
      {
        propsData: {
          options,
        },
      }).element;

    expect(result).toMatchSnapshot();
  });

  it('should return updated options when clicked on a deepest checkbox', () => {
    const wrapper = mount(NestedCheckbox,
      {
        propsData: {
          options,
        },
      });

    const checkboxHonours = wrapper.find('[data-name="honours"]');

    checkboxHonours.trigger('click');

    const emittedChange = wrapper.emitted('change');

    expect(emittedChange.length).toBe(1);

    const expectedPayload = cloneDeep(options);
    expectedPayload[0].options[0].options[2].isChecked = true;

    const [emittedPayload] = emittedChange[0];

    expect(emittedPayload).toEqual(expectedPayload);
  });

  it('should return updated options when clicked on a parent checkbox', () => {
    const updatedOptions = cloneDeep(options);
    updatedOptions[0].options[0].options[2].isChecked = true;

    const wrapper = mount(NestedCheckbox,
      {
        propsData: {
          options: updatedOptions,
        },
      });

    const checkboxUndergraduate = wrapper.find('[data-name="undergraduate"]');
    checkboxUndergraduate.trigger('click');

    const emittedChange = wrapper.emitted('change');

    expect(emittedChange.length).toBe(1);

    const expectedPayload = cloneDeep(updatedOptions);
    expectedPayload[0].options[0].options[0].isChecked = false;
    expectedPayload[0].options[0].options[1].isChecked = false;
    expectedPayload[0].options[0].options[2].isChecked = false;

    const [emittedPayload] = emittedChange[0];

    expect(emittedPayload).toEqual(expectedPayload);
  });
});
