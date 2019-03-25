## Photo Gallery In Page

The Photo Gallery Pop Over component receive an Array called `images` to build gallery. This component uses Thumbnails component to show page thumbnails. In images object you should set size for every image ( '1of1', '1of2', '1of3', '1of4').

Example:

```
:images='[
  {
      "id": 1,
      "src": "Image url",
      "title": "Image title",
      "description": "Image description",
      "size": "Image in row"
    },
    {
      "id": 2,
      "src": "Image url",
      "title": "Image title",
      "description": "Image description",
      "size": "Image in row"
    },
]'
```

Usage:

```html
<photo-gallery-pop-over images="[
  {
    'id': 1,
    'src': 'http://pandaznaet.ru/wp-content/uploads/2015/11/kak-budut-vyglyadet-supergeroi-na-pensii-3.jpg',
    'title': 'Image 1',
    'description': 'Lorem ipsum dolor sit amet.',
    'size': '1of2'
  },
  {
    'id': 2,
    'src': 'http://pandaznaet.ru/wp-content/uploads/2015/11/kak-budut-vyglyadet-supergeroi-na-pensii-4.jpg',
    'title': 'Image 2',
    'description': 'Lorem ipsum dolor sit amet.',
    'size': '1of2'
  }]'>
</photo-gallery-in-page>
```