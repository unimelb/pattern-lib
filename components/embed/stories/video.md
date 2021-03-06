# Video Player component

It accepts props such as:

- `label`: Button label, defaults to 'Play'
- `poster`: Object for poster image, takes `src` and `alt` as properties
- `video`: Object for video, takes `url` (video embed URL), `duration` (in seconds) and an optional `preview` property for looping video
- `orientation`: Can be 'portrait' or 'landscape', default to 'landscape'
- `autoplay`: Boolean for autoplaying the looping video if one exists, otherwise only loops on mouseover
- `videoApi`: *Youtube videos only* Boolean to add additional query params to the `src`: `?autoplay=1&enablejsapi=1&rel=0&cc_load_policy=1&modestbranding=1&origin=https%3A%2F%2F[SUBDOMAIN].unimelb.edu.au`
- `describedby`: String to pass through an id to `aria-describedby` attribute on the button

### Example:

```html
<video-player
  label="Label for the button (Default: Play)"
  video-api
  :video="{ url: 'https://www.youtube.com/embed/sWHoKq6MSaE', duration: 144 }"
  :poster="{ src: 'https://picsum.photos/seed/1/540/360', alt: '' }"
  autoplay
  orientation="portrait or landscape"
></video-player>
```

```html
<video-full-width
  label="Label for the button (Default: Play)"
  video-api
  :video="{ url: 'https://www.youtube.com/embed/sWHoKq6MSaE', duration: 144 }"
  :poster="{ src: 'https://picsum.photos/seed/1/540/360', alt: '' }"
></video-full-width>
```

#### Screen reader announcement (Voiceover)

Play button
- Play video [Video label 2m 24s], button

Close button
- Close video, button
