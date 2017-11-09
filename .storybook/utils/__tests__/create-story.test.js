import { cleanUpBooleanAttrs } from '../create-story';

describe('cleanUpBooleanAttrs', () => {
  test('should remove all empty attribute values', () => {
    const result = cleanUpBooleanAttrs('<div foo=""><p data-nested="">Nested</p></div>');
    expect(result).toBe('<div foo><p data-nested>Nested</p></div>');
  });

  test('should not affect other attributes', () => {
    const result = cleanUpBooleanAttrs('<div foo="bar"><p data-nested>Nested</p></div>');
    expect(result).toBe('<div foo="bar"><p data-nested>Nested</p></div>');
  });
});
