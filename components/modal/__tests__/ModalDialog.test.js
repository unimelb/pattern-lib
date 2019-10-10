import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import ModalDialog from '../ModalDialog.vue';

expect.extend(toHaveNoViolations);

describe('ModalDialog', () => {
  it('should match snapshot', () => {
    const result = shallow(ModalDialog).element;
    expect(result).toMatchSnapshot();
  });

  it('should render in default slot', () => {
    const wrapper = shallow(ModalDialog, {
      slots: {
        default: ['<form><input type="text" name="test"><input type="text" name="test2"></form>'],
      },
    });

    expect(wrapper.find('input').exists()).toBe(true);
  });
  
  it('Component throws no accessibility violations', (done) => {
    const html = shallow(ModalDialog, {
      propsData: {
        trigger: 'mock trigger',
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
