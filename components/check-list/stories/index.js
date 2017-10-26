import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import CheckListDefault from './CheckListDefault.vue';
import CheckListCmsDefault from './CheckListCmsDefault.vue';
import CheckListCms2Default from './CheckListCms2Default.vue';

storiesOf('Check List', module)
  .add('Default', createStory(CheckListDefault))
  .add('CMS', createStory(CheckListCmsDefault), { shallowRender: true })
  .add('CMS 2', createStory(CheckListCms2Default), { shallowRender: true });
