# Pattern Library

**Copyright &copy; 2017 - The University of Melbourne**

The contents of this repository have been produced by The University of Melbourne for internal use and must not be distributed without the express permission of The University of Melbourne.

[![Build Status](https://semaphoreci.com/api/v1/projects/6a44d24e-e1db-4adc-a948-2e0a4ebb6b4c/1516302/badge.svg)](https://semaphoreci.com/unimelb/pattern-lib)


## Set-up

The design system requires Node.js ~6.11.3, and the latest version of [yarn](https://yarnpkg.com/en/). To set it up, run:

```
git clone https://github.com/unimelb/pattern-lib.git
cd pattern-lib
cp .env.example .env
yarn
```


## Development

Storybook is the main development environment.

- `yarn dev` - [http://localhost:7002/](http://localhost:7002/)
- `yarn build` to build the documentation site to `/.out/docs`. Environment variable `LOAD_EXTERNAL_ASSETS` controls whether the documentation site is to load the library assets locally (`false`) or from the CDN (`true`).

### Targets

#### UI library - `targets/lib`

The main UI library for use in the CMS. The target provides a local development environment for testing purposes.

- `yarn start:lib` - [http://localhost:7003/](http://localhost:7003/).
- `yarn build:lib` to compile the library to `.out/lib/<version>`, including `ui.css`, `ui.js`, `sprite.svg`, and SVG assets in `components/shared`. You can then use `http-server` or another static file server to serve the output directory.

The following environment variables are available to configure the behaviour of `yarn build:lib`:

- `LOAD_EXTERNAL_ASSETS` controls whether the library is to load its assets locally (`false`) or from the CDN (`true`).
- `LIB_EMIT_HTML` controls whether to emit the demo HTML file - set it to `true` to emit the file.
- `LIB_LOAD_VERSION` controls which version of the library to load in the demo:
  - leave it blank to load the local bundles (e.g. to test a new feature),
  - set it to `auto` to load the latest version from the CDN (i.e. the version specified in `package.json`),
  - set it to a specific version number to load that version from the CDN - e.g. `0.0.12` (no `v` prefix).

#### Vue library - `targets/vue`

The library with all the Vue components for use in single-page apps and other Vue-based projects.

- `yarn build:vue` to compile the library to `.out/vue.js`.

### Linting

CSS files are linted on the fly with stylelint. The configuration file, `.stylelintrc`, extends two shared configuration: [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) and [`stylelint-config-property-sort-order-smacss`](https://github.com/cahamilton/css-property-sort-order-smacss/blob/master/index.js).

JS files and single-file Vue components are linted on the fly with ESLint. The configuration file, `.eslintrc`, extends two shared configurations: [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [`plugin:vue/recommended`](https://github.com/vuejs/eslint-plugin-vue)

For your own sanity, make sure to install your code editor's ESLint and stylelint extensions. The following commands are available for on-demand linting and fixing:

- `yarn lint`
- `yarn lint:fix`
- `yarn lint:css`
- `yarn lint:css --fix`
- `yarn lint:js`
- `yarn lint:js --fix`

### Generator

#### Components

New components can be scaffolded by running:

- `yarn generate component`

You will then be asked for the name of the component, this will be used to create a new folder with a minimal component layout and story.


#### Stories

New stories can be scaffolded too by running:

- `yarn generate story`

You will need to select the component from the list of folders, then confirm the selection by selecting `choose this directory`. You will then be asked to give the story a name.

> **Note** This requires some special comments are added in the stories/index.js file. If it doesn't work make sure the comments are the same as in the template directory


## Release process

**At the start of a new release sprint:**

- Create a milestone called `next-release`.

**Throughout the release sprint:**

- Assign the appropriate `pr-` label to every new PR: `pr-major` if it contains a breaking change, `pr-minor` if it adds a new feature, `pr-patch` in all other cases.
- Assign issues and PRs to `next-release` as they are resolved/merged.
- Assign additional labels to issues when relevant (e.g. `bug`, `chore`, `feature`, etc.)

**At the end of the release sprint:**

1. Look at all the PRs that were assigned to `next-release` throughout the sprint and identify the highest-level of change (major, minor or patch). Deduce the next release's version number and rename the milestone accordingly.
1. Create a new release notes draft based on the following template: `.github/RELEASE_NOTES_TEMPLATE.md`.
1. Write the release notes by going through all the issues and PRs assigned to the milestone.
1. Deploy to production (cf. next section).
1. Once the library and documentation sites are deployed, publish the release notes and close the milestone.
1. Share the ZenHub milestone report with stakeholders.


## Deployment

To deploy to production:

1. Bump the `version` number in `package.json` (cf. note below).
1. Commit the version change to the `dev` branch.
1. Create a pull request to merge the `dev` branch into `master` - e.g. "Deploy v1.0.1".
1. Wait for the mandatory checks to pass then select "Rebase and merge" (cf. note below).

Semaphore then automatically builds the library and syncs the output files to S3. If the version you're deploying had been previously deployed, you'll need to invalidate the files on the CDN (AWS Cloudfront) or wait a day or so for this to happen automatically. Once the library is deployed, follow the release process below.

> **Note on versioning**: the version number follows the [semver](http://semver.org/) convention `MAJOR.MINOR.PATCH`, where: `MAJOR` corresponds to a breaking change (e.g. a change in a component's markup), `MINOR` to a new feature (e.g. a new component, a new feature for an existing component, etc.), and `PATCH` to a bug fix or under-the-hood change (e.g. code clean-up, performance improvement, etc.)

> **Note on rebase**: rebasing `dev` onto `master` avoids creating a merge commit that would require merging `master` back into `dev`.


## Testing

Supported browsers:
- last two versions of Chrome, Firefox and Edge
- IE 11
- Safari 8+
- iOS 8.4+
- Android 4.4+
- Firefox ESR (v52.x)

Recommended mobile devices for testing:
- iPhone 4S
- iPhone 6
- iPad 2
- Galaxy s5


## Developer documentation

- [Documenting stories](docs/docs.md) - how to customise the content of the README panel for each story
- [Icons](docs/icons.md) - how to add new icons, and how to use icons in CSS and Vue components
