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
