<template>
  <SectionWrap bg-color="white">
    <ListingWrap
      cols="2"
      center>
      <ListItem>
        <SublinkMenu class="sublink-menu">
          <SublinkMenuItem
            slot="menuitems"
            link="#">
            <div slot="link">
              Our Brand Story
            </div>
            <div slot="description">
              Consectetur proident sint amet cillum.
            </div>
          </SublinkMenuItem>
          <SublinkMenuItem
            slot="menuitems"
            link="#something">
            <div slot="link">
              Our Brand Story
            </div>
            <div slot="description">
              Consectetur proident sint amet cillum.
            </div>
          </SublinkMenuItem>
          <SublinkMenuItem
            slot="menuitems"
            link="#something">
            <div slot="link">
              Our Brand Story
            </div>
            <div slot="description">
              Consectetur proident sint amet cillum.
            </div>
          </SublinkMenuItem>
          <SublinkMenuItem
            slot="menuitems"
            link="#something">
            <div slot="link">
              Our Brand Story
            </div>
            <div slot="description">
              Consectetur proident sint amet cillum.
            </div>
          </SublinkMenuItem>
        </SublinkMenu>
      </ListItem>
      <ListItem>
        <h3 class="shim-mb05">
          Research news and commentary
        </h3>
        <div class="grid grid--2col">
          <div class="cell cell--col-1">
            <a
              href="#"
              class="btn-owner card card--news card--bdr card--bdr-thin">
              <p class="card__meta shim-mb0">03 Apr 2017</p>
              <strong
                class="card__header shim-mt0 shim-pb1">Call for submissions for 2018 Science Gallery Melbourne exhibition</strong>
            </a>
          </div>
          <div class="cell cell--col-2">
            <a
              href="#"
              class="btn-owner card card--news card--bdr card--bdr-thin">
              <p class="card__meta shim-mb0">03 Apr 2017</p>
              <strong
                class="card__header shim-mt0 shim-pb1">Growing girls’ interest in STEM for the workforce of the future</strong>
            </a>
          </div>
        </div>
        <h3 class="shim-mb05 shim-mt05">
          Up Close podcast
        </h3>
        <div class="grid grid--2col">
          <div class="cell cell--col-3">
            <a
              href="#"
              class="btn-owner card card--news card--bdr card--bdr-thin">
              <p class="card__meta shim-mb0">03 Apr 2017</p>
              <strong
                class="card__header shim-mt0 shim-pb1">Call for submissions for 2018 Science Gallery Melbourne exhibition</strong>
            </a>
          </div>
          <div class="cell cell--col-4">
            <a
              href="#"
              class="btn-owner card card--news card--bdr card--bdr-thin">
              <p class="card__meta shim-mb0">03 Apr 2017</p>
              <strong
                class="card__header shim-mt0 shim-pb1">Growing girls’ interest in STEM for the workforce of the future</strong>
            </a>
          </div>
        </div>
      </ListItem>
    </ListingWrap>
  </SectionWrap>
</template>

<script>
import SublinkMenu from '../SublinkMenu.vue';
import SublinkMenuItem from '../SublinkMenuItem.vue';
import ListingWrap from '../../listing/ListingWrap.vue';

export default {
  components: { SublinkMenu, SublinkMenuItem, ListingWrap },
  readme: { source: true, html: true },
};
</script>
