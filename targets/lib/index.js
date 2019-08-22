/*  eslint-disable no-new */
import 'babel-polyfill';

import Vue from 'vue';
import VueProgressiveImage from 'vue-progressive-image';
import Ike from 'ike.js';

import BootstrapCMSTables from 'components/tables/BootstrapCMSTables';

import ToggleBlock from 'components/toggle/ToggleBlock.vue';
import ToggleGroup from 'components/toggle/ToggleGroup.vue';
import ToggleBlockMobile from 'components/toggle/ToggleBlockMobile.vue';
import Accordion from 'components/accordion/Accordion.vue';
import AlumniProfiles from 'components/alumni-profiles/AlumniProfiles.vue';
import AccordionGroup from 'components/accordion/AccordionGroup.vue';
import CheckList from 'components/check-list';
import MegaMenu from 'components/megamenu';
import MegaMenuTitle from 'components/megamenu/MegaMenuTitle.vue';
import ModalDialog from 'components/modal';
import PageNav from 'components/nav';
import PageSearch from 'components/search';
import PageSearchForm from 'components/search/PageSearchForm.vue';
import PageFooter from 'components/footer';
import Tabs from 'components/tabs/Tabs.vue';
import Tab from 'components/tabs/Tab.vue';
import PhotoGallery from 'components/photo-gallery';
import InPageNavigation from 'components/navigation/InPageNavigation.vue';
import FocusWrapper from 'components/focus-wrapper/FocusWrapper.vue';
import SvgIcon from 'components/icons/SvgIcon.vue';
import ListingWrap from 'components/listing/ListingWrap.vue';
import ListItem from 'components/listing/ListItem.vue';
import ArticleWrap from 'components/article-wrap/ArticleWrap.vue';
import BlockQuotation from 'components/block-quotation/BlockQuotation.vue';
import ButtonIcon from 'components/buttons/ButtonIcon.vue';
import GenericCard from 'components/cards/GenericCard.vue';
import ContactList from 'components/contact-list/ContactList.vue';
import ContentBlock from 'components/content-block/ContentBlock.vue';
import Dropdown from 'components/dropdown/Dropdown.vue';
import VideoEmbed from 'components/embed/VideoEmbed.vue';
import SoundcloudEmbed from 'components/embed/SoundcloudEmbed.vue';
import FigureWrap from 'components/figure/FigureWrap.vue';
import Notice from 'components/notice/Notice.vue';
import PageBreadcrumbs from 'components/breadcrumbs/PageBreadcrumbs.vue';
import PageHeader from 'components/header/PageHeader.vue';
import PageHeaderMin from 'components/header/PageHeaderMin.vue';
import Pathfinder from 'components/pathfinder/Pathfinder.vue';
import SectionDivider from 'components/section/SectionDivider.vue';
import SectionTwoCol from 'components/section/SectionTwoCol.vue';
import SectionWrap from 'components/section/SectionWrap.vue';
import SplitSection from 'components/section/SplitSection.vue';
import SplitSectionQuote from 'components/section/SplitSectionQuote.vue';
import SidePanel from 'components/side-panel/SidePanel.vue';
import SidePanelNavItem from 'components/side-panel/SidePanelNavItem.vue';
import SocialList from 'components/social-list/SocialList.vue';
import StatsGroup from 'components/stats/StatsGroup.vue';
import StatsItem from 'components/stats/StatsItem.vue';
import SublinkMenu from 'components/sublink-menu/SublinkMenu.vue';
import SublinkMenuItem from 'components/sublink-menu/SublinkMenuItem.vue';
import Welcome from 'components/welcome/Welcome.vue';
import CardImage from 'components/cards/CardImage.vue';
import CardLink from 'components/cards/CardLink.vue';
import CardStaffList from 'components/cards/CardStaffList.vue';
import CardStat from 'components/cards/CardStat.vue';
import CardShowcaseProfile from 'components/cards/CardShowcaseProfile.vue';
import CardEvents from 'components/cards/CardEvents.vue';
import CardFeaturesPanel from 'components/cards/CardFeaturesPanel.vue';
import MediaGallery from 'components/media-gallery/MediaGallery.vue';
import ThumbnailGallery from 'components/media-gallery/ThumbnailGallery.vue';
import CardNews from 'components/cards/CardNews.vue';
import Heading1 from 'components/typography/headings/Heading1.vue';
import Heading2 from 'components/typography/headings/Heading2.vue';
import Heading3 from 'components/typography/headings/Heading3.vue';
import Heading4 from 'components/typography/headings/Heading4.vue';
import Heading5 from 'components/typography/headings/Heading5.vue';
import Heading6 from 'components/typography/headings/Heading6.vue';
import SocialMediaBar from 'components/social-media-bar/SocialMediaBar.vue';
import Testimonials from 'components/testimonials/Testimonials.vue';
import InfoPanel from 'components/info-panel/InfoPanel.vue';
import CompactedTable from 'components/tables/CompactedTable.vue';
import ResponsiveTable from 'components/tables/ResponsiveTable.vue';
import PageHeaderCampaign from 'components/campaign/PageHeaderCampaign.vue';
import Carousel from 'components/carousel/Carousel.vue';
import Logo from 'components/logo/Logo.vue';
import CardsFilter from 'components/filter/cards/CardsFilter.vue';
import AccordionFilter from 'components/filter/accordion/AccordionFilter.vue';
import Tags from 'components/tags/Tags.vue';
import CardNewsTag from 'components/cards/CardNewsTag.vue';
import PageHeaderEvent from 'components/header/PageHeaderEvent.vue';
import Sidebar from 'components/sidebar/Sidebar.vue';
import {
  version,
} from '../../package.json';

