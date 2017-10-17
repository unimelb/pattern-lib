# Focus Images

For the progressive image loading to work for this component you need to add the custom component `<progressive-background src="http://sourceimage.url">` instead of adding as a background image with an inline style.

If you are able to generate a smaller image to use as a placeholder you can pass using the placeholder attribute, see progressive-images story for details.

By default the image height will be limited to `240px`. Alternatively you can add the class `.card__thumb--full` to the progressive-background component to expand to the height of the image.

> **Note**: Copying the rendered markup by inspecting the element will not work!.


#### Hero Markup

```html
<section class="section bg-inverted" style="background-image: url(&quot;http://about-us-unimelb.netlify.com/images/UoM-soft-3.png&quot;);">
  <div class="section__inner section__inner--sml">
    <div class="card card--image-focus">
      <h3 class="text-italic heading-section">Postera crescam laude</h3>
      <progressive-background src="http://about-us-unimelb.netlify.com/images/history.jpg" class="card__thumb card__thumb--full" />
      <div class="card__inner card__inner--tight">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ullam quisquam nihil. At ducimus explicabo quidem distinctio magnam voluptas totam, repudiandae voluptatem aliquid consequuntur cupiditate, voluptates! In quis ratione laborum?
      </div>
    </div>
  </div>
</section>

```