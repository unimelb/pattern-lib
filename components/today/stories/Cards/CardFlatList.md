# Card Flat List

#### Usage:

this component accept an image or video as a prop:

| props    	   | type    	|
|------------- |---------	|
| title    	   | String  	|
| description     | String   |
| cta  | Object   |
| img          | Object   |
| video          | Object   |

```html
  <card-flat-list :items="[
        {
          title: 'Our campuses',
          description: 'Located a short walk from central Melbourne, our main campus anchors a network of three urban innovation precincts and six specialist campuses located throughout Victoria.',
          cta: { href: 'https://www.unimelb.edu.au/', text: 'Virtual campus tours' },
          video: { src: 'https://player.vimeo.com/video/566879573', videoApi: false },
        },
        {
          title: 'Research facilities',
          description: 'Our bold new engineering and design campus at Fishermans Bend, where students and researchers collaborate with industry to tackle real world challenges.',
          cta: { href: 'https://www.unimelb.edu.au/', text: 'More about labs and workshops' },
          img: { src: 'https://picsum.photos/seed/1/540/360', alt: 'Image for example purposes.' },
        },
        {
          title: 'Libraries, museums, galleries and collections',
          description: 'Access leading cultural collections and workspaces through our network of libraries and museums, as well as qualified library staff.',
          cta: { href: 'https://www.unimelb.edu.au/', text: 'Explore our cultural facilities' },
          img: { src: 'https://picsum.photos/seed/1/540/360', alt: 'Image for example purposes.' },
        },
        {
          title: 'Accommodation',
          description: 'There is a range of student accommodation  available to you, including University owned and partnered accommodation and traditional residential colleges.',
          cta: { href: 'https://www.unimelb.edu.au/', text: 'Discover accommodation' },
          img: { src: 'https://picsum.photos/seed/1/540/360', alt: 'Image for example purposes.' },
        },
      ]"><card-flat-list>
```