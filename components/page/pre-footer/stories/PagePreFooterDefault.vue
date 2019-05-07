<template>
  <PagePreFooter>
    <template slot="link-1">
      <SvgIcon
        name="envelope"
        width="25"
        height="25" />
      <a href="/">Sign up for e-news</a>
    </template>
    <template slot="link-2">
      <SvgIcon
        name="newspaper"
        width="25"
        height="25" />
      <a href="/">Read our blog</a>
    </template>
    <a
      slot="social-1"
      href="#">
      <SvgIcon
        name="facebook"
        width="30"
        height="30" />
    </a>
    <a
      slot="social-2"
      href="#">
      <SvgIcon
        name="twitter"
        width="30"
        height="30" />
    </a>
    <a
      slot="social-3"
      href="#">
      <SvgIcon
        name="linkedin"
        width="30"
        height="30" />
    </a>
  </PagePreFooter>
</template>

<script>
import PagePreFooter from '../PagePreFooter.vue';
import SvgIcon from '../../../icons/SvgIcon.vue';
import PreFooterDoc from './page-pre-footer-docs.md';

export default {
  components: { PagePreFooter, SvgIcon },
  readme: { custom: PreFooterDoc, source: true, html: true },
};
</script>
