# Design System Rebrand

**Copyright &copy; 2017 - The University of Melbourne**

The contents of this repository have been produced by The University of Melbourne for internal use and must not be distributed without the express permission of The University of Melbourne.

[![Build Status](https://semaphoreci.com/api/v1/projects/6a44d24e-e1db-4adc-a948-2e0a4ebb6b4c/1516302/badge.svg)](https://semaphoreci.com/unimelb/web-templates-2017)


## Set-up

The design system requires Node.js v6.11.2, and the latest version of [yarn](https://yarnpkg.com/en/). To set it up, run:

```
git clone https://github.com/unimelb/design-system-rebrand.git
cd design-system-rebrand
cp .env.example .env
yarn
```


## Development

1. Run `yarn start`
1. Visit [http://localhost:7002/](http://localhost:7002/)

- To build the documentation site to `/.out/docs`, run `yarn run build:docs`.
- To build the library for production (e.g. for debugging purposes) to `.out/lib/<version>`, run `yarn run build:lib`.

### Linting

CSS is linted on the fly with stylelint. The configuration file, `.stylelintrc` extends two shared configuration: [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) and [`stylelint-config-property-sort-order-smacss`](https://github.com/cahamilton/css-property-sort-order-smacss/blob/master/index.js).

For your own sanity, make sure to install your code editor's stylelint extension. If you can't be bothered re-ordering properties and blocks manually, use: `yarn run fix:stylelint`.


## Deployment

To deploy to production:

1. Bump the `version` number in `package.json` (cf. note below).
1. Commit the version change to the `dev` branch.
1. Create a pull request to merge the `dev` branch into `master` - e.g. "Deploy v1.0.1".
1. Wait for the mandatory checks to pass then select "Rebase and merge" (cf. note below).

Semaphore then automatically builds the library and syncs the output files to S3. If the version you're deploying had been previously deployed, you'll need to invalidate the files on the CDN (AWS Cloudfront) or wait a day or so for this to happen automatically. Once the library is deployed, follow the release process below.

> **Note on versioning**: the version number follows the [semver](http://semver.org/) convention `MAJOR.MINOR.PATCH`, where: `MAJOR` corresponds to a breaking change (e.g. a change in a component's markup), `MINOR` to a new feature (e.g. a new component, a new feature for an existing component, etc.), and `PATCH` to a bug fix or under-the-hood change (e.g. code clean-up, performance improvement, etc.)

> **Note on rebase**: rebasing `dev` onto `master` avoids creating a merge commit that would require merging `master` back into `dev`.

### Release

Once the library is deployed:

1. Finalise the release notes, making sure that the title and tag name are correct (`vX.Y.Z`), then publish them.
1. Create a new release notes draft based on the following template: `.github/RELEASE_NOTES_TEMPLATE.md`.
1. Update the draft every time you merge a PR.


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

- [Icons](docs/icons.md) - how to add new icons, and how to use icons in CSS and Vue components
