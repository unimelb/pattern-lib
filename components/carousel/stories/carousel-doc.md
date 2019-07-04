## Carousel

The Carousel component receives an Array called `stories` to build the stories slider and story title with description. 

The component has timing option. 
 - By default the value is 12 second. You can change this by adding "timing" property to component. 
 - The valid options for timing property are `medium` (16 seconds) and `long` (20 seconds).

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
    timing="long"
  >
</carousel>
```