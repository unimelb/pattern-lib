import { shallow } from 'vue-test-utils';
import { toHaveNoViolations } from 'jest-axe';
import PagePreFooter from '../PagePreFooter.vue';

expect.extend(toHaveNoViolations);

describe('PagePreFooter', () => {
  it('should match snapshot', () => {
    const result = shallow(PagePreFooter).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types theme', () => {
    const wrapper = shallow(PagePreFooter);
    const {
      theme,
    } = wrapper.vm.$options.props;

    expect(theme.type).toBe(String);
    expect(wrapper.props().theme).toBe('');
  });

  it('should render theme from prop with correct type', () => {
    const theme = 'dark';
    const wrapper = shallow(PagePreFooter, {
      propsData: {
        theme,
      },
    });

    expect(typeof wrapper.props().theme).toBe('string');
    expect(wrapper.props().theme).toBe(theme);
    expect(wrapper.classes()).toContain('dark');
  });

  it('should 2 links slots', () => {
    const wrapper = shallow(PagePreFooter, {
      slots: {
        'link-1': '<div class="link-1">link 1</div>',
        'link-2': '<div class="link-2">link 2</div>',
        'link-3': '<div class="link-3">link 3</div>',
      },
    });
    const link1 = wrapper.find('.link-1');
    const link2 = wrapper.find('.link-2');
    const link3 = wrapper.find('.link-3');
    expect(link1.exists()).toBe(true);
    expect(link2.exists()).toBe(true);
    expect(link3.exists()).toBe(false);
  });

  it('should hide links container if no slots', () => {
    const wrapper = shallow(PagePreFooter);
    expect(wrapper.vm.hasLinksSlots).toBe(false);
  });

  it('should 8 social slots', () => {
    const wrapper = shallow(PagePreFooter, {
      slots: {
        'social-1': '<div class="social-1">social 1</div>',
        'social-2': '<div class="social-2">social 2</div>',
        'social-3': '<div class="social-3">social 3</div>',
        'social-4': '<div class="social-4">social 4</div>',
        'social-5': '<div class="social-5">social 5</div>',
        'social-6': '<div class="social-6">social 6</div>',
        'social-7': '<div class="social-7">social 7</div>',
        'social-8': '<div class="social-8">social 8</div>',
        'social-9': '<div class="social-9">social 9</div>',
      },
    });
    const social1 = wrapper.find('.social-1');
    const social2 = wrapper.find('.social-2');
    const social3 = wrapper.find('.social-3');
    const social4 = wrapper.find('.social-4');
    const social5 = wrapper.find('.social-5');
    const social6 = wrapper.find('.social-6');
    const social7 = wrapper.find('.social-7');
    const social8 = wrapper.find('.social-8');
    const social9 = wrapper.find('.social-9');
    expect(social1.exists()).toBe(true);
    expect(social2.exists()).toBe(true);
    expect(social3.exists()).toBe(true);
    expect(social4.exists()).toBe(true);
    expect(social5.exists()).toBe(true);
    expect(social6.exists()).toBe(true);
    expect(social7.exists()).toBe(true);
    expect(social8.exists()).toBe(true);
    expect(social9.exists()).toBe(false);
  });

  it('should hide social container if no slots', () => {
    const wrapper = shallow(PagePreFooter);
    expect(wrapper.vm.hasSocialSlots).toBe(false);
  });
});
