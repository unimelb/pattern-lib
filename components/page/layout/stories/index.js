import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import { version } from '../../../../package.json';
import LayoutDefault from './LayoutDefault.vue';

const assetsUrl = `${process.env.CDN_URL}/v${version}`;

// Base layout markup
const markup = `\`\`\`html
<!DOCTYPE html>
<html lang="en" class="no-js">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><!-- title goes here --></title>
    <link rel="stylesheet" href="${assetsUrl}/ui.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Serif:400,700%7CSource+Sans+Pro:300,300i,400,400i,600,700">
  </head>
  <body>
    <div id="ui">
      <!-- header goes here -->
      <!-- breadcrumbs go here, if present -->
      <main>
        <!-- content goes here -->
      </main>
      <!-- footer goes here -->
    </div>
    <script src="${assetsUrl}/ui.js"></script>
  </body>
</html>
\`\`\``;

storiesOf('Page / Layout', module)
  .add('Layout', createStory(LayoutDefault, { customReadme: markup }));
