# Video Embed component

It accepts props such as:

- `src`: Video source
- `videoApi`: Boolean for Youtube only

If `videoApi` is true, it will add the analytics param to the `src`: `?enablejsapi=1&origin=https%3A%2F%2F[SUBDOMAIN].unimelb.edu.au`


### Example:

```html
<video-embed video-api src="https://www.youtube.com/embed/nlF7qp5GNPI">
</video-embed>
```
