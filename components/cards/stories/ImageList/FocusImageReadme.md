# Focus Images

For the progressive image loading to work for this component you need to add the custom component `<progressive-background src="http://sourceimage.url">` instead of adding as a background image with an inline style.

If you are able to generate a smaller image to use as a placeholder you can pass using the placeholder attribute, see progressive-images story for details.

By default the image height will be limited to `240px`. Alternatively you can add the class `.card__thumb--full` to the progressive-background component to expand to the height of the image.

> **Note**: Copying the rendered markup by inspecting the element will not work!.


#### Markup

```html
<section class="section bg-alt">
  <div class="section__inner">
    <div class="listing listing--two">
      <div class="list-item">
        <div class="card card--image-focus card--image-focus--col-brand bg-alt">
          <h3 class="">Learning and teaching</h3>
          <progressive-background :src="https://matrix-cms.unimelb.edu.au/about/assets/images/careers/prideindiversity.jpg" :placeholder="placeholder" class="card__thumb card__thumb--full"  />
          <div class="card__inner">
            <!-- content -->
          </div>
        </div>
      </div>
      <div class="list-item">
        <div class="card card--image-focus card--image-focus--col-brand bg-alt">
          <h3 class="">Learning and teaching</h3>
          <progressive-background :src="https://matrix-cms.unimelb.edu.au/about/assets/images/careers/prideindiversity.jpg" :placeholder="placeholder" class="card__thumb card__thumb--full"  />
          <div class="card__inner">
            <!-- content -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

```