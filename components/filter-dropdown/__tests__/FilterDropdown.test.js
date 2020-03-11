import { mount, shallow } from 'vue-test-utils';
import cloneDeep from 'lodash.clonedeep';
import FilterDropdown from '../FilterDropdown.vue';
import NestedCheckbox from '../components/NestedCheckbox/index.vue';

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


describe('FilterDropdown', () => {
  it('should match spapshot', () => {
    const result = mount(FilterDropdown,
      {
        propsData: {
          options,
          placeholderLabel: 'course types',
          optionsLabel: 'Course types to include:',
        },
      }).element;

    expect(result).toMatchSnapshot();
  });

  it('should render component without options label', () => {
    const wrapper = mount(FilterDropdown,
      {
        propsData: {
          options,
          placeholderLabel: 'course types',
        },
      });

    expect(
      wrapper.find('[data-testid="filter-dropdown-options-label"]').exists()
    ).toBe(false);
  });

  it('should open the dropdown', () => {
    const wrapper = shallow(FilterDropdown,
      {
        propsData: {
          options,
          placeholderLabel: 'course types',
        },
      });

    wrapper.find('[data-testid="filter-dropdown-select"]').trigger('click');

    expect(
      wrapper
        .find('[data-testid="filter-dropdown-body"]')
        .classes()
        .find((className) => className.includes('--is-opened') || className.includes('--is-open-up'))
    ).not.toBe(undefined);
  });

  it('should change internal state on NestedCheckbox changes', () => {
    const wrapper = mount(FilterDropdown,
      {
        propsData: {
          options,
          placeholderLabel: 'course types',
        },
      });

    expect(wrapper.find(NestedCheckbox).props().options).toEqual(options);

    const changedOptions = cloneDeep(options);
    changedOptions[0].options[0].options[2].isChecked = true;
    // wrapper.find(NestedCheckbox).vm.$emit('change', changedOptions);

    wrapper.find('[data-name="honours"]').trigger('click');

    expect(wrapper.props().options).toEqual(options);
    expect(wrapper.find(NestedCheckbox).props().options).toEqual(changedOptions);
    // expect(wrapper.find('[data-name="honours"] input').element.checked).toBe(true);
  });
});
