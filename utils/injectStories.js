const container = document.querySelector('#docs');

const requireComponent = require.context(
  // Look for files in the current directory
  'components/accordion/stories',
  // look in subdirectories
  true,
  // Include .vue files
  /\.vue$/
);

const Stories = requireComponent.keys().map(requireComponent);

// using webpack html loader
Stories.forEach((file) => {
  console.log(JSON.parse(JSON.stringify(file.default)));
  container.innerHTML += JSON.parse(JSON.stringify(file.default));
});
