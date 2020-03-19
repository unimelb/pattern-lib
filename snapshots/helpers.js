const viewports = [
  {
    width: 1366,
    height: 768,
  },
  {
    width: 320,
    height: 568,
  },
];

const formatUrl = ({ url, story }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedStory = encodeURIComponent(story);

  return `http://127.0.0.1:5000/iframe?selectedKind=${encodedUrl}&selectedStory=${encodedStory}`;
};

export {
  viewports,
  formatUrl,
};
