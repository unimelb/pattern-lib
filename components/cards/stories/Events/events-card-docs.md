
## Card Events component

The Card Events component can be created within 1 options of views - Full width.
The wrapper of card list should have 'grid grid--1col' classes.

The component props are

- thumb
- title
- href
  > The `thumb` and `title` will be clickable pointing to this href.
- excerpt

You can add up to 3 sub-titles via slots

`sub-title-1`, `sub-title-2`, `sub-title-3`

```html
<div slot="sub-title-1" class="sub-title">
  <span>Sub title 1</span>
</div>
<div slot="sub-title-2" class="sub-title">
  <span>Sub title 2</span>
</div>
<div slot="sub-title-3" class="sub-title">
  <span>Sub title 3</span>
</div>
```

The component has a slot for links which can be used like:

```html
<template slot="links">
  <a href="/" aria-label="View details of the event name">View generic details ></a>
  <a href="/" aria-label="View details of the staff name">View generic staff ></a>
</template>
```
