## Carousel

The Carousel component receives an Array called `stories` to build the stories slider and story title with description.

Example:

```
:stories='[
  {
    src: 'test1',
    altText: 'test',
    title: 'Story 1',
    description: 'Story 2 description',
    buttonText: 'Register',
    buttonHref: 'google.com',
  },
  {
    src: 'test2',
    altText: 'test',
    title: 'Story 2',
    description: 'Story 2 description',
    buttonText: 'Login',
    buttonHref: 'google.com',
  },
]'
```

Usage:

```html
<carousel
  stories="[
      {
          src: 'test1',
          altText: 'test',
          title: 'Story 1',
          description: 'Story 2 description',
          buttonText: 'Register',
          buttonHref: 'google.com',
        },
        {
          src: 'test2',
          altText: 'test',
          title: 'Story 2',
          description: 'Story 2 description',
          buttonText: 'Login',
          buttonHref: 'google.com',
        }
    ]"
  >
</carousel>

```

