
import { shallow } from 'vue-test-utils';
import { toHaveNoViolations } from 'jest-axe';
import ResponsiveTable from '../ResponsiveTable.vue';
import CompactedTable from '../CompactedTable.vue';

import BootstrapCMSTables from '../BootstrapCMSTables';

expect.extend(toHaveNoViolations);

describe('Responsive Table', () => {
  it('should match snapshot', () => {
    const result = shallow(ResponsiveTable).element;
    expect(result).toMatchSnapshot();
  });

  it('should render a responsive table', () => {
    const template = `<div>
      <table></table>
    </div>`;

    document.body.innerHTML = template;

    BootstrapCMSTables();

    expect(document.querySelectorAll('responsive-table')).toHaveLength(1);
  });

  it('should render not a responsive table', () => {
    const template = `<div>
      <table class="table--is-not-responsive"></table>
    </div>`;

    document.body.innerHTML = template;

    BootstrapCMSTables();

    expect(document.querySelectorAll('responsive-table')).toHaveLength(0);
  });

  // test data-label
});

describe('Compacted Table', () => {
  it('should match snapshot', () => {
    const result = shallow(CompactedTable).element;
    expect(result).toMatchSnapshot();
  });

  it('should render a compacted table', () => {
    const template = `<div>
      <table class="table--compacted"></table>
    </div>`;

    document.body.innerHTML = template;

    BootstrapCMSTables();

    expect(document.querySelectorAll('compacted-table')).toHaveLength(1);
  });
});
