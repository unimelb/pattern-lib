## Photo Gallery In Page

The Photo Gallery In Page component receive an Array called `images` to build gallery.

Example:

```
:images='[
  {
      "id": 1,
      "src": "Image url",
      "title": "Image title",
      "description": "Image description"
    },
    {
      "id": 2,
      "src": "Image url",
      "title": "Image title",
      "description": "Image description"
    },
]'
```

Usage:

```html
<photo-gallery-in-page images="[
  {
    'id': 1,
    'src': 'http://pandaznaet.ru/wp-content/uploads/2015/11/kak-budut-vyglyadet-supergeroi-na-pensii-3.jpg',
    'title': 'Image 1',
    'description': 'Lorem ipsum dolor sit amet.'
  },
  {
    'id': 2,
    'src': 'http://pandaznaet.ru/wp-content/uploads/2015/11/kak-budut-vyglyadet-supergeroi-na-pensii-4.jpg',
    'title': 'Image 2',
    'description': 'Lorem ipsum dolor sit amet.'
  }]'>
</photo-gallery-in-page>
```