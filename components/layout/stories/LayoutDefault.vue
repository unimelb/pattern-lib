<template>
  <p class="heading-card text-italic">See README panel</p>
</template>

<script>
import PadDecorator from 'storybook/decorators/PadDecorator.vue';
import { codeBlock } from 'storybook/utils';
import { version } from '../../../package.json';

const assetsUrl = `${process.env.CDN_URL}/v${version}`;

// Base layout markup
// https://stackoverflow.com/questions/36607932/unterminated-template-literal-syntax-error-when-literal-contains-script-tag
const markup = codeBlock(`
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
    <div class="screenreaders-only">
      <a href="#main">main</a>
    </div>
    <div id="ui">
      <!-- header goes here -->
      <!-- breadcrumbs go here, if present -->
      <main id="main">
        <!-- content goes here -->
      </main>
      <!-- footer goes here -->
    </div>
    <script src="${assetsUrl}/ui.js"></${'script'}>
  </body>
</html>
`);

export default {
  decorator: PadDecorator,
  readme: {
    custom: markup,
    source: false,
  },
};
</script>
