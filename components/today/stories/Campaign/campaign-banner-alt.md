
## Campaign banner alt

The component `CampaignBannerAlt` acceps the following props:

| props    	| type    	|
|----------	|---------	|
| title   	| String  	|
| sub-heading   	| String  	|
| tag      	| Object  	|
| text 	    | String   	|
| img     	| Object  	|
| cta     	| Object  	|
| links     | Array  	|

#### HTML Template

```html
<campaign-banner-alt
  title="Register now for Open Days 2021"
  sub-heading="Sunday 4 July–Sunday 11 July"
  :cta="{
    text: 'Register now',
    href: '#',
  }"
  :img="{
    src: 'placeholder.jpg',
    alt: 'Woman typing on laptop',
    sizes: [
      {
        maxWidth: 599,
        srcset: 'url',
      },
    ],
  }"
></campaign-banner-alt>
```
