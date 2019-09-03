<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--3col">
      <ListItem>
        <CardNewsTag
          :tags="tags"
          :cols="3"
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
          :cols="3"
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
          :cols="3"
          thumb="https://via.placeholder.com/800x600"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magni natus quas placeat adipisci optio libero quibusdam vitae nobis."
          href="#"
          excerpt="Aute culpa labore ex Lorem sit excepteur elit proident qui nulla cillum incididunt. Dolore aute id dolore cillum commodo esse in commodo eiusmod cillum."
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
    <div class="grid grid--3col shim-mt1">
      <ListItem>
        <ButtonIcon>Read More</ButtonIcon>
      </ListItem>
      <ListItem>
        <ButtonIcon icon="microphone">Podcast</ButtonIcon>
      </ListItem>
      <ListItem>
        <ButtonIcon icon="twitter">Twitter</ButtonIcon>
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardNewsTag from '../../CardNewsTag.vue';
import SvgIcon from '../../../icons/SvgIcon.vue';

export default {
  components: { CardNewsTag, SvgIcon },
  readme: { html: true, source: true },
  data() {
    return {
      tags: [{
        href: 'https://www.unimelb.edu.au/',
        value: 'tag1',
      },
      {
        href: 'https://www.unimelb.edu.au/',
        value: 'tag2',
      },
      {
        href: 'https://www.unimelb.edu.au/',
        value: 'tag3',
      },
      {
        href: 'https://www.unimelb.edu.au/',
        value: 'tag4',
      },
      {
        href: 'https://www.unimelb.edu.au/',
        value: 'tag5',
      },
      {
        href: 'https://www.unimelb.edu.au/',
        value: 'tag super hiper ultra mega long',
      }],
    };
  },
};
</script>
