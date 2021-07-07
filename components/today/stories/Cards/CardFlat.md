# Card Flat

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
  <card-flat
    title="Test Title"
    description="Consectetur culpa nostrud officia consequat ut mollit elit aliquip nisi consequat occaecat quis excepteur."
    :cta="{ href: 'https://www.unimelb.edu.au/', text: 'Cta button' }"
    :img="{ src: 'https://picsum.photos/seed/1/540/360', alt: 'Image for example purposes.' }" >
    </card-flat>

      <card-flat
    title="Test Title"
    description="Consectetur culpa nostrud officia consequat ut mollit elit aliquip nisi consequat occaecat quis excepteur."
    :cta="{ href: 'https://www.unimelb.edu.au/', text: 'Cta button' }"
    :video="{ src: 'https://player.vimeo.com/video/566879573' }" >
    </card-flat>
```