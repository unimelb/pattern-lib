<template>
  <SectionWrap bg-color="alt">
    <ListingWrap>
      <ListItem
        cols="1of3"
        class="section__flex-items">
        <h3 class="title--sm">
          Discover engineering at Melbourne
        </h3>
        <p>
          Anim mollit ut eu amet ipsum eu incididunt voluptate commodo mollit Lorem Lorem dolor. Commodo nisi pariatur proident quis eu excepteur magna. Culpa sit ut eu labore voluptate.
        </p>
        <a
          class="link-icon"
          href="https://www.unimelb.edu.au/">
          Register here
          <SvgIcon
            class="push-icon__icon"
            width="15px"
            height="15px"
            name="chevron-right" />
        </a>
      </ListItem>
      <ListItem
        cols="1of3"
        class="section__flex-items">
        <h3 class="title--sm">
          Discover engineering at Melbourne
        </h3>
        <p>
          Anim mollit ut eu amet ipsum eu incididunt voluptate commodo mollit Lorem Lorem dolor. Commodo nisi pariatur proident quis eu excepteur magna. Culpa sit ut eu labore voluptate. Anim mollit ut eu amet ipsum eu incididunt voluptate commodo mollit Lorem Lorem dolor. Commodo nisi pariatur proident quis eu excepteur magna. Culpa sit ut eu labore voluptate.
        </p>
        <a
          class="link-icon"
          href="https://www.unimelb.edu.au/">
          Register here
          <SvgIcon
            class="push-icon__icon"
            width="15px"
            height="15px"
            name="chevron-right" />
        </a>
      </ListItem>
      <ListItem
        cols="1of12"
        class="cell--tab-1of12" />
      <ListItem
        cols="1of6"
        class="cell--tab-1of4">
        <CardRoundedFigure
          thumb="https://randomuser.me/api/portraits/lego/2.jpg"
          aria-label="Provide aria label for the thumb"
          title="Support"
          text="Still have questions?"
          button-label="Open Day Q&A"
          href="#" />
      </ListItem>
    </ListingWrap>
  </SectionWrap>
</template>

<script>
import ListingWrap from 'components/listing/ListingWrap.vue';
import ListItem from 'components/listing/ListItem.vue';
import CardRoundedFigure from 'components/cards/CardRoundedFigure.vue';
import SvgIcon from 'components/icons/SvgIcon.vue';
import SectionWrap from '../../SectionWrap.vue';

export default {
  components: {
    SectionWrap, ListingWrap, ListItem, CardRoundedFigure, SvgIcon,
  },
  readme: { source: true, html: true },
};
</script>
