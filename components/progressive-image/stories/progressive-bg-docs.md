Use this component to progressively load a large background image, optionally showing a small, blurred placeholder image while the full-size image is loading. The placeholder should be an extremely small version of the image.

This component uses a default height/width ratio of 64% when displaying the placeholder. You can disable or customise this behaviour with attributes `no-ratio` and `aspect-ratio` respectively. For more information, please refer to the [component's official documentation](https://github.com/MatteoGabriele/vue-progressive-image)

You can add an alt text attribute as you would an img element and it will be passed to the img.

```html
<progressive-background alt="alt text goes here" src="https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg" placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Starsinthesky.jpg/220px-Starsinthesky.jpg" />
```
