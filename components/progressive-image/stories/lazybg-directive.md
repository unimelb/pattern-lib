# Progressive background image directive

In addition to the component for background image loading there is also a directive with basic functionality for use where you need to have control over the element that is rendered. 

## Usage
The directive is added to an element by adding the attribute `v-bgimg`. You then pass an object with the key `imgSrc` for the url of the image to load and optionally `placeholder` for the smaller image to load as a placeholder. 


```html

<section class="section section--image bg-inverted " v-bgimg="{imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg', placeholder: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Starsinthesky.jpg/220px-Starsinthesky.jpg'}">

</section>

