
# Quick start
Looking to quickly add pattern-lib to your project? Use the CDN link.

## CSS
Copy-paste the stylesheet <link> into your <head> to load our CSS.

```html
<link rel="stylesheet" href="https://d2glwx35mhbfwf.cloudfront.net/v{input-version-number-here}/ui.min.css">
```

## JS
Many of our components require the use of JavaScript to function. So you would need to add the JS as well.

```html
<script src="https://d2glwx35mhbfwf.cloudfront.net/vv{input-version-number-here}/ui.min.js"></script>
```

### Usage example:

You can just copy the RAW html markup of the components or could be using as a web component like:

```html
<my-new-component></my-new-component>
```

# Using as NPM Package:

- [Pattern-lib NPM](https://www.npmjs.com/package/@unimelb/pattern-lib-vue)

## JS
```bash
npm i @unimelb/pattern-lib-vue
```

or

```bash
yarn add @unimelb/pattern-lib-vue
```

### *NOTE*: as a NPM package it only imports the JavaScript and not the CSS of the library, you still required to add the CSS.

## CSS
Copy-paste the stylesheet <link> into your <head> to load our CSS.

```html
<link rel="stylesheet" href="https://d2glwx35mhbfwf.cloudfront.net/v{input-version-number-here}/ui.min.css">
```

## Icons

### *NOTE*: the icons are not exported via and would required the SpriteSheet to be added in your project.


## Usage example:

Import the desired component from the library in your script section:

```html
import { MyNewComponent } from "@unimelb/pattern-lib-vue";
```

```html
<MyNewComponent></MyNewComponent>
```



