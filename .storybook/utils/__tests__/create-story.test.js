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
    expect(readme).toEqual(expect.stringContaining('Source'));
    expect(readme).toEqual(expect.stringContaining(pretty(template)));
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
    expect(readme).toEqual(expect.stringContaining('custom'));
    expect(readme).toEqual(expect.stringContaining('Source')); // check "Source" section is still there
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
    expect(readme).toEqual(expect.stringContaining('HTML template'));
    expect(readme).toEqual(expect.stringContaining('<html-template></html-template>'));
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
    expect(readme).toEqual(expect.stringContaining('Minified source'));
    expect(readme).toEqual(expect.stringContaining('<div><p>Test</p></div>'));
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
    expect(readme).toEqual(expect.stringContaining('Decorated source'));
    expect(readme).toEqual(expect.stringContaining(pretty(`
      <div>
        <p>Test</p>
      </div>
    `)));
  });
});
