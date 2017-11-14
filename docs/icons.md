# Icons

## How to add an icon to the sprite

1. Open the icon a code editor.
1. If the icon has a `viewBox` attribute, remove it.
1. Give it a size of 10x10 with the following attributes: `width="10" height="10"`.
1. Open the icon in Inkscape.
1. Resize the icon's shape so it fits within a 10x10 square. You can do this by setting the shape's width or height, whichever is bigger, to 10px (making sure to maintain proportiongs).
1. Center the shape within the document both horizontally and vertically.
1. Export the icon as "optimised SVG", making sure to enable viewboxing (i.e. it should end up with a `viewBox` attribute with value `0 0 10 10`).
1. Optimise the icon further with SVGO: https://jakearchibald.github.io/svgomg/ and remove any `fill` attribute.
1. Place the icon at the root of the `components/icons/sprite` folder and give it a meaningful, hyphenated name - e.g. `chevron-right`.
1. Import the icon from the sprite index: `components/icons/sprite/index.js`.


## How to use icons in CSS

Because CMS editors can't add SVG code inside WYSIWYG blocks, some icons should be declared as CSS background images (e.g. chevron icon in buttons).

```css
/* USAGE */
background-image: url('~icons/chevron-right.svg?fill=#fff');

/* OUTPUT */
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='7 3 14 14'%3E %3Cpath d='m8,7.42l4.58,4.58l-4.58,4.59l1.41,1.41l6,-6l-6,-6l-1.41,1.42z' fill='%23f00' /%3E %3C/svg%3E")
```

Sizing and positioning `background-image` icons is a bit complex but manageable. Here is a typical example:

```css
&::after {
  content: '';
  display: inline-block;
  vertical-align: -.05em; /* magic number for vertical centring (relative to `baseline`) */
  width: .75em; /* relative to font-size */
  height: .75em; /* square like the icon */
  background-image: url('~icons/chevron-right.svg?fill=#000');
  background-size: cover; /* scale icon to fit */
}
```

### Under the hood

The webpack configuration includes the following loaders:

- [svg-url-loader](https://github.com/bhovhannes/svg-url-loader) converts the icons to data URIs and encodes them for cross-browser support,
- [svg-fill-loader](https://github.com/kisenka/svg-fill-loader) allows specifying a fill colour as a query parameter.

If an icon exceeds 1 kB, it is loaded as an external file like other assets (`background-image: url('<localhost-or-cdn>/chevron-right.svg')`. The set-up only applies to SVG icons in the `components/icons/sprite` folder (aliased to `icons/` for convenience) that are referenced from a CSS file with `url('~icons/...')`.


## How to use icons in Vue components

Components that are meant to become container templates in the CMS don't have markup restrictions and can therefore include inline SVG. To add an icon to such a component, use the `SvgIcon` component (registered globally for convenience). The icon must be imported from the sprite index: `components/icons/sprite/index.js`.

```html
<!-- USAGE -->
<SvgIcon name="chevron-right" />

<!-- OUTPUT -->
<svg role="presentation" focusable="false">
  <use xlink:href="#icon-chevron-right" />
</svg>

<!-- WITH CLASS & WIDTH/HEIGHT -->
<SvgIcon class="my-component__icon" name="chevron-right" width="24" height="24" />
```

Many browsers have issues dealing with responsive SVGs (e.g. `width: 100%;`). For icons especially, it is better for the `svg` element to have a fixed width and height. You can do this by passing a `width` and `height` to the `SvgIcon` component, but CSS is more practical as you can use relative units and resize the icon at different breakpoints.

```html
<SvgIcon class="my-component__icon" name="chevron-right" />
```

```css
/**
 * (1) match height of nearby text (line-height included)
 * (2) keep icon square to match viewbox
 */
.my-component__icon {
  width: calc(var(--lh) * 1em); /* (2) */
  height: calc(var(--lh) * 1em); /* (1) */
}
```

### Under the hood

A small library called [Ike.js](https://github.com/dwest-teo/ike.js) loads the SVG sprite asynchronously and inlines it into the page on the fly. It caches the sprite in local storage for faster access on subsequent page views, so remember to clear your local storage after updating the sprite.
