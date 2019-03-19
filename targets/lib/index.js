/*  eslint-disable no-new */
import 'babel-polyfill';

import Vue from 'vue';
import VueProgressiveImage from 'vue-progressive-image';
import Ike from 'ike.js';
import {
  version,
} from '../../package.json';

import ToggleBlock from '../../components/toggle/ToggleBlock.vue';
import ToggleGroup from '../../components/toggle/ToggleGroup.vue';
import ToggleBlockMobile from '../../components/toggle/ToggleBlockMobile.vue';
import Accordion from '../../components/accordion/Accordion.vue';
import AccordionGroup from '../../components/accordion/AccordionGroup.vue';
import CheckList from '../../components/check-list';
import MegaMenu from '../../components/page/megamenu';
import MegaMenuTitle from '../../components/page/megamenu/MegaMenuTitle.vue';
import ModalDialog from '../../components/modal';
import PageNav from '../../components/page/nav';
import PageSearch from '../../components/page/search';
import PageSearchForm from '../../components/page/search/PageSearchForm.vue';
import PageFooter from '../../components/page/footer';
import Tabs from '../../components/tabs/Tabs.vue';
import Tab from '../../components/tabs/Tab.vue';
import PhotoGallery from '../../components/photo-gallery';
import InPageNavigation from '../../components/page/navigation/InPageNavigation.vue';
import OutPageNavigation from '../../components/page/navigation/OutPageNavigation.vue';
import FocusWrapper from '../../components/focus-wrapper/FocusWrapper.vue';
import SvgIcon from '../../components/icons/SvgIcon.vue';
import ListingWrap from '../../components/listing/ListingWrap.vue';
import ListItem from '../../components/listing/ListItem.vue';
import ArticleWrap from '../../components/article-wrap/ArticleWrap.vue';
import BlockQuotation from '../../components/block-quotation/BlockQuotation.vue';
import ButtonIcon from '../../components/buttons/ButtonIcon.vue';
import GenericCard from '../../components/cards/GenericCard.vue';
import ContactList from '../../components/contact-list/ContactList.vue';
import ContentBlock from '../../components/content-block/ContentBlock.vue';
import Dropdown from '../../components/dropdown/Dropdown.vue';
import VideoEmbed from '../../components/embed/VideoEmbed.vue';
import SoundcloudEmbed from '../../components/embed/SoundcloudEmbed.vue';
import FigureWrap from '../../components/figure/FigureWrap.vue';
import Notice from '../../components/notice/Notice.vue';
import PageBreadcrumbs from '../../components/page/breadcrumbs/PageBreadcrumbs.vue';
import PageHeader from '../../components/page/header/PageHeader.vue';
import PageHeaderMin from '../../components/page/header/PageHeaderMin.vue';
import Pathfinder from '../../components/pathfinder/Pathfinder.vue';
import SectionDivider from '../../components/section/SectionDivider.vue';
import SectionTwoCol from '../../components/section/SectionTwoCol.vue';
import SectionWrap from '../../components/section/SectionWrap.vue';
import SplitSection from '../../components/section/SplitSection.vue';
import SplitSectionQuote from '../../components/section/SplitSectionQuote.vue';
import SidePanel from '../../components/side-panel/SidePanel.vue';
import SidePanelNavItem from '../../components/side-panel/SidePanelNavItem.vue';
import SocialList from '../../components/social-list/SocialList.vue';
import StatsGroup from '../../components/stats/StatsGroup.vue';
import StatsItem from '../../components/stats/StatsItem.vue';
import SublinkMenu from '../../components/sublink-menu/SublinkMenu.vue';
import SublinkMenuItem from '../../components/sublink-menu/SublinkMenuItem.vue';
import Welcome from '../../components/welcome/Welcome.vue';
import CardImage from '../../components/cards/CardImage.vue';
import CardLink from '../../components/cards/CardLink.vue';
import CardStaffList from '../../components/cards/CardStaffList.vue';


import '../../components';

// Inject SVG sprite
const loadExternalAssets = process.env.LOAD_EXTERNAL_ASSETS === 'true';
const publicPath = loadExternalAssets ? `${process.env.CDN_URL}/v${version}/` : '';
new Ike(`${publicPath}sprite.svg`, version);

// Load shared SVG assets
require.context('../../components/shared', false, /\.svg$/);

// Register Vue plugins, directives and components
Vue.use(VueProgressiveImage);
Vue.component('toggle-block', ToggleBlock);
Vue.component('toggle-group', ToggleGroup);
Vue.component('toggle-block-mobile', ToggleBlockMobile);
Vue.component('accordion', Accordion);
Vue.component('accordion-group', AccordionGroup);
Vue.component('check-list', CheckList);
Vue.component('mega-menu', MegaMenu);
Vue.component('MegaMenuTitle', MegaMenuTitle);
Vue.component('modal-dialog', ModalDialog);
Vue.component('page-footer', PageFooter);
Vue.component('page-nav', PageNav);
Vue.component('page-search', PageSearch);
Vue.component('page-search-form', PageSearchForm);
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
Vue.component('photo-gallery', PhotoGallery);
Vue.component('in-page-navigation', InPageNavigation);
Vue.component('out-page-navigation', OutPageNavigation);
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


// Create Vue instance
new Vue({
  el: '#ui',
});
