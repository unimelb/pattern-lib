## Media Gallery

The Photo Gallery component receives an Array called `media` to build the gallery.
This component can be viewed in two types `In Page` and `Overlay`. This types should be specified in a component like an in the example below. This attribute is required.
The `Overlay` component uses ThumbnailGallery component to show page thumbnails. In images object you should set size for every image ( `1of1`, `1of2`, `1of3`, `1of4`).
Both components may have two types of media Video or image. This option is required for each media.
By the way, you can use the `ThumbnailGallery` component separately (look to Usage Thumbnails). Add `display-caption` attribute if you need to display captions.

Example:

```
:media='[
  {
      "id": 1,
      "src": "Vide url",
      "title": "Vide title",
      "description": "Vide description",
      "size": "Video in row",
      "type": "Video",
    },
    {
      "id": 2,
      "src": "Image url",
      "title": "Image title",
      "description": "Image description",
      "size": "Image in row",
      "type": "Image"
    },
]'
```

Usage:

```html
<media-gallery
    in-page
    :media="mediaData"
  >
</media-gallery>
<media-gallery
    overlay
    :media="mediaData"
  >
</media-gallery>
```

Usage:

```html
<thumbnails :media="mediaData" display-caption> </thumbnails>
```
