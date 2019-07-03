## Card News with Tag Component

The component props are

- thumb
- title
- href
  > The `thumb` and `title` will be clickable pointing to this href.
- excerpt
- tags
  > An array of href and value eg: 
```json 
  [{
    href: 'https://www.unimelb.edu.au/',
    value: 'tag1',
  },
  {
    href: 'https://www.unimelb.edu.au/',
    value: 'tag2',
  },
  {
    href: 'https://www.unimelb.edu.au/',
    value: 'tag3',
  },
  {
    href: 'https://www.unimelb.edu.au/',
    value: 'tag4',
  },
  {
    href: 'https://www.unimelb.edu.au/',
    value: 'tag5',
  },
  {
    href: 'https://www.unimelb.edu.au/',
    value: 'tag super hiper ultra mega long',
  }]
```

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
  <a href="/">View article ></a>
</template>
```
