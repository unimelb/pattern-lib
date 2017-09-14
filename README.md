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
2. Visit [http://localhost:7002/](http://localhost:7002/)

- To build the documentation site to `/.out/docs`, run `yarn run build:docs`.
- To build the library for production (e.g. for debugging purposes) to `.out/lib/<version>`, run `yarn run build:lib`.


## Deployment

To deploy to production:

- Check `version` is correct in `package.json`.
- Create a pull request to merge the `dev` branch to `master`.
- Wait for the mandatory checks to pass and merge.

Semaphore then automatically builds the library and syncs the output files to S3. If the version you're deploying had been previously deployed, you'll need to invalidate the files on the CDN (AWS Cloudfront) or wait a day or so for it to happen automatically.


## Testing

Supported browsers:
- last two versions of Chrome, Firefox and Edge
- IE 9, 10 and 11
- Safari 8+
- iOS 8.4+
- Android 4.4+
- Firefox ESR (v52.x)

Recommended mobile devices for testing:
- iPhone 4S
- iPhone 6
- iPad 2
- Galaxy s5
