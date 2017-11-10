import pretty from 'pretty';
import createStory from '../create-story';

import withReadme from 'storybook-readme/with-readme';
jest.mock('storybook-readme/with-readme');
jest.mock('.storybook/utils', () => ({
  codeBlock: (str) => str,
  htmlTemplate: () => '<html-template></html-template>',
  storyDecorator: () => ({ template: '<div><p>Test</p></div>' }),
}));

describe('createStory', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  test('should generate a README and wrap the story in a function', () => {
    const StoryComponent = { template: '<div></div>' };
    createStory(StoryComponent);

    expect(withReadme).toBeCalledWith(expect.any(String), expect.any(Function));
    expect(withReadme.mock.calls[0][1]()).toBe(StoryComponent);
  });

  test('should include the story\'s full source in the README by default', () => {
    const template = `
      <div>
        <p>Test</p>
      </div>
    `;

    createStory({ template });

    const readme = withReadme.mock.calls[0][0];
    expect(readme).toContain('Source');
    expect(readme).toContain(pretty(template));
  });

  test('should support generating an empty README', () => {
    createStory({
      template: '<div></div>',
      readme: { source: false },
    });

    const readme = withReadme.mock.calls[0][0];
    expect(readme).toBe('');
  });

  test('should support including custom docs in the README', () => {
    createStory({
      template: '<div></div>',
      readme: { custom: 'custom' },
    });

    const readme = withReadme.mock.calls[0][0];
    expect(readme).toContain('custom');
    expect(readme).toContain('Source'); // check "Source" section is still there
  });

  test('should support including the story\'s HTML template in the README', () => {
    createStory({
      template: '<div></div>',
      readme: {
        html: true,
        source: false,
      },
    });

    const readme = withReadme.mock.calls[0][0];
    expect(readme).toContain('HTML template');
    expect(readme).toContain('<html-template></html-template>');
  });

  test('should support including the story\'s minified source in the README', () => {
    createStory({
      template: `
        <div>
          <p>Test</p>
        </div>
      `,
      readme: {
        minified: true,
        source: false,
      },
    });

    const readme = withReadme.mock.calls[0][0];
    expect(readme).toContain('Minified source');
    expect(readme).toContain('<div><p>Test</p></div>');
  });

  test('should support including the story\'s decorated source in the README', () => {
    createStory({
      template: '<div></div>',
      readme: {
        decorated: true,
        source: false,
      },
    });

    const readme = withReadme.mock.calls[0][0];
    expect(readme).toContain('Decorated source');
    expect(readme).toContain(pretty(`
      <div>
        <p>Test</p>
      </div>
    `));
  });
});
