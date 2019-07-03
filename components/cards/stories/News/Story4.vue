<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--1col">
      <ListItem>
        <CardNewsTag
          :tags="tags"
          thumb="https://via.placeholder.com/400x200"
          title="Test 1"
          href="#"
          excerpt="Lorem ipsum dolor sit amet, consectetur."
        >
          <div
            slot="sub-title-1"
            class="sub-title">
            <span>Sub-title 1</span>
          </div>
          <template slot="links">
            <a
              href="/"
              aria-label="View article">
              View article
              <SvgIcon
                class="link-icon"
                name="chevron-right"
                width="10"
                height="10"/>
            </a>
          </template>
        </CardNewsTag>
      </ListItem>
      <ListItem>
        <CardNewsTag
          :tags="tags"
          thumb="https://via.placeholder.com/800x400"
          title="Lorem ipsum dolor sit amet, consectetur"
          href="#"
          excerpt="Lorem ipsum dolor sit amet, consectetur."
        >
          <div
            slot="sub-title-1"
            class="sub-title">
            <span>Sub-title 1</span>
          </div>
          <template slot="links">
            <a
              href="/"
              aria-label="View article">
              View article
              <SvgIcon
                class="link-icon"
                name="chevron-right"
                width="10"
                height="10"/>
            </a>
          </template>
        </CardNewsTag>
      </ListItem>
      <ListItem>
        <CardNewsTag
          :tags="tags"
          thumb="https://via.placeholder.com/800x600"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magni natus quas placeat adipisci optio libero quibusdam vitae nobis."
          href="#"
          excerpt="Lorem ipsum dolor sit amet, consectetur."
        >
          <div
            slot="sub-title-1"
            class="sub-title">
            <span>Sub-title 1</span>
          </div>
          <template slot="links">
            <a
              href="/"
              aria-label="View article">
              View article
              <SvgIcon
                class="link-icon"
                name="chevron-right"
                width="10"
                height="10"/>
            </a>
          </template>
        </CardNewsTag>
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardNewsTag from '../../CardNewsTag.vue';
import news from './news.md';

export default {
  components: { CardNewsTag },
  readme: { custom: news, source: true, html: true },
  data() {
    return {
      tags: ['tag1', 'tag2', 'tag3', 'tag super long 4', 'tag5', 'tag6', 'tag7', 'tag8'],
    };
  },
};
</script>
