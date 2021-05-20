# Section Alt component

The component `SectionAlt` acceps the following props:

| props    	| type    	|
|----------	|---------	|
| tagName  	| String  	|
| img      	| Object  	|
| bordered 	| Boolean 	|
| bgColor  	| String  	|

Usage Example:

```html
<SectionAlt tagName="div" :img="{ src: 'https://via.placeholder.com/1200x400', alt: 'Image for example purposes.' }" bordered bgColor="grey-light"> Section Content </SectionAlt>
```