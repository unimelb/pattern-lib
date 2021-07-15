# Pattern Library

**Copyright &copy; 2017 - The University of Melbourne**

The contents of this repository have been produced by The University of Melbourne for internal use and must not be distributed without the express permission of The University of Melbourne.

[![Build Status](https://semaphoreci.com/api/v1/projects/6a44d24e-e1db-4adc-a948-2e0a4ebb6b4c/1516302/badge.svg)](https://semaphoreci.com/unimelb/pattern-lib)

[![Netlify Status](https://api.netlify.com/api/v1/badges/196744c8-ae88-41d2-8373-31b015bf50db/deploy-status)](https://app.netlify.com/sites/pattern-lib-unimelb/deploys)

- [Development Preview](https://dev--pattern-lib-unimelb.netlify.com/) (Netlify deploy from `dev` branch)
- [Production](https://pattern-lib-unimelb.netlify.com/) (Netlify deploy from `master` branch)

## External usage

- [How to use the library](docs/how-to-use.md) - how this library externally

## Getting started

The design system requires:

- [Node](https://nodejs.org/en/) (~6.11.3)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/) (latest version)

```bash
# 1. Clone the repository.
git clone https://github.com/unimelb/pattern-lib.git

# 2. Enter your newly-cloned folder.
cd pattern-lib

# 3. Copy the env file.
cp .env.example .env

# 4. Copy the git pre-push hook
cp pre-push.sh .git/hooks/pre-push

# 4. Install dependencies. Make sure yarn is installed: https://yarnpkg.com/lang/en/docs/install
yarn

# 5. Read the documentation linked below.
```

## Development

- [Contributing Guidelines](CONTRIBUTING.md)

Storybook is the main development environment.

- `yarn dev` - [http://localhost:7002/](http://localhost:7002/)
- `yarn build` to build the documentation site to `/.out/docs`. Environment variable `LOAD_EXTERNAL_ASSETS` controls whether the documentation site is to load the library assets locally (`false`) or from the CDN (`true`).

### Generator

This project includes generators to speed up common development tasks. Commands include:

```bash
# Generate a new component
yarn generate component
```

You will then be asked for the name of the component, this will be used to create a new folder with a minimal component layout and story

> **Note**: Always remember to add the new component to the file `index.js` inside of the folders `target/lib` and `target/vue`, that way the component will be exportable to `Matrix CMS` via `CDN` and `Vue` via `NPM`.

```bash
# Generate a new view component
yarn generate story
```

You will need to select the component from the list of folders, then confirm the selection by selecting `choose this directory`. You will then be asked to give the story a name.

> **Note**: This requires some special comments are added in the `stories/index.js` file. If it doesn't work make sure the comments are the same as in the template directory.

### Using a component in CMS

In Storybook: When adding the "how to use a component" documentation, add a description that clearly shows that ( in the CMS environment) a component must be used in the way of closing the tag explicitly, as shown in the folllowing example:

## Do not:

(In the CMS, self closing tags won't load the component:)

```bash
# self close the components
<my-new-component/>
```

## Do

(To be compatible with CMS, call the component this way:)

```bash
# explicity closing
<my-new-component></my-new-component>
```

> **Note**: Matrix CMS can only use the components in that way and must be in the `target/lib` folder as well. You can self-close a component when importing it in a parent component in the pattern-lib context. The rule described above applies just when the component is called in the CMS context. ie. footer component, which is used like this in CMS: `<page-footer-alt></page-footer-alt>` instead of `<page-footer-alt />`.

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

**See more Notes about the release process in the release.md section in docs:**
[Docs section](https://github.com/unimelb/pattern-lib/tree/master/docs)

## Deployment

To deploy to production:

1. Bump the `version` number in `package.json` (cf. note below).
1. Commit the version change to the `dev` branch.
1. Create a pull request to merge the `dev` branch into `master` - e.g. "Deploy v1.0.1".
1. Wait for the mandatory checks to pass then select "Rebase and merge" (cf. note below).

Semaphore then automatically builds the library and syncs the output files to S3. If the version you're deploying had been previously deployed, you'll need to invalidate the files on the CDN (AWS Cloudfront) or wait a day or so for this to happen automatically. Once the library is deployed, follow the release process below.

> **Note on versioning**: the version number follows the [semver](http://semver.org/) convention `MAJOR.MINOR.PATCH`, where: `MAJOR` corresponds to a breaking change (e.g. a change in a component's markup), `MINOR` to a new feature (e.g. a new component, a new feature for an existing component, etc.), and `PATCH` to a bug fix or under-the-hood change (e.g. code clean-up, performance improvement, etc.)

> **Note on rebase**: rebasing `dev` onto `master` avoids creating a merge commit that would require merging `master` back into `dev`.

### Semi-automatic deployment to dev

Pre-release builds can be created like this (using the git pre-push hook behind the scenes):

1. Check out a clean `dev` branch
1. in bash `git push`
  - This will increment the pre-release version number and make a commit to your local repository
1. in bash `git push` again
  - You will be prompted that this will trigger a build. Answer 'y'
  - This will push (only) your version number change commit to the remote `dev` repo
1. After the normal checks a build with the new version will be triggered by Semaphore

> **Note on pre-release versions**: These are legitimate [semver](http://semver.org/) versions. They have the format MAJOR.MINOR.PATCH-beta.NUMBER. **Only** these pre-release versions will be published on `dev`.

## Testing

### How could you test before going live?

> The `dev` branch is set up into `Semaphore CI` to deploy into the AWS S3 Bucket in a folder called `latest` where the `CMS` team can appoint to `latest` and test it out before go to `production`.

> Each `pull request` that is opened, also is automatically generated a comment with a preview link to test it.

> **Note**: Always check the `Semaphore CI` check into your `pull request` and make sure is building properly, before merge into `dev`.

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

### Visual snapshot testing

You can run visual snapshot testing using `yarn test:snapshots`. This compares your changes against the latest visual snapshot.  Failed snapshot tests will show a visual diff comparison in `snapshots/__tests__/__image_snapshots__/__diff_output__`.

If you wish to update the snapshots with your changes run `yarn test:e2e:updatesnapshots`.

## Developer documentation

- [Documenting stories](docs/docs.md) - how to customise the content of the README panel for each story
- [Icons](docs/icons.md) - how to add new icons, and how to use icons in CSS and Vue components
- [Contributing](CONTRIBUTING.md) - how to get involved and contribute code

## Example websites

- The following UoM websites are using these components on the new Squiz CMS (Gen 2). Documentation on how to use these components in Edit+ [Gen 2 documentation](https://matrix-cms.unimelb.edu.au/web/mce)

- [University Home Page](https://unimelb.edu.au)
- [About Us](https://about.unimelb.edu.au)
- [Brand Hub](https://brandhub.unimelb.edu.au)
- [MSpace](https://mspace.unimelb.edu.au)
