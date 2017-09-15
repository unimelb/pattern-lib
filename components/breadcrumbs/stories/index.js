import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withNotes } from '@storybook/addon-notes';

import BreadCrumbs from './BreadCrumbs.vue';

storiesOf('Breadcrumbs', module)
  .addDecorator(story => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <div>
          <svg class="hidden" xmlns="http://www.w3.org/2000/svg">
            <symbol id="icon-home" viewBox="5 5 38 38"><path d="M20 41V29h8v12h10V25h6L24 7 4 25h6v16h10z"></path></symbol>
            <symbol id="icon-chevron-right" viewBox="7 3 14 14"><path d="m8,7.42l4.58,4.58l-4.58,4.59l1.41,1.41l6,-6l-6,-6l-1.41,1.42z"></path></symbol>
          </svg>
          <Story/>
        </div>`,
    };
  })

  .add(
    'Level 1', 
    withNotes(
      `<div><style>pre{background-color:#444;color:#eee}</style><h2>Breadcrumbs: level 1</h2><pre><code>
  
  &lt;nav&gt;
    &lt;ol class="breadcrumbs max" itemscope="" itemtype="http://schema.org/BreadcrumbList"&gt;
      &lt;li class="breadcrumbs__item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"&gt;
        &lt;meta content="1" itemprop="position"&gt;
        &lt;a class="breadcrumbs__link" href="/" itemprop="item"&gt;&lt;svg class="breadcrumbs__home" focusable="false" height="21" role="presentation" width="21"&gt;&lt;use xlink:href="#icon-home"&gt;&lt;/use&gt;&lt;/svg&gt;&lt;span class="breadcrumbs__name" itemprop="name"&gt;About us&lt;/span&gt;&lt;/a&gt;
      &lt;/li&gt;
    &lt;/ol&gt;
  &lt;/nav&gt;
  
</code></pre></div>`)
    (() =>   ({
      components: { BreadCrumbs },
      template: `<bread-crumbs :level="1" />`
    }))
  )

  .add(
    'Level 2', 
    withNotes(
      `<div><style>pre{background-color:#444;color:#eee}</style><h2>Breadcrumbs: level 2</h2><pre><code>
  
  &lt;nav&gt;
    &lt;ol class="breadcrumbs max" itemscope="" itemtype="http://schema.org/BreadcrumbList"&gt;
      &lt;li class="breadcrumbs__item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"&gt;
        &lt;meta content="1" itemprop="position"&gt;
        &lt;a class="breadcrumbs__link" href="/" itemprop="item"&gt;&lt;svg class="breadcrumbs__home" focusable="false" height="21" role="presentation" width="21"&gt;&lt;use xlink:href="#icon-home"&gt;&lt;/use&gt;&lt;/svg&gt;&lt;span class="breadcrumbs__name" itemprop="name"&gt;About us&lt;/span&gt;&lt;/a&gt;&lt;svg class="breadcrumbs__chevron" focusable="false" height="12" role="presentation" width="12"&gt;&lt;use xlink:href="#icon-chevron-right"&gt;&lt;/use&gt;&lt;/svg&gt;
      &lt;/li&gt;
      &lt;li class="breadcrumbs__item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"&gt;
        &lt;meta content="1" itemprop="position"&gt;
        &lt;a class="breadcrumbs__link" href="/strategy" itemprop="item"&gt;&lt;span class="breadcrumbs__name" itemprop="name"&gt;Strategy and governance&lt;/span&gt;&lt;/a&gt;
      &lt;/li&gt;
    &lt;/ol&gt;
  &lt;/nav&gt;

</code></pre></div>`)
    (() =>   ({
      components: { BreadCrumbs },
      template: `<bread-crumbs :level="2" />`
    }))
  )

  .add(
    'Level 3', 
    withNotes(
      `<div><style>pre{background-color:#444;color:#eee}</style><h2>Breadcrumbs: level 3</h2><pre><code>
  
  &lt;nav&gt;
    &lt;ol class="breadcrumbs max" itemscope="" itemtype="http://schema.org/BreadcrumbList"&gt;
      &lt;li class="breadcrumbs__item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"&gt;
        &lt;meta content="1" itemprop="position"&gt;
        &lt;a class="breadcrumbs__link" href="/" itemprop="item"&gt;&lt;svg class="breadcrumbs__home" focusable="false" height="21" role="presentation" width="21"&gt;&lt;use xlink:href="#icon-home"&gt;&lt;/use&gt;&lt;/svg&gt;&lt;span class="breadcrumbs__name" itemprop="name"&gt;About us&lt;/span&gt;&lt;/a&gt;&lt;svg class="breadcrumbs__chevron" focusable="false" height="12" role="presentation" width="12"&gt;&lt;use xlink:href="#icon-chevron-right"&gt;&lt;/use&gt;&lt;/svg&gt;
      &lt;/li&gt;
      &lt;li class="breadcrumbs__item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"&gt;
        &lt;meta content="1" itemprop="position"&gt;
        &lt;a class="breadcrumbs__link" href="/strategy" itemprop="item"&gt;&lt;span class="breadcrumbs__name" itemprop="name"&gt;Strategy and governance&lt;/span&gt;&lt;/a&gt;
      &lt;/li&gt;
      &lt;li class="breadcrumbs__item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"&gt;
        &lt;meta content="1" itemprop="position"&gt;
        &lt;a class="breadcrumbs__link" href="/strategy/growing-esteem" itemprop="item"&gt;&lt;span class="breadcrumbs__name" itemprop="name"&gt;Growing Esteem&lt;/span&gt;&lt;/a&gt;
      &lt;/li&gt;
    &lt;/ol&gt;
  &lt;/nav&gt;

</code></pre></div>`)
    (() =>   ({
      components: { BreadCrumbs },
      template: `<bread-crumbs :level="3" />`
    }))
  );
