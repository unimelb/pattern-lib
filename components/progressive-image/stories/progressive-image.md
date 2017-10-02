# Progressive Image Loader

This component allows you to load a placeholder image to show when loading large images, especially for slow connections.

### Usage

This component will be bootstraped when the main javascript payload is loaded, the only thing you will need to do is include the component tag in your markup.

The component is included where a img is used : 

```html
<progressive-img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg" />
```

It will also take an optional placeholder, this should be an extremely small version of the same image. Because this image is blurred it can be a 1% crop of the original with high compression.

```html
<progressive-img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg" placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Starsinthesky.jpg/220px-Starsinthesky.jpg" />
```

## Ratio

It is possible to remove the padding that adds the aspect ratio to the container.

```html
<progressive-img
  src="https://unsplash.it/1920/1080?image=10"
  no-ratio
/>
```
It is also possible to manually specify the image aspact ratio when you know it. It allows the placeholder to be displayed in the correct aspect ratio. The ratio is calculated as height / width.

```html
<progressive-img
  src="https://unsplash.it/1920/1080?image=10"
  aspect-ratio="1.5"
/>
```

More details can be found on the Vue component here : https://github.com/MatteoGabriele/vue-progressive-image