## Card Article Large

The component `CardArticleLarge` acceps the following props:

| props    	   | type    	|
|------------- |---------	|
| href   	     | String  	|
| title    	   | String  	|
| category     | String   |
| description  | String   |
| img          | Object   |

#### HTML Template

```html
  <card-article-large
    href="https://www.unimelb.edu.au/"
    category="Latest research"
    title="How Indigenous knowledge can save our environment"
    description="Wiradjuri man and geographer Associate Professor Michael-Shawn Fletcher explores the guiding principles of landscape management to create resources or resource availability in a landscape and to provide a secure place to live."
    :img="{ src: 'https://picsum.photos/seed/1/540/360', alt: 'Image for example purposes.' }">
    </card-article-large>
```