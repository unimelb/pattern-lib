import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
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

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(AlumniProfiles).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
