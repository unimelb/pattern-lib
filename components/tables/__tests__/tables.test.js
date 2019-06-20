
import { shallow } from 'vue-test-utils';
import { toHaveNoViolations } from 'jest-axe';
import TableResponsive from '../TableResponsive.vue';
import TableCompacted from '../TableCompacted.vue';

import BootstrapCMSTables from '../BootstrapCMSTables';

expect.extend(toHaveNoViolations);

describe('Responsive Table', () => {
  it('should match snapshot', () => {
    const result = shallow(TableResponsive).element;
    expect(result).toMatchSnapshot();
  });

  it('should render a responsive table', () => {
    const template = `<div>
      <table></table>
    </div>`;

    document.body.innerHTML = template;

    BootstrapCMSTables();

    expect(document.querySelectorAll('table-responsive')).toHaveLength(1);
  });

  // test data-label
});

describe('Compacted Table', () => {
  it('should match snapshot', () => {
    const result = shallow(TableCompacted).element;
    expect(result).toMatchSnapshot();
  });

  it('should render a compacted table', () => {
    const template = `<div>
      <table class="table--compacted"></table>
    </div>`;

    document.body.innerHTML = template;

    BootstrapCMSTables();

    expect(document.querySelectorAll('table-compacted')).toHaveLength(1);
  });
});
