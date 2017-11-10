import codeBlock from '../code-block';

describe('codeBlock', () => {
  test('should wrap code in a markdown HTML code block by default', () => {
    const block = codeBlock('test');
    expect(block).toBe('```html\ntest\n```');
  });

  test('should support custom language identifiers', () => {
    const block = codeBlock('test', 'js');
    expect(block).toBe('```js\ntest\n```');
  });
});
