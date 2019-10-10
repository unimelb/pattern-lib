import {
  shallow,
  mount,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import ResponsiveTable from '../ResponsiveTable.vue';
import CompactedTable from '../CompactedTable.vue';
import BootstrapCMSTables from '../BootstrapCMSTables';

expect.extend(toHaveNoViolations);

describe('Bootstrap CMS Tables', () => {
  it('should render a responsive table', () => {
    const template = '<table></table>';

    document.body.innerHTML = template;

    BootstrapCMSTables();

    expect(document.querySelectorAll('responsive-table')).toHaveLength(1);
  });

  it('should not render a responsive table', () => {
    const template = '<table class="table--is-not-responsive"></table>';

    document.body.innerHTML = template;

    BootstrapCMSTables();

    expect(document.querySelectorAll('responsive-table')).toHaveLength(0);
  });

  it('should render a compacted table', () => {
    const template = '<table class="table--is-compacted"></table>';

    document.body.innerHTML = template;

    BootstrapCMSTables();

    expect(document.querySelectorAll('compacted-table')).toHaveLength(1);
  });

  it('should not wrap table with <compacted-table> if manually wrapped', () => {
    const template = `<compacted-table>
      <table class="table--is-compacted"></table>
    </compacted-table>`;

    document.body.innerHTML = template;

    BootstrapCMSTables();

    expect(document.querySelectorAll('compacted-table')).toHaveLength(1);
  });

  it('should not wrap table with <responsive-table> if manually wrapped', () => {
    const template = `<responsive-table>
      <table></table>
    </responsive-table>`;

    document.body.innerHTML = template;

    BootstrapCMSTables();

    expect(document.querySelectorAll('responsive-table')).toHaveLength(1);
  });
});

describe('Responsive Table', () => {
  it('should match snapshot', () => {
    const result = shallow(ResponsiveTable).element;
    expect(result).toMatchSnapshot();
  });

  it('should render a table', () => {
    const wrapper = shallow(ResponsiveTable, {
      slots: {
        default: '<table></table>',
      },
    });

    expect(wrapper.find('table').exists()).toBe(true);
  });
});

describe('Compacted Table', () => {
  it('should match snapshot', () => {
    const result = shallow(CompactedTable).element;
    expect(result).toMatchSnapshot();
  });

  it('should render a table', () => {
    const wrapper = shallow(CompactedTable, {
      slots: {
        default: '<table></table>',
      },
    });

    expect(wrapper.find('table').exists()).toBe(true);
  });

  it('should add class for mobile headings', () => {
    const wrapper = mount(CompactedTable, {
      slots: {
        default: `<table class="table--is-compacted">
          <tbody>
            <tr class="table__row--header">
              <th>This becomes mobile heading</th>
            </tr>
          </tbody>
        </table>`,
      },
    });

    expect(wrapper.classes().indexOf('compacted-table--headings')).toBeGreaterThan(0);
  });

  it('should add the first td content to data-mobile-heading', () => {
    const wrapper = shallow(CompactedTable, {
      slots: {
        default: `<table class="table--is-compacted">
          <tbody>
            <tr>
              <td>Faculty of Architecture, Building and Planning</td>
              <td>Professor Julie Willis</td>
              <td>Loreum Ipsum</td>
            </tr>
          </tbody>
        </table>`,
      },
    });

    expect(wrapper.find('td').attributes().class).toBe('table__mobile-title');
    expect(wrapper.find('tr').attributes()['data-mobile-heading']).toEqual('Faculty of Architecture, Building and Planning');
  });

  it('ResponsiveTable Component throws no accessibility violations', (done) => {
    const html = shallow(ResponsiveTable).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });

  it('CompactedTable Component throws no accessibility violations', (done) => {
    const html = shallow(CompactedTable).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
