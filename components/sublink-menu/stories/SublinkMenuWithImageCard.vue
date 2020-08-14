<template>
  <SectionWrap bg-color="white">
    <ListingWrap>
      <ListItem cols="1of3">
        <SublinkMenu title="A consistent strategy">
          a consistent look and feel in our communications
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
              Our Brand Story Excepteur dolore cillum est esse.
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
      <ListItem cols="1of3">
        <SublinkMenu title="A consistent tone">
          a consistent look and feel in our communications
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
              Pariatur consequat elit anim exercitation ullamco sit sunt sit.Consectetur proident sint amet cillum.
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
      <ListItem
        cols="1of12"
        class="cell--tab-1of12" />
      <ListItem
        cols="1of6"
        class="cell--tab-1of4">
        <CardRoundedFigure
          thumb="https://randomuser.me/api/portraits/lego/3.jpg"
          aria-label="Provide aria label for the thumb"
          title="Support"
          text="Still have question?"
          button-label="Open Day Q&A"
          href="#" />
      </ListItem>
    </ListingWrap>
  </SectionWrap>
</template>

<script>
import CardRoundedFigure from 'components/cards/CardRoundedFigure.vue';
import SublinkMenu from '../SublinkMenu.vue';
import SublinkMenuItem from '../SublinkMenuItem.vue';
import ListingWrap from '../../listing/ListingWrap.vue';

export default {
  components: {
    SublinkMenu, SublinkMenuItem, ListingWrap, CardRoundedFigure,
  },
  readme: { source: true, html: true },
};
</script>
