## Vertical Events Card Component

The Generic Card component can be created within 3 different options of views `(1/2/3 columns)`.

The component props are

- thumb
- title
- cols
  > Cols props can be more then `0` and must be less then `3`.
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
  <a href="/">View generic details ></a>
  <a href="/">View generic staff ></a>
</template>
```
