## Carousel

The Carousel component receives an Array called `stories` to build the stories slider and story title with description. 

The component has timing option. 
 - By default the value is 12 second. You can change this by adding "timing" property to component. 
 - The valid options for timing property are `medium` (16 seconds) and `long` (20 seconds).

The component has limitation for title and description:
- The title can be a maximum of 48 characters.
- Description maximum of 240 characters otherwise will be cut and added an ellipsis.

The component has image positioning attribute. 
  - you can choose inside of the story object how you wanna the position of the image to be. The options are:
    -  top 
    -  center
    -  bottom

Usage:

```json
<carousel
  :stories="[
  {
    "src": "https://finearts-music.unimelb.edu.au/about-us/margaret-lawrence-gallery/FC-Jack-Door-Banner-Crop-min.jpg",
    "imagePosition": "center",
    "altText": "test",
    "title": "Story 1 A long title to flow onto two lines and be truncated to one line",
    "description": "Quis consequat dolore eiusmod amet dolor laborum consequat enim occaecat magna. Quis consequat dolore eiusmod amet dolor laborum consequat enim occaecat magna. Quis consequat dolore eiusmod amet dolor laborum consequat enim occaecat magna dolore eiusmod amet dolor laborum consequat enim occaecat magna.",
    "buttonText": "Register",
    "buttonHref": "google.com"
  },
  {
    "src": "https://finearts-music.unimelb.edu.au/about-us/margaret-lawrence-gallery/UOM_PRIYANKA_Web_Banner_2000x1200px-min.jpg",
    "imagePosition": "top",
    "altText": "test",
    "title": "Story 2",
    "description": "Story 2 description",
    "buttonText": "Login",
    "buttonHref": "google.com"
  },
  {
    "src": "https://finearts-music.unimelb.edu.au/about-us/margaret-lawrence-gallery/3-min.jpg",
    "imagePosition": "top",
    "altText": "test",
    "title": "Story 3",
    "description": "Story 3 description",
    "buttonText": "Read",
    "buttonHref": "google.com"
  }
]"
    timing="long"
  >
</carousel>
```