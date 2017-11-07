/**
 * Wrap code in markdown code block.
 * @param {String} raw
 * @param {String} lang
 * @return {String}
 */
export default function codeBlock(raw, lang = 'html') {
  return '```' + lang + '\n' + raw + '\n```'; // eslint-disable-line prefer-template
}
