import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withNotes } from '@storybook/addon-notes';

import TopNav from './TopNav.vue';
import NavTrigger from './NavTrigger.vue';
import Search from './Search.vue';

storiesOf('Top nav', module)
  .addDecorator(story => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <div>
          <svg class="hidden" xmlns="http://www.w3.org/2000/svg">
            <symbol id="icon-search" viewBox="0 0 21 26">
              <path d="M14.7658269,18.9909231 L13.8280962,18.9909231 L13.503,18.6674423 C14.6543654,17.3250577 15.3542308,15.5836731 15.3542308,13.6763077 C15.3542308,9.43673077 11.9170962,6 7.67711538,6 C3.43713462,6 0,9.43673077 0,13.6763077 C0,17.9162885 3.43713462,21.3530192 7.67711538,21.3530192 C9.58407692,21.3530192 11.3246538,20.6535577 12.6674423,19.5025962 L12.9929423,19.8272885 L12.9929423,20.7625962 L18.8963654,26.6571346 L20.6575385,24.8963654 L14.7658269,18.9909231 L14.7658269,18.9909231 Z M7.67711538,18.9909231 C4.74155769,18.9909231 2.3625,16.6118654 2.3625,13.6763077 C2.3625,10.7411538 4.74155769,8.36169231 7.67711538,8.36169231 C10.6126731,8.36169231 12.9921346,10.7411538 12.9921346,13.6763077 C12.9921346,16.6118654 10.6126731,18.9909231 7.67711538,18.9909231 L7.67711538,18.9909231 Z" />
            </symbol>
            <symbol id="icon-close" viewBox="0 0 48 48">
              <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24 38 12.83z" />
            </symbol>
          </svg>
          <Story/>
        </div>`,
    };
  })

  .add(
    'Search only', 
    withNotes(
      `<div><style>pre{background-color:#444;color:#eee}</style><h2>Search only</h2><pre><code>
  
  &lt;div class="header-tools__search"&gt;
    &lt;a class="icon-link--vertical link" href="#search"&gt;
      &lt;svg class="icon-link__icon svg" width="24" height="24" role="presentation" focusable="false"&gt;
        &lt;use xlink:href="#icon-search" /&gt;
      &lt;/svg&gt;
      &lt;span class="icon-link__text"&gt;Search&lt;/span&gt;
    &lt;/a&gt;
    &lt;div class="page-header-search"&gt;
      &lt;form action="https://search.unimelb.edu.au" method="get"&gt;
        &lt;fieldset class="page-header-search__inline"&gt;
          &lt;input class="page-header-search__input" name="q" type="search" placeholder="Search the University" aria-label="Search the University" /&gt;&lt;button class="page-header-search__submit" type="submit"&gt;
            &lt;svg width="21" height="21" role="presentation" focusable="false"&gt;
              &lt;use xlink:href="#icon-search" /&gt;
            &lt;/svg&gt;
            &lt;span class="screenreaders-only"&gt;Go&lt;/span&gt;
          &lt;/button&gt;
        &lt;/fieldset&gt;
        &lt;a class="page-header-icon icon-link--close" href="#"&gt;
          &lt;svg class="page-header-search__icon" width="24" height="24" role="presentation" focusable="false"&gt;
            &lt;use xlink:href="#icon-close" /&gt;
          &lt;/svg&gt;
          Close
        &lt;/a&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code></pre></div>`)
    (() =>   ({
      components: { TopNav, Search },
      mounted: () => { loadHeaderTools() },
      template: `
        <div class="header-tools">
          <search />
        </div>`
    }))
  )

  .add(
    'Basic navigation', 
    withNotes(
      `<div><style>pre{background-color:#444;color:#eee}</style><h2>Basic navigation</h2><h3>Header tools</h3><pre><code>
  
  &lt;div class="header-tools__search"&gt;
    &lt;a class="icon-link--vertical link" href="#search"&gt;
      &lt;svg class="icon-link__icon svg" width="24" height="24" role="presentation" focusable="false"&gt;
        &lt;use xlink:href="#icon-search" /&gt;
      &lt;/svg&gt;
      &lt;span class="icon-link__text"&gt;Search&lt;/span&gt;
    &lt;/a&gt;
    &lt;div class="page-header-search"&gt;
      &lt;form action="https://search.unimelb.edu.au" method="get"&gt;
        &lt;fieldset class="page-header-search__inline"&gt;
          &lt;input class="page-header-search__input" name="q" type="search" placeholder="Search the University" aria-label="Search the University" /&gt;&lt;button class="page-header-search__submit" type="submit"&gt;
            &lt;svg width="21" height="21" role="presentation" focusable="false"&gt;
              &lt;use xlink:href="#icon-search" /&gt;
            &lt;/svg&gt;
            &lt;span class="screenreaders-only"&gt;Go&lt;/span&gt;
          &lt;/button&gt;
        &lt;/fieldset&gt;
        &lt;a class="page-header-icon icon-link--close" href="#"&gt;
          &lt;svg class="page-header-search__icon" width="24" height="24" role="presentation" focusable="false"&gt;
            &lt;use xlink:href="#icon-close" /&gt;
          &lt;/svg&gt;
          Close
        &lt;/a&gt;
      &lt;/form&gt;
    &lt;/div&gt;
    &lt;div class="header-tools__menu"&gt;
      &lt;a class="icon-link--vertical link" href="#sitemap"&gt;
        &lt;svg class="icon-link__icon svg" width="24" height="24" role="presentation" focusable="false" viewBox="0 0 49 48"&gt;
          &lt;path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z" /&gt;
        &lt;/svg&gt;
        &lt;span class="icon-link__text"&gt;Menu&lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code></pre><h3>Nav list</h3><pre><code>

  &lt;div id="sitemap" role="navigation"&gt;
    &lt;h2&gt;
      About us
    &lt;/h2&gt;
    &lt;ul&gt;
      &lt;li&gt;
        &lt;a href="/leadership"&gt;Leadership&lt;/a&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;a href="/our-history"&gt;Our history&lt;/a&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;a href="/our-vision"&gt;Our vision&lt;/a&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
    &lt;ul class="localnav__meta"&gt;
      &lt;li&gt;
        &lt;a href="https://search.unimelb.edu.au"&gt;Search&lt;/a&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;

</code></pre></div>`)
    (() =>   ({
      components: { TopNav, NavTrigger, Search },
      mounted: () => { loadHeaderTools() },
      template: `
      <div>
        <div class="header-tools">
          <search />
          <nav-trigger />
        </div>
        <top-nav />
      </div>`
    }))
  )

  .add(
    'Nested navigation', 
    withNotes(
      `<div><style>pre{background-color:#444;color:#eee}</style><h2>Nested navigation</h2><h3>Header tools</h3><pre><code>
  
  &lt;div class="header-tools__search"&gt;
    &lt;a class="icon-link--vertical link" href="#search"&gt;
      &lt;svg class="icon-link__icon svg" width="24" height="24" role="presentation" focusable="false"&gt;
        &lt;use xlink:href="#icon-search" /&gt;
      &lt;/svg&gt;
      &lt;span class="icon-link__text"&gt;Search&lt;/span&gt;
    &lt;/a&gt;
    &lt;div class="page-header-search"&gt;
      &lt;form action="https://search.unimelb.edu.au" method="get"&gt;
        &lt;fieldset class="page-header-search__inline"&gt;
          &lt;input class="page-header-search__input" name="q" type="search" placeholder="Search the University" aria-label="Search the University" /&gt;&lt;button class="page-header-search__submit" type="submit"&gt;
            &lt;svg width="21" height="21" role="presentation" focusable="false"&gt;
              &lt;use xlink:href="#icon-search" /&gt;
            &lt;/svg&gt;
            &lt;span class="screenreaders-only"&gt;Go&lt;/span&gt;
          &lt;/button&gt;
        &lt;/fieldset&gt;
        &lt;a class="page-header-icon icon-link--close" href="#"&gt;
          &lt;svg class="page-header-search__icon" width="24" height="24" role="presentation" focusable="false"&gt;
            &lt;use xlink:href="#icon-close" /&gt;
          &lt;/svg&gt;
          Close
        &lt;/a&gt;
      &lt;/form&gt;
    &lt;/div&gt;
    &lt;div class="header-tools__menu"&gt;
      &lt;a class="icon-link--vertical link" href="#sitemap"&gt;
        &lt;svg class="icon-link__icon svg" width="24" height="24" role="presentation" focusable="false" viewBox="0 0 49 48"&gt;
          &lt;path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z" /&gt;
        &lt;/svg&gt;
        &lt;span class="icon-link__text"&gt;Menu&lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code></pre><h3>Nav list</h3><pre><code>

  &lt;div id="sitemap" role="navigation"&gt;
    &lt;h2&gt;
      About us
    &lt;/h2&gt;
    &lt;ul&gt;
      &lt;li&gt;
        &lt;a href="/leadership"&gt;Leadership&lt;/a&gt;
        &lt;div class="inner"&gt;
          &lt;ul&gt;
            &lt;li&gt;
              &lt;a href="/leadership/chancellor"&gt;Chancellor&lt;/a&gt;
              &lt;div class="inner"&gt;
                &lt;ul&gt;
                  &lt;li&gt;
                    &lt;a href="/leadership/chancellor/university-council"&gt;University Council&lt;/a&gt;
                    &lt;div class="inner"&gt;
                      &lt;ul&gt;
                        &lt;li&gt;
                          &lt;a href="/leadership/chancellor/university-council/barry-hughes"&gt;Professor Barry Hughes&lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                          &lt;a href="/leadership/chancellor/university-council/frederik-vervaet"&gt;Associate Professor Frederik Vervaet&lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                          &lt;a href="/leadership/chancellor/university-council/jane-hansen"&gt;Ms Jane Hansen&lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                          &lt;a href="/leadership/chancellor/university-council/john-middleton"&gt;The Honorable Justice John Middleton&lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                          &lt;a href="/leadership/chancellor/university-council/kara-hadgraft"&gt;Ms Kara Hadgraft&lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                          &lt;a href="/leadership/chancellor/university-council/marilys-guillemin"&gt;Professor Marilys Guillemin&lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                          &lt;a href="/leadership/chancellor/university-council/mark-leibler"&gt;Mr Mark Leibler AC&lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                          &lt;a href="/leadership/chancellor/university-council/martyn-myer"&gt;Mr Martyn Myer AO&lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                          &lt;a href="/leadership/chancellor/university-council/nilss-olekalns"&gt;Professor Nilss Olekalns&lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                          &lt;a href="/leadership/chancellor/university-council/robin-batterham"&gt;Professor Robin John Batterham AO&lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                          &lt;a href="/leadership/chancellor/university-council/ross-mcpherson"&gt;Mr Ross McPherson&lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                          &lt;a href="/leadership/chancellor/university-council/tony-peake"&gt;Mr Tony Peake&lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                          &lt;a href="/leadership/chancellor/university-council/tyson-holloway-clarke"&gt;Mr Tyson Holloway-Clarke&lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                          &lt;a href="/leadership/chancellor/university-council/wendy-stops"&gt;Ms Wendy Stops&lt;/a&gt;
                        &lt;/li&gt;
                      &lt;/ul&gt;
                    &lt;/div&gt;
                  &lt;/li&gt;
                &lt;/ul&gt;
              &lt;/div&gt;
            &lt;/li&gt;
            &lt;li&gt;
              &lt;a href="/leadership/office-of-the-vice-chancellor"&gt;Office of the Vice-Chancellor&lt;/a&gt;
              &lt;div class="inner"&gt;
                &lt;ul&gt;
                  &lt;li&gt;
                    &lt;a href="/leadership/office-of-the-vice-chancellor/news-and-speeches"&gt;News and speeches&lt;/a&gt;
                    &lt;div class="inner"&gt;
                      &lt;ul&gt;
                        &lt;li&gt;
                          &lt;a href="/leadership/office-of-the-vice-chancellor/news-and-speeches/launch-of-educating-australia"&gt;Launch of Educating Australia&lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                          &lt;a href="/leadership/office-of-the-vice-chancellor/news-and-speeches/mgse-professoriate-planning-day"&gt;MGSE Professoriate Planning Day&lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                          &lt;a href="/leadership/office-of-the-vice-chancellor/news-and-speeches/university-wominjeka-welcome"&gt;University Wominjeka (Welcome)&lt;/a&gt;
                        &lt;/li&gt;
                      &lt;/ul&gt;
                    &lt;/div&gt;
                  &lt;/li&gt;
                  &lt;li&gt;
                    &lt;a href="/leadership/office-of-the-vice-chancellor/past-vice-chancellors"&gt;Past Vice-Chancellors&lt;/a&gt;
                  &lt;/li&gt;
                &lt;/ul&gt;
              &lt;/div&gt;
            &lt;/li&gt;
            &lt;li&gt;
              &lt;a href="/leadership/senior-leadership"&gt;Senior leadership&lt;/a&gt;
              &lt;div class="inner"&gt;
                &lt;ul&gt;
                  &lt;li&gt;
                    &lt;a href="/leadership/senior-leadership/deputy-vice-chancellor-research"&gt;Deputy Vice-Chancellor (Research)&lt;/a&gt;
                  &lt;/li&gt;
                  &lt;li&gt;
                    &lt;a href="/leadership/senior-leadership/head-of-university-services"&gt;Head of University Services&lt;/a&gt;
                  &lt;/li&gt;
                  &lt;li&gt;
                    &lt;a href="/leadership/senior-leadership/provost"&gt;Provost&lt;/a&gt;
                  &lt;/li&gt;
                  &lt;li&gt;
                    &lt;a href="/leadership/senior-leadership/vice-principal-administration-and-cfo"&gt;Vice-Principal (Administration and Finance) and Chief Financial Officer&lt;/a&gt;
                  &lt;/li&gt;
                  &lt;li&gt;
                    &lt;a href="/leadership/senior-leadership/vice-principal-advancement"&gt;Vice-Principal (Advancement)&lt;/a&gt;
                  &lt;/li&gt;
                  &lt;li&gt;
                    &lt;a href="/leadership/senior-leadership/vice-principal-engagement"&gt;Vice-Principal (Engagement)&lt;/a&gt;
                  &lt;/li&gt;
                  &lt;li&gt;
                    &lt;a href="/leadership/senior-leadership/vice-principal-policy-and-projects"&gt;Vice-Principal (Policy and Projects)&lt;/a&gt;
                  &lt;/li&gt;
                  &lt;li&gt;
                    &lt;a href="/leadership/senior-leadership/vice-chancellor"&gt;Vice-Chancellor&lt;/a&gt;
                  &lt;/li&gt;
                &lt;/ul&gt;
              &lt;/div&gt;
            &lt;/li&gt;
          &lt;/ul&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;a href="/our-history"&gt;Our history&lt;/a&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;a href="/our-vision"&gt;Our vision&lt;/a&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;a href="/alumni-and-staff"&gt;Alumni and staff&lt;/a&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;a href="/ranking-and-stats"&gt;Rankings and statistics&lt;/a&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;a href="/strategy"&gt;Strategy and governance&lt;/a&gt;
        &lt;div class="inner"&gt;
          &lt;ul&gt;
            &lt;li&gt;
              &lt;a href="/strategy/growing-esteem"&gt;Growing Esteem&lt;/a&gt;
              &lt;div class="inner"&gt;
                &lt;ul&gt;
                  &lt;li&gt;
                    &lt;a href="/strategy/growing-esteem/engagement"&gt;Engagement&lt;/a&gt;
                  &lt;/li&gt;
                  &lt;li&gt;
                    &lt;a href="/strategy/growing-esteem/learning-and-teaching"&gt;Learning and teaching&lt;/a&gt;
                  &lt;/li&gt;
                  &lt;li&gt;
                    &lt;a href="/strategy/growing-esteem/reconciliation"&gt;Reconciliation&lt;/a&gt;
                  &lt;/li&gt;
                  &lt;li&gt;
                    &lt;a href="/strategy/growing-esteem/research"&gt;Research&lt;/a&gt;
                  &lt;/li&gt;
                  &lt;li&gt;
                    &lt;a href="/strategy/growing-esteem/strategic-plans"&gt;Strategic plans&lt;/a&gt;
                  &lt;/li&gt;
                  &lt;li&gt;
                    &lt;a href="/strategy/growing-esteem/sustainability"&gt;Sustainability&lt;/a&gt;
                  &lt;/li&gt;
                &lt;/ul&gt;
              &lt;/div&gt;
            &lt;/li&gt;
            &lt;li&gt;
              &lt;a href="/strategy/melbourne-model"&gt;Melbourne Model&lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
              &lt;a href="/strategy/our-structure"&gt;Our structure&lt;/a&gt;
            &lt;/li&gt;
          &lt;/ul&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;a href="/working-with-us"&gt;Working with us&lt;/a&gt;
        &lt;div class="inner"&gt;
          &lt;ul&gt;
            &lt;li&gt;
              &lt;a href="/working-with-us/careers"&gt;Careers&lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
              &lt;a href="/working-with-us/diversity-and-inclusion"&gt;Diversity and inclusion&lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
              &lt;a href="/working-with-us/staff-benefits"&gt;Staff benefits&lt;/a&gt;
            &lt;/li&gt;
          &lt;/ul&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;a href="/news-and-resources"&gt;News and resources&lt;/a&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
    &lt;ul class="localnav__meta"&gt;
      &lt;li&gt;
        &lt;a href="https://search.unimelb.edu.au"&gt;Search&lt;/a&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;

</code></pre></div>`)
    (() =>   ({
      components: { TopNav, Search, NavTrigger },
      mounted: () => { loadHeaderTools() },
      template: `
      <div>
        <div class="header-tools">
          <search />
          <nav-trigger />
        </div>
        <top-nav :complex="true" />
      </div>`
    }))
  );
