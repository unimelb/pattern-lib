For the progressive image loader to work with this component, use the custom component `<progressive-background src="http://sourceimage.url">`. If you are able to generate a smaller image to use as placeholder you can pass it using the `placeholder` attribute -- cf. _Progressive Images / Background image loader_ for details. By default the image height will be limited to 240px. Add class `.card__thumb--full` to the `progressive-background` component to expand to the height of the image.

```html
<section class="section bg-inverted" style="background-image: url(&quot;https://about-us-unimelb.netlify.com/images/UoM-soft-3.png&quot;);">
  <div class="section__inner section__inner--sml">
    <div class="card card--image-focus">
      <h3 class="text-italic heading-section">Postera crescam laude</h3>
      <progressive-background src="https://about-us-unimelb.netlify.com/images/history.jpg" class="card__thumb card__thumb--full" />
      <div class="card__inner card__inner--tight">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ullam quisquam nihil. At ducimus explicabo quidem distinctio magnam voluptas totam, repudiandae voluptatem aliquid consequuntur cupiditate, voluptates! In quis ratione laborum?
      </div>
    </div>
  </div>
</section>
```
