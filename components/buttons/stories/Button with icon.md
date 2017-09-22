## Button with icons

This uses an svg icon to display

```html

<a class="btn" href="href">
  <span class="push-icon">
    <!-- Button Label -->
    <svg width="width" height="height" focusable="false" role="presentation">
      <use xlink:href="sprite + '#' + name" />
    </svg>
  </span>
</a>
```