import { mount } from 'vue-test-utils';
import BaseCheckbox from '../BaseCheckbox.vue';

describe('BaseCheckbox', () => {
  it('should match snapshot', () => {
    const result = mount(BaseCheckbox,
      {
        propsData: {
          name: 'checkboxName',
          label: 'checkbox label',
          ariaLabel: 'aria-label',
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  describe('label', () => {
    const cases = [
      ['should render label', 'checkbox label', true],
      ['should not render label', undefined, false],
    ];

    it.each(cases)('%s', (description, label, result) => {
      const wrapper = mount(BaseCheckbox, {
        propsData: {
          name: 'checkboxName',
          label,
        },
      });

      expect(
        wrapper.find('[data-testid="base-checkbox-label"]').exists()
      ).toBe(result);
    });
  });

  it('should render checked checkbox', () => {
    const wrapper = mount(BaseCheckbox, {
      propsData: {
        name: 'checkboxName',
        isChecked: true,
      },
    });

    expect(
      wrapper
        .find('[data-testid="base-checkbox-input"]')
        .element
        .checked
    ).toBe(true);

    expect(
      wrapper
        .find('[data-testid="base-checkbox-icon-checked"]')
        .classes()
        .find((className) => className.includes('--is-checked'))
    ).not.toBe(undefined);

    expect(
      wrapper
        .find('[data-testid="base-checkbox-icon-indeterminate"]')
        .classes()
        .find((className) => className.includes('--is-indeterminate'))
    ).toBe(undefined);
  });

  describe('indeterminate state', () => {
    it.each([
      [true],
      [false],
    ])('should render indeterminate checkbox', (isChecked) => {
      const wrapper = mount(BaseCheckbox, {
        propsData: {
          name: 'checkboxName',
          isChecked,
          isIndeterminate: true,
        },
      });

      expect(
        wrapper
          .find('[data-testid="base-checkbox-input"]')
          .element
          .checked
      ).toBe(false);

      expect(
        wrapper
          .find('[data-testid="base-checkbox-icon-checked"]')
          .classes()
          .find((className) => className.includes('--is-checked'))
      ).toBe(undefined);

      expect(
        wrapper
          .find('[data-testid="base-checkbox-icon-indeterminate"]')
          .classes()
          .find((className) => className.includes('--is-indeterminate'))
      ).not.toBe(undefined);
    });
  });

  describe('ariaLabel', () => {
    const cases = [
      ['should render aria-label', 'ariaLabel', 'ariaLabel'],
      ['should not render aria-label', undefined, undefined],
    ];

    it.each(cases)('%s', (description, ariaLabel, expectedAriaLabel) => {
      const wrapper = mount(BaseCheckbox, {
        propsData: {
          name: 'checkboxName',
          ariaLabel,
        },
      });

      expect(
        wrapper
          .attributes()['aria-label']
      ).toBe(expectedAriaLabel);
    });
  });
});
