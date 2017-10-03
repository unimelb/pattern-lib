# Icons

## How to add an icon

1. Make sure that the icon's SVG document is square and that the icon itself is centred within that document. The icon should meet the edges of the document in at least one direction (i.e. horizontally or vertically). The dimensions of the document don't really matter, but small numbers can lead to a smaller file size.
2. Export the icon as "optimised SVG" (the term used in Inkscape), making sure to enable viewboxing (i.e. it should end up with a`viewBox` attribute).
3. Optimise the icon further with SVGO: https://jakearchibald.github.io/svgomg/ and remove any `fill` attribute.
4. Place the icon at the root of the `components/icons` folder and give it a meaningful, hyphenated name - e.g. `chevron-right`.
5. If needed, add the icon to the sprite as a `symbol`.


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

If an icon exceeds 1 kB, it is loaded as an external file like other assets (`background-image: url('<localhost-or-cdn>/chevron-right.svg')`. The set-up only applies to SVG icons in the `components/icons/` folder (aliased to `icons/` for convenience) that are referenced from a CSS file with `url('~icons/...')`.


## How to use icons in Vue components

Components that are meant to become container templates in the CMS don't have markup restrictions and can therefore include inline SVG. To add an icon to such a component, use the `Icon` component (registered globally for convenience). The icon must be present in the sprite file, `components/icons/sprite.svg`.

```html
<!-- USAGE -->
<icon name="chevron-right" />

<!-- OUTPUT -->
<svg role="presentation" focusable="false">
  <use xlink:href="#chevron-right" />
</svg>

<!-- WITH CLASS & WIDTH/HEIGHT -->
<icon class="my-component__icon" name="chevron-right" width="24" height="24" />
```

Many browsers have issues dealing with responsive SVGs (e.g. `width: 100%;`). For icons especially, it is better for the `svg` element to have a fixed width and height. You can do this by passing a `width` and `height` to the `Icon` component, but CSS is more practical as you can use relative units and resize the icon at different breakpoints.

```html
<icon class="my-component__icon" name="chevron-right" />
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

A small library called [Ike.js](https://github.com/dwest-teo/ike.js) loads the SVG sprite asynchronously and inlines it into the page on the fly. It caches the sprite in local storage for faster access on subsequent page views.
