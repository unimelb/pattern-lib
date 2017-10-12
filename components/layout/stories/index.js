import { storiesOf } from '@storybook/vue';
import withReadme from 'storybook-readme/with-readme';
import pretty from 'pretty';

import { version, unimelb } from '../../../package.json';

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
      <!-- banner goes here -->
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

storiesOf('Layout', module)
  .add('Layout', withReadme(pretty(markup), () => ({
    template: '<p>See README panel.</p>',
  })));
