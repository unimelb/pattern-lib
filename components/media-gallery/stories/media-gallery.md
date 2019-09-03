## In-page Media Gallery

The Media Gallery component receives an *array* called `items` to build the gallery.

Each item can either be an embedded video or image.  You can specify these by `type` in the *array object*.

Usage:

```html
<media-gallery :items='[
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
  ]'></media-gallery>
```