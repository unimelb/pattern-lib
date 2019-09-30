<template>
  <SectionWrap bg-color="white">
    <ListingWrap
      cols="3"
      center>
      <ListItem>
        <SublinkMenu
          title="A consistent strategy"
          icon="faculty"
          icon-color="blue">
          a consistent look and feel in our communications
          <SublinkMenuItem
            slot="menuitems"
            link="#">
            Our Brand Story
          </SublinkMenuItem>
          <SublinkMenuItem
            slot="menuitems"
            link="#something">
            Something else
          </SublinkMenuItem>
          <SublinkMenuItem
            slot="menuitems"
            link="#something">
            Something else
          </SublinkMenuItem>
          <SublinkMenuItem
            slot="menuitems"
            link="#something">
            Something else
          </SublinkMenuItem>
        </SublinkMenu>
      </ListItem>
      <ListItem>
        <SublinkMenu
          title="A consistent tone"
          icon="library"
          icon-color="green">
          a consistent look and feel in our communications
          <SublinkMenuItem
            slot="menuitems"
            link="#">
            Our Brand Story
          </SublinkMenuItem>
          <SublinkMenuItem
            slot="menuitems"
            link="#something">
            Something else
          </SublinkMenuItem>
          <SublinkMenuItem
            slot="menuitems"
            link="#something">
            Something else
          </SublinkMenuItem>
          <SublinkMenuItem
            slot="menuitems"
            link="#something">
            Something else
          </SublinkMenuItem>
        </SublinkMenu>
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
