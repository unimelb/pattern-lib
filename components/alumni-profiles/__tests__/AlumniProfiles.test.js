import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import AlumniProfiles from '../AlumniProfiles.vue';

expect.extend(toHaveNoViolations);

describe('AlumniProfiles', () => {
  it('should match snapshot', () => {
    const result = shallow(AlumniProfiles, {
      propsData: {
        name: '',
        text: '',
      },
    }).element;

    expect(result).toMatchSnapshot();
  });
});