
## Campaign banner

The CampaignBanner component has a couple of props need to be described:

- `imgSources` expects to take an object like: 
```js
{
  large: [
    { url: 'path/to/large', pixelRatio: 1 },
    ...
  ],
  medium: [
    { url: 'path/to/medium', pixelRatio: 1 },
    ...
  ],
  small: [
    { url: 'path/to/small', pixelRatio: 2 },
    ...
  ],
},
```
`large` and `medium` properties are required, small is optional. In absence of the `small` property `medium` will be displayed for `max-width: 768px`. It is possible to provide as many sources as needed, letting a browser decide which image to load in order to make it look crisp on high-resolution devices with `device-pixel-ratio` 2, 3 and higher;
- to improve the a11y be sure to provide a custom `background-alt-text` property; 

Usage for the rest of properties is straightforward.

#### HTML Template

```html
<campaign-banner
    :img-sources="objectReference"
    background-alt-text="woman diver"
    href="#main"
    text="Lorem ipsum dolor sit amet, consectetur"
    button-text="learn more"
    :show-button="true"></campaign-banner>
```
