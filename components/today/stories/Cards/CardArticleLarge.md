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
    title="Test title"
    category="Test category"
    description="Nisi labore mollit occaecat nisi et irure esse mollit veniam in."
    :img="{ src: 'https://picsum.photos/seed/1/540/360', alt: 'Image for example purposes.' }">
    </card-article-large>
```