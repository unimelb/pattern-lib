## Photo Gallery In Page

The Photo Gallery In Page component receive an Array called `media` to build gallery.

Example:

```
:media='[
  {
      "id": 1,
      "src": "Image url",
      "title": "Image title",
      "description": "Image description",
      "type": "image"
    },
    {
      "id": 2,
      "src": "Video url",
      "title": "Video title",
      "description": "Video description",
      "type": "video"
    },
]'
```

Usage:

```html
<photo-gallery-in-page media="[
  {
    'id': 1,
    'src': 'http://pandaznaet.ru/wp-content/uploads/2015/11/kak-budut-vyglyadet-supergeroi-na-pensii-3.jpg',
    'title': 'Image 1',
    'description': 'Lorem ipsum dolor sit amet.',
    'type': 'image'
  },
  {
    'id': 2,
    'src': 'https://www.youtube.com/embed/nlF7qp5GNPI',
    'title': 'Video',
    'description': 'Lorem ipsum dolor sit amet.',
    'type': 'video'
  }]'>
</photo-gallery-in-page>
```
