import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import InfoPanel from '../InfoPanel.vue';
import SvgIcon from '../../icons/SvgIcon.vue';


expect.extend(toHaveNoViolations);

describe('InfoPanel', () => {
  it('should match snapshot', () => {
    const result = shallow(InfoPanel, {
      propsData: {
        title: '',
      },
    }).element;

    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types iconName/title', () => {
    const wrapper = shallow(InfoPanel);
    const {
      iconName,
      title,
    } = wrapper.vm.$options.props;

    expect(iconName.type).toEqual(String);
    expect(wrapper.props().iconName).toBe('');

    expect(title.type).toBe(String);
    expect(wrapper.props().title).toBe('');
  });

  it('should render iconName from prop with correct type', () => {
    const wrapper = shallow(InfoPanel, {
      propsData: {
        iconName: 'location',
      },
    });

    expect(wrapper.find(SvgIcon).exists()).toBe(true);
  });

  it('should render title from prop with correct type', () => {
    const title = 'Test title';
    const wrapper = shallow(InfoPanel, {
      propsData: {
        title: 'Test title',
      },
    });

    expect(typeof wrapper.props().title).toBe('string');
    expect(wrapper.props().title).toBe(title);
    expect(wrapper.find('.info-panel__title').text()).toBe(title);
  });

  it('should render any content inside of the slot', () => {
    const wrapper = shallow(InfoPanel, {
      slots: {
        default: ['<p>test</p>'],
      },
    });
    expect(wrapper.find('p').exists()).toBe(true);
  });
});
