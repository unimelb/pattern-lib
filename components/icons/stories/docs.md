### How to use icons in the CMS

- Some classes, like `btn--icon`, come with icons out of the box.
- Icons used in container templates are to be inlined in the markup just as they appear in the documentation -- i.e.
  ```html
  <svg ...>
    <use xlink:href="#icon-<name>" />
  </svg>
  ```
