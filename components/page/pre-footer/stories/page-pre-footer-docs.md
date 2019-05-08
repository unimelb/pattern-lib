## Page Pre-footer Component

The Pre-footer component accepts 2 max slots for links with svg icons and 8 max slots for social media icons links.
Non-social links should be wrapped in 
```html
<template></template>
``` 
tag. Inside this `template` tag can be anything but the styles that implemented on the component side will work only for `svg` and `a` tags.

The social slots should be implemented via `a` tag. Inside `a` tag should be social svg icon.


### Example
```html
  <page-pre-footer>
    <template slot="link-1">
      <SvgIcon
        name="envelope"
        width="25"
        height="25" />
      <a href="/">Sign up for e-news</a>
    </template>
    <template slot="link-2">
      <SvgIcon
        name="newspaper"
        width="25"
        height="25" />
      <a href="/">Read our blog</a>
    </template>
    <a
      slot="social-1"
      href="#">
      <SvgIcon
        name="facebook"
        width="30"
        height="30" />
    </a>
    <a
      slot="social-2"
      href="#">
      <SvgIcon
        name="twitter"
        width="30"
        height="30" />
    </a>
    <a
      slot="social-3"
      href="#">
      <SvgIcon
        name="linkedin"
        width="30"
        height="30" />
    </a>
  </page-pre-footer>
``` 
