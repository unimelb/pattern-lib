import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CardStat from '../CardStat.vue';

expect.extend(toHaveNoViolations);

describe('CardStat', () => {
  it('should match snapshot', () => {
    const result = shallow(CardStat).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types vertical/excerpt/stat/cols/inverted', () => {
    const wrapper = shallow(CardStat);
    const {
      vertical,
      excerpt,
      stat,
      cols,
      inverted,
    } = wrapper.vm.$options.props;

    expect(vertical.type).toBe(Boolean);
    expect(wrapper.props().vertical).toBe(false);

    expect(stat.type).toBe(String);
    expect(wrapper.props().stat).toBe('123456');

    expect(excerpt.type).toBe(String);
    expect(wrapper.props().excerpt).toBe('Lorem ipsum dolor sit amet, consectetur.');

    expect(cols.type).toBe(Number);
    expect(wrapper.props().cols).toBe(3);

    expect(inverted.type).toBe(Boolean);
    expect(wrapper.props().inverted).toBe(false);
  });

  it('should render stat from prop with correct type', () => {
    const stat = '123456';
    const wrapper = shallow(CardStat, {
      propsData: {
        stat,
      },
    });
    expect(typeof wrapper.props().stat).toBe('string');
    expect(wrapper.props().stat).toBe(stat);
  });

  it('should render excerpt from prop with correct type', () => {
    const excerpt = 'Lorem ipsum dolor sit amet, consectetur.';
    const wrapper = shallow(CardStat, {
      propsData: {
        excerpt,
      },
    });

    expect(typeof wrapper.props().excerpt).toBe('string');
    expect(wrapper.props().excerpt).toBe(excerpt);
  });

  it('should accept cols prop with correct type', () => {
    const cols = 3;
    const wrapper = shallow(CardStat, {
      propsData: {
        cols,
      },
    });

    expect(typeof wrapper.props().cols).toBe('number');
    expect(wrapper.props().cols).toBe(cols);
  });

  it('should accept cols max = 3 and min = 2', () => {
    const wrapper = shallow(CardStat);
    const {
      cols,
    } = wrapper.vm.$options.props;

    expect(cols.validator && cols.validator(1)).toBeFalsy();
    expect(cols.validator && cols.validator(4)).toBeFalsy();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(CardStat, {
      propsData: {

      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
