<template>
  <div class="section bg-alt">
    <div class="section__inner">
      <div class="grid">
        <div class="cell cell--desk-2of3">
          <h3 class="heading-lead shim-pb1">
            Featured news
          </h3>
          <ContentBlockNews />
          <a href>View more news
            <svg
              width="15px"
              height="15px"
              focusable="false"
              role="presentation"
              class="push-icon__icon"
            >
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#icon-chevron-right"
              />
            </svg>
          </a>
        </div>
        <div class="cell cell--desk-1of3">
          <h3 class="heading-lead shim-pb1">
            Upcoming events
          </h3>
          <ContentBlockEvent class="bg-alt-darker" />
          <a href>View more events
            <svg
              width="15px"
              height="15px"
              focusable="false"
              role="presentation"
              class="push-icon__icon"
            >
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#icon-chevron-right"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentBlockNews from './ContentBlockNews.vue';
import ContentBlockEvent from './ContentBlockEvent.vue';

export default {
  components: { ContentBlockNews, ContentBlockEvent },
  readme: { source: true, html: true },
};
</script>
