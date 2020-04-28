import { mount, shallow } from 'vue-test-utils';
import cloneDeep from 'lodash.clonedeep';
import FilterDropdown from '../FilterDropdown.vue';
import NestedCheckbox from '../components/NestedCheckbox/index.vue';
import ButtonIcon from '../../../../buttons/ButtonIcon.vue';

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
    const wrapper = mount(FilterDropdown, {
      propsData: {
        filters: [
          {
            name: 'courseTypes',
            options,
            placeholderLabel: {
              plural: 'course types',
              singular: 'course type',
            },
            optionsLabel: 'Course types to include:',
          },
        ],
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render component without options label', () => {
    const wrapper = mount(FilterDropdown, {
      propsData: {
        filters: [
          {
            options,
            placeholderLabel: {
              plural: 'course types',
              singular: 'course type',
            },
          },
        ],
      },
    });

    expect(wrapper.find('[data-testid="filter-dropdown-options-label"]').exists()).toBe(false);
  });

  it('should open the dropdown', () => {
    const wrapper = shallow(FilterDropdown, {
      propsData: {
        filters: [
          {
            options,
            placeholderLabel: {
              plural: 'course types',
              singular: 'course type',
            },
          },
        ],
      },
    });

    wrapper.find('[data-testid="filter-dropdown-select"]').trigger('click');

    checkBodyVisibility(wrapper, true);
  });

  it('should change internal state on NestedCheckbox changes', async () => {
    const wrapper = mount(FilterDropdown, {
      propsData: {
        filters: [
          {
            options,
            placeholderLabel: {
              plural: 'course types',
              singular: 'course type',
            },
          },
        ],
      },
    });

    expect(wrapper.find(NestedCheckbox).props().options).toEqual(options);

    const changedOptions = cloneDeep(options);
    changedOptions[0].options[0].options[2].isChecked = true;

    wrapper.find(NestedCheckbox).vm.$emit('change', changedOptions);
    await wrapper.vm.$nextTick();

    expect(wrapper.props().options).toEqual(options);
    expect(wrapper.find(NestedCheckbox).props().options).toEqual(changedOptions);
  });

  describe('default options', () => {
    it('should reset component state to options', async () => {
      const changedOptions = cloneDeep(options);
      changedOptions[0].options[0].options[2].isChecked = true;

      const wrapper = mount(FilterDropdown, {
        propsData: {
          filters: [
            {
              options,
              placeholderLabel: {
                plural: 'course types',
                singular: 'course type',
              },
            },
          ],
        },
        data() {
          return {
            isOpened: true,
            copiedOptions: changedOptions,
          };
        },
      });

      await checkBtnClick(wrapper, 'filter-dropdown-btn-clear', options);
    });

    it('should reset component state to custom default options', async () => {
      const changedOptions = cloneDeep(options);
      changedOptions[0].options[0].options[2].isChecked = true;
      const defaultOptions = cloneDeep(options);
      defaultOptions[0].options[0].options[0].isChecked = false;
      defaultOptions[0].options[0].options[1].isChecked = false;

      const wrapper = mount(FilterDropdown, {
        // TODO double check this case
        propsData: {
          filters: [
            {
              options,
              defaultOptions,
              placeholderLabel: {
                plural: 'course types',
                singular: 'course type',
              },
            },
          ],
        },
        data() {
          return {
            isOpened: true,
            copiedOptions: changedOptions,
          };
        },
      });

      await checkBtnClick(wrapper, 'filter-dropdown-btn-clear', defaultOptions);
    });
  });

  it('should emit updated options', async () => {
    const changedOptions = cloneDeep(options);
    changedOptions[0].options[0].options[2].isChecked = true;

    const wrapper = mount(FilterDropdown, {
      propsData: {
        filters: [
          {
            options,
            placeholderLabel: {
              plural: 'course types',
              singular: 'course type',
            },
          },
        ],
      },
      data() {
        return {
          isOpened: true,
          copiedOptions: changedOptions,
        };
      },
    });

    await checkBtnClick(wrapper, 'filter-dropdown-btn-apply', changedOptions);
  });
});

function checkBodyVisibility(wrapper, expectedVisibility) {
  const isVisible = !!wrapper
    .find('[data-testid="filter-dropdown-body"]')
    .classes()
    .find((className) => className.includes('--is-opened'));

  expect(isVisible === expectedVisibility).toBe(true);
}

async function checkBtnClick(wrapper, buttonTestId, expectedPayload) {
  const foundBtn = findComponentByTestId(wrapper, ButtonIcon, buttonTestId);
  foundBtn.trigger('click');

  const emittedChange = wrapper.emitted('change');
  expect(emittedChange.length).toBe(1);

  const [emittedPayload] = emittedChange[0];
  expect(emittedPayload).toEqual(expectedPayload);

  await wrapper.vm.$nextTick();

  checkBodyVisibility(wrapper, false);
}

function findComponentByTestId(wrapper, Component, testId) {
  return wrapper.findAll(Component).wrappers.find((foundWrapper) => {
    const attrs = foundWrapper.attributes();

    return attrs['data-testid'] === testId;
  });
}
