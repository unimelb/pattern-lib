<template>
  <SectionWrap bg-color="white">
    <ListingWrap
      cols="3"
      center>
      <ListItem>
        <SublinkMenu
          title="A consistent strategy"
          img="https://picsum.photos/seed/1/300/200">
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
          title="A substantially longer title goes in here"
          img="https://picsum.photos/seed/2/300/200">
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
          title="A substantially longer title goes in here"
          img="https://picsum.photos/seed/3/300/200">
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
          title="A substantially longer title goes in here"
          img="https://picsum.photos/seed/4/300/200">
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
          title="A substantially longer title goes in here"
          img="https://picsum.photos/seed/5/300/200">
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
          title="A substantially longer title goes in here"
          img="https://picsum.photos/seed/6/300/200">
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
