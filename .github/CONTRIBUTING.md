# Contribution guidelines

- Merge features and bug fixes into the `dev` branch.
- Merge `dev` into `master` only when releasing a new version.

- Inject as little markup as possible with JS -- only inject to work around CMS limitations.
- Don't make markup or content restrictive (e.g. number of items, length of heading, etc.) -- instead, deal with edge cases as best as possible.
- Don't document usage recommendations -- instead, use stories to demonstrate both ideal and edge cases.

- Use BEM, [selector nesting](https://github.com/postcss/postcss-nested) and [CSS Next features](http://cssnext.io/features/).
- Use ES6 and favour functional programming over imperative programming (e.g. use `map`, `reduce`, etc. rather than `for` loops).
