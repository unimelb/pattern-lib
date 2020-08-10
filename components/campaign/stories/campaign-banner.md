
## Campaign banner

The CampaignBanner component has a couple of props need to be described:

- `background` expects to take an object like: 
```js
  { 
    large: '/path/to/large/image',
    medium: '/path/to/medium/image',
    small: '/path/to/small/image'
  }
```
`large` property is required, others are optional. In absence of `medium` and `small` properties `large` will be displayed for all viewport width values;
- to improve the a11y be sure to provide a custom `background-alt-text` property; 

Usage for the rest of properties is straightforward.

#### HTML Template

```html
<campaign-banner
    :background="backgroundObjectReference"
    background-alt-text="woman diver"
    href="#main"
    text="Lorem ipsum dolor sit amet, consectetur"
    button-text="learn more"
    show-button="true"></campaign-banner>
```
