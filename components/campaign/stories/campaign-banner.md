
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
- `wide-breakpoint` and `narrow-breakpoint` define viewport width where background changes source.  
They are optional and accept numeric values in CSS pixels. Default values are set to 768 and 480 accordinly.  
Small image will be displayed below `narrow-breakpoint`, medium between `wide` and `narrow`  
and large above `wide` (if all of these are provided in `background`);

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
