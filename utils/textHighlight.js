export default (words, query) => {
  const iQuery = new RegExp(query, 'ig');
  return words.toString().replace(iQuery, (matchedTxt) => (`<mark>${matchedTxt}</mark>`));
};
