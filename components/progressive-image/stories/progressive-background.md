# Progressive Background Image Loader

Like the progressive image loader but loads the image as a background image of a `div` element instead. If you need control over the element used for semantic reasons then use the bgimg directive. 

### Usage

This component will be bootstraped when the main javascript payload is loaded, the only thing you will need to do is include the component tag in your markup. By default the component will add a padding placeholder for the ratio of the image. If you are using this on an element that has its own content inside you should always pass the `no-ratio` parameter to disable this.

```html
<progressive-background no-ratio src="https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg" />
```

It will also take an optional placeholder, this should be an extremely small version of the same image. Because this image is blurred it can be a 1% crop of the original with high compression.

```html
<progressive-background src="https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg" placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Starsinthesky.jpg/220px-Starsinthesky.jpg" />
```
