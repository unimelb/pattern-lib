import { mount } from 'vue-test-utils';
import AppCheckbox from '../AppCheckbox.vue';
import BaseCheckbox from '../../base/base-checkbox/BaseCheckbox';

describe('AppCheckbox', () => {
  describe('single modelValue', () => {
    describe('should render BaseCheckbox: ', () => {
      const cases = [
        [
          'all props',
          {
            name: 'app-checkbox',
            modelValue: true,
            label: 'App checkbox',
            ariaLabel: 'ariaLabel',
          },
          {
            name: 'app-checkbox',
            label: 'App checkbox',
            isChecked: true,
            isIndeterminate: false,
            ariaLabel: 'ariaLabel',
          },
        ],
        [
          'only required props',
          {
            modelValue: true,
          },
          {
            name: '',
            label: '',
            isChecked: true,
            isIndeterminate: false,
            ariaLabel: '',
          },
        ],
      ];

      it.each(cases)('%s', (description, propsData, expectedBaseProps) => {
        const wrapper = mount(AppCheckbox, {
          propsData,
        });

        const baseCheckbox = wrapper.find(BaseCheckbox);

        expect(baseCheckbox.props()).toEqual(expectedBaseProps);
      });
    });

    describe('should emit change event with a new value', () => {
      const cases = [
        [true],
        [false],
      ];

      it.each(cases)('checkbox value: %s', (modelValue) => {
        const propsData = {
          name: 'app-checkbox',
          modelValue,
          label: 'App checkbox',
          ariaLabel: 'ariaLabel',
        };

        const wrapper = mount(AppCheckbox, {
          propsData,
        });

        wrapper.find(BaseCheckbox).vm.$emit('change', { isChecked: modelValue });

        const emmitedChange = wrapper.emitted('change');
        expect(emmitedChange.length).toEqual(1);
        expect(emmitedChange[0].length).toEqual(1);
        expect(emmitedChange[0][0]).toEqual(!modelValue);
      });
    });
  });

  describe('modelValue - array of checked checkbox names', () => {
    it('should throw an error if the name prop is not passed', () => {
      let errorThrown = false;

      try {
        mount(AppCheckbox, {
          propsData: {
            modelValue: [],
          },
        });
      } catch (e) {
        errorThrown = true;
      }

      expect(errorThrown).toEqual(true);
    });

    describe('checkbox state', () => {
      const cases = [
        ['should have checked state', ['checkbox1', 'appCheckbox'], true],
        ['should have unchecked state', ['checkbox1'], false],
      ];

      it.each(cases)('%s', (description, modelValue, expectedCheckedState) => {
        const wrapper = mount(AppCheckbox, {
          propsData: {
            name: 'appCheckbox',
            modelValue,
          },
        });

        expect(wrapper.find(BaseCheckbox).props().isChecked).toEqual(expectedCheckedState);
      });
    });

    describe('should emit change event with a new value', () => {
      const cases = [
        [
          'should add the checkbox name to a modelValue',
          ['checkbox1'],
          ['checkbox1', 'appCheckbox'],
        ],
        [
          'should remove the checkbox name to a modelValue',
          ['checkbox1', 'appCheckbox'],
          ['checkbox1'],
        ],
      ];

      it.each(cases)('%s', (description, modelValue, expectedChangedValue) => {
        const wrapper = mount(AppCheckbox, {
          propsData: {
            name: 'appCheckbox',
            modelValue,
          },
        });

        wrapper.find(BaseCheckbox).vm.$emit('change', { isChecked: modelValue.includes('appCheckbox') });

        const emmitedChange = wrapper.emitted('change');
        expect(emmitedChange.length).toEqual(1);
        expect(emmitedChange[0][0]).toEqual(expectedChangedValue);
      });
    });
  });
});
