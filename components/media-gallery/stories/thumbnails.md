## Thumbnail Gallery

The Media Gallery component receives an *array* called `items` to build the gallery.

Each item can either be an embedded video or image.  You can specify these by `type` in the *array object*.

You can set the number of columns to display the items using `columns="2"`, `columns="3"`, or `columns="4"`.

You can display captions underneath the thumbnails by using `display-caption`.

Usage:

```html
<media-gallery 
  :items='[
  {
      "src": "",
      "title": "",
      "description": "",
      "type": "video",
      "altText": ""
    },
    {
      "src": "",
      "title": "",
      "description": "",
      "type": "image",
      "altText": ""
    },
  ]' 
  columns="4"
  display-caption
  show-thumbnails>
  </media-gallery>
```
