# Design System Rebrand

**Copyright &copy; 2017 - The University of Melbourne**

The contents of this repository have been produced by The University of Melbourne for internal use and must not be distributed without the express permission of The University of Melbourne.


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

To build the assets for production (e.g. for debugging purposes), run `yarn run build`. The compiled targets can be found in the `/build` directory.


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
