For the progressive image loader to work with this component, use the custom component `<progressive-background src="http://sourceimage.url">`. If you are able to generate a smaller image to use as placeholder you can pass it using the `placeholder` attribute -- cf. _Progressive Images / Background image loader_ for details. By default the image height will be limited to 240px. Add class `.card__thumb--full` to the `progressive-background` component to expand to the height of the image.

```html
<section class="section bg-alt">
  <div class="section__inner">
    <div class="grid grid--2col">
      <div class="cell">
        <div class="card card--image-focus card--image-focus--col-brand bg-alt">
          <h3 class="">Learning and teaching</h3>
          <progressive-background :src="https://matrix-cms.unimelb.edu.au/about/assets/images/careers/prideindiversity.jpg" :placeholder="placeholder" class="card__thumb card__thumb--full"  />
          <div class="card__inner">
            <!-- content -->
          </div>
        </div>
      </div>
      <div class="cell">
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
