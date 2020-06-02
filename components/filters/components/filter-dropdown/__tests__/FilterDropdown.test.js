import { mount, shallow } from 'vue-test-utils';
import FilterDropdown from '../FilterDropdown.vue';
import NestedCheckbox from '../components/NestedCheckbox/index.vue';
import ButtonIcon from '../../../../buttons/ButtonIcon.vue';

const getOptions = () => [
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

const options = getOptions();

const placeholderLabel = {
  plural: 'course types',
  singular: 'course type',
};

describe('FilterDropdown', () => {
  it('should match spapshot', () => {
    const wrapper = mount(FilterDropdown, {
      propsData: {
        options,
        placeholderLabel,
        optionsLabel: 'Course types to include:',
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render component without options label', () => {
    const wrapper = mount(FilterDropdown, {
      propsData: {
        options,
        placeholderLabel,
      },
    });

    expect(wrapper.find('[data-testid="filter-dropdown-options-label"]').exists()).toBe(false);
  });

  describe('Placeholder text', () => {
    it('should render "Please select" placeholder', () => {
      const updatedOptions = getOptions();
      updatedOptions[0].options[0].options[0].isChecked = false;
      updatedOptions[0].options[0].options[1].isChecked = false;

      const wrapper = mount(FilterDropdown, {
        propsData: {
          options: updatedOptions,
          placeholderLabel,
        },
      });

      expect(wrapper.find('[data-testid="filter-dropdown-placeholder"]').text()).toEqual('Please select');
    });

    it('should render "All course types"', () => {
      const updatedOptions = getOptions();
      updatedOptions[0].options[0].options[2].isChecked = true;

      updatedOptions[0].options[1].options[0].isChecked = true;
      updatedOptions[0].options[1].options[1].isChecked = true;
      updatedOptions[0].options[1].options[2].isChecked = true;

      updatedOptions[0].options[2].options[0].isChecked = true;
      updatedOptions[0].options[2].options[1].isChecked = true;

      const wrapper = mount(FilterDropdown, {
        propsData: {
          options: updatedOptions,
          placeholderLabel,
        },
      });

      expect(wrapper.find('[data-testid="filter-dropdown-placeholder"]').text()).toEqual('All course types');
    });

    it('should render "1 course type selected"', () => {
      const updatedOptions = getOptions();
      updatedOptions[0].options[0].options[1].isChecked = false;

      const wrapper = mount(FilterDropdown, {
        propsData: {
          options: updatedOptions,
          placeholderLabel,
        },
      });

      expect(wrapper.find('[data-testid="filter-dropdown-placeholder"]').text()).toEqual('1 course type selected');
    });
  });

  it('should open the dropdown', () => {
    const wrapper = shallow(FilterDropdown, {
      propsData: {
        options,
        placeholderLabel,
      },
    });

    wrapper.find('[data-testid="filter-dropdown-select"]').trigger('click');

    checkBodyVisibility(wrapper, true);
  });

  it('should change internal state on NestedCheckbox changes', async () => {
    const wrapper = mount(FilterDropdown, {
      propsData: {
        options,
        placeholderLabel,
      },
    });

    expect(wrapper.find(NestedCheckbox).props().options).toEqual(options);

    const changedOptions = getOptions();
    changedOptions[0].options[0].options[2].isChecked = true;

    wrapper.find(NestedCheckbox).vm.$emit('change', changedOptions);
    await wrapper.vm.$nextTick();

    expect(wrapper.props().options).toEqual(options);
    expect(wrapper.find(NestedCheckbox).props().options).toEqual(changedOptions);
  });

  it('should emit updated options', async () => {
    const changedOptions = getOptions();
    changedOptions[0].options[0].options[2].isChecked = true;

    const wrapper = mount(FilterDropdown, {
      propsData: {
        options,
        placeholderLabel,
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

  it('should emit clear event when ', () => {
    const wrapper = mount(FilterDropdown, {
      propsData: {
        options,
        placeholderLabel,
      },
      data() {
        return {
          isOpened: true,
        };
      },
    });

    const foundBtn = findComponentByTestId(wrapper, ButtonIcon, 'filter-dropdown-btn-clear');
    foundBtn.trigger('click');

    checkEventEmitted(wrapper, 'clear', undefined);
  });

  describe('open/close functionality', () => {
    [true, false].forEach((isOpened) => {
      it('should do nothing if the dropdown is disabled', async () => {
        const wrapper = mount(FilterDropdown, {
          propsData: {
            options,
            placeholderLabel,
            disabled: true,
          },
          data() {
            return {
              isOpened,
            };
          },
        });

        wrapper.find('[data-testid="filter-dropdown-select"]').trigger('click');

        checkEventNotEmitted(wrapper, 'change');

        await wrapper.vm.$nextTick();

        checkBodyVisibility(wrapper, isOpened);
      });
    });

    it('should close the dropdown without emitting the event if no changes applied', async () => {
      const wrapper = mount(FilterDropdown, {
        propsData: {
          options,
          placeholderLabel,
        },
        data() {
          return {
            isOpened: true,
          };
        },
      });

      wrapper.find('[data-testid="filter-dropdown-select"]').trigger('click');

      checkEventNotEmitted(wrapper, 'change');

      await wrapper.vm.$nextTick();

      checkBodyVisibility(wrapper, false);
    });

    it('should close dropdown and emit changed options', async () => {
      const wrapper = mount(FilterDropdown, {
        propsData: {
          options,
          placeholderLabel,
        },
        data() {
          return {
            isOpened: true,
          };
        },
      });

      const changedOptions = getOptions();
      changedOptions[0].options[0].options[2].isChecked = true;

      wrapper.find(NestedCheckbox).vm.$emit('change', changedOptions);
      await wrapper.vm.$nextTick();

      wrapper.find('[data-testid="filter-dropdown-select"]').trigger('click');

      checkEventEmitted(wrapper, 'change', changedOptions);

      await wrapper.vm.$nextTick();

      checkBodyVisibility(wrapper, false);
    });

    describe('click outside', () => {
      it('should close dropdown if the user clicked outside', async () => {
        const wrapper = mount(FilterDropdown, {
          attachToDocument: true,
          propsData: {
            options,
            placeholderLabel,
          },
        });

        wrapper.find('[data-testid="filter-dropdown-select"]').trigger('click');
        await wrapper.vm.$nextTick();

        checkBodyVisibility(wrapper, true);

        wrapper.trigger('focusout');

        await wrapper.vm.$nextTick();

        checkBodyVisibility(wrapper, false);
      });

      it('should close dropdown and emit changes when the user clicked outside', async () => {
        const wrapper = mount(FilterDropdown, {
          attachToDocument: true,
          propsData: {
            options,
            placeholderLabel,
          },
        });

        wrapper.find('[data-testid="filter-dropdown-select"]').trigger('click');
        await wrapper.vm.$nextTick();

        checkBodyVisibility(wrapper, true);

        const changedOptions = getOptions();
        changedOptions[0].options[0].options[2].isChecked = true;

        wrapper.find(NestedCheckbox).vm.$emit('change', changedOptions);
        await wrapper.vm.$nextTick();

        wrapper.trigger('focusout');

        await wrapper.vm.$nextTick();

        checkBodyVisibility(wrapper, false);
        checkEventEmitted(wrapper, 'change', changedOptions);
      });
    });
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

  checkEventEmitted(wrapper, 'change', expectedPayload);

  await wrapper.vm.$nextTick();

  checkBodyVisibility(wrapper, false);
}

function checkEventEmitted(wrapper, event, expectedPayload) {
  const emitted = wrapper.emitted(event);
  expect(emitted.length).toBe(1);

  const [emittedPayload] = emitted[0];
  expect(emittedPayload).toEqual(expectedPayload);
}

function checkEventNotEmitted(wrapper, event) {
  const emitted = wrapper.emitted(event);
  expect(emitted).toBeUndefined();
}

function findComponentByTestId(wrapper, Component, testId) {
  return wrapper.findAll(Component).wrappers.find((foundWrapper) => {
    const attrs = foundWrapper.attributes();

    return attrs['data-testid'] === testId;
  });
}