import 'components';

// Inject SVG sprite
const loadExternalAssets = process.env.LOAD_EXTERNAL_ASSETS === 'true';
const publicPath = loadExternalAssets ? `${process.env.CDN_URL}/v${version}/` : '';
new Ike(`${publicPath}sprite.svg`, version);

// Load shared SVG assets
require.context('components/shared', false, /\.svg$/);

// Register Vue plugins, directives and components
Vue.use(VueProgressiveImage);
Vue.component('toggle-block', ToggleBlock);
Vue.component('toggle-group', ToggleGroup);
Vue.component('toggle-block-mobile', ToggleBlockMobile);
Vue.component('accordion', Accordion);
Vue.component('accordion-group', AccordionGroup);
Vue.component('check-list', CheckList);
Vue.component('mega-menu', MegaMenu);
Vue.component('mega-menu-title', MegaMenuTitle);
Vue.component('modal-dialog', ModalDialog);
Vue.component('page-footer', PageFooter);
Vue.component('page-nav', PageNav);
Vue.component('page-search', PageSearch);
Vue.component('page-search-form', PageSearchForm);
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
Vue.component('photo-gallery', PhotoGallery);
Vue.component('in-page-navigation', InPageNavigation);
Vue.component('focus-wrapper', FocusWrapper);
Vue.component('svg-icon', SvgIcon);
Vue.component('listing-wrap', ListingWrap);
Vue.component('list-item', ListItem);
Vue.component('article-wrap', ArticleWrap);
Vue.component('block-quotation', BlockQuotation);
Vue.component('button-icon', ButtonIcon);
Vue.component('generic-card', GenericCard);
Vue.component('card-staff-list', CardStaffList);
Vue.component('contact-list', ContactList);
Vue.component('content-block', ContentBlock);
Vue.component('dropdown', Dropdown);
Vue.component('video-embed', VideoEmbed);
Vue.component('sound-cloud-embed', SoundcloudEmbed);
Vue.component('figure-wrap', FigureWrap);
Vue.component('notice', Notice);
Vue.component('page-breadcrumbs', PageBreadcrumbs);
Vue.component('page-header', PageHeader);
Vue.component('page-header-min', PageHeaderMin);
Vue.component('page-header-event', PageHeaderEvent);
Vue.component('pathfinder', Pathfinder);
Vue.component('section-divider', SectionDivider);
Vue.component('section-two-col', SectionTwoCol);
Vue.component('section-wrap', SectionWrap);
Vue.component('split-section', SplitSection);
Vue.component('slit-section-quote', SplitSectionQuote);
Vue.component('side-panel', SidePanel);
Vue.component('side-panel-nav-item', SidePanelNavItem);
Vue.component('social-list', SocialList);
Vue.component('stats-group', StatsGroup);
Vue.component('stats-item', StatsItem);
Vue.component('sublink-menu', SublinkMenu);
Vue.component('sublink-menu-item', SublinkMenuItem);
Vue.component('welcome', Welcome);
Vue.component('card-image', CardImage);
Vue.component('card-link', CardLink);
Vue.component('card-stat', CardStat);
Vue.component('card-showcase-profile', CardShowcaseProfile);
Vue.component('card-events', CardEvents);
Vue.component('card-features-panel', CardFeaturesPanel);
Vue.component('media-gallery', MediaGallery);
Vue.component('thumbnails', ThumbnailGallery);
Vue.component('card-news', CardNews);
Vue.component('heading1', Heading1);
Vue.component('heading2', Heading2);
Vue.component('heading3', Heading3);
Vue.component('heading4', Heading4);
Vue.component('heading5', Heading5);
Vue.component('heading6', Heading6);
Vue.component('social-media-bar', SocialMediaBar);
Vue.component('alumni-profiles', AlumniProfiles);
Vue.component('testimonials', Testimonials);
Vue.component('info-panel', InfoPanel);
Vue.component('compacted-table', CompactedTable);
Vue.component('responsive-table', ResponsiveTable);
Vue.component('page-header-campaign', PageHeaderCampaign);
Vue.component('carousel', Carousel);
Vue.component('logo', Logo);
Vue.component('cards-filter', CardsFilter);
Vue.component('accordion-filter', AccordionFilter);
Vue.component('tags', Tags);
Vue.component('card-news-tag', CardNewsTag);
Vue.component('sidebar', Sidebar);

// Create Vue instance
new Vue({
  el: '#ui',
  beforeCreate() {
    BootstrapCMSTables(); // Add responsive classes to CMS tables.
  },
});
