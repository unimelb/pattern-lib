import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withNotes } from '@storybook/addon-notes';

import TopNav from './TopNav.vue';

storiesOf('Top nav', module)
  .add(
    'Header tools', 
    withNotes(
      `<div><style>pre{background-color:#444;color:#eee}</style><h2>Search</h2><pre><code>
  
  &lt;div&gt;
  &lt;/div&gt;

</code></pre></div>`)
    (() =>   ({
      components: { TopNav },
      mounted: () => { loadHeaderTools() },
      template: `<top-nav />`
    }))
  );
