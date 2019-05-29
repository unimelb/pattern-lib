<template>
  <div>
    <MegaMenu
      items="test"
      top-menu="['test', 'test']"
      active="/random-link"
      faculty-name="Faculty of Medicine, Dentistry and Health Sciences"
      faculty-link="/faculty-link"
      faculty-width="25.5%"
    />
    <PageHeaderCampaign
      title="Come as you are,"
      sub-title="leave as you want to be."
      button-text="Call to action text"
      link="google.com"
      img="https://placeimg.com/1000/400/people/grayscale"
    />
    <SectionWrap class="bg-white">
      <QuickLinks menu-links="test">
        <div slot="content">
          <h2>Australia's leading university</h2>
          <p class="lead">
            Our distinctive Melbourne experience helps graduates become well-rounded, thoughtful and skilled professionals – making
            a positive impact across the globe.
          </p>
          <p>
            Our research helps solve social, economic and environmental challenges the world is facing today and into the future.
            And we’re tightly connected with our communities, at home and around the globe, a connection that enriches our learning,
            teaching and research.
          </p>
          <ButtonIcon
            icon="chevron-right"
            style="margin-top: 1.5rem;"
            class="btn--xwide"
          >Welcome from the Vice-Chancellor</ButtonIcon>
        </div>
      </QuickLinks>
    </SectionWrap>
  </div>
</template>

<script>
import MegaMenu from '../../../megamenu/MegaMenu.vue';
import PageHeaderCampaign from '../../PageHeaderCampaign.vue';
import QuickLinks from '../../../../quick-links-menu/QuickLinks.vue';

export default {
  components: { MegaMenu, PageHeaderCampaign, QuickLinks },
  readme: { source: true, html: true },
};
</script>
