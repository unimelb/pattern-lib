const fs = require('fs');
const path = require('path');
const promptDirectory = require('inquirer-directory');


module.exports = function (plop) {
  // Component Generator
  plop.setGenerator('component', {
      description: 'New Component',
      prompts: [{
        type: 'input',
        name: 'name',
        message: 'Enter component name'
      }],
      actions: [{
        type: 'add',
        path: './../components/{{dashCase name}}/index.css',
        templateFile: './component/index.css.hbs'
      },
      {
        type: 'add',
        path: './../components/{{dashCase name}}/stories/index.js',
        templateFile: './component/stories/index.js.hbs'
      },
      {
        type: 'add',
        path: './../components/{{dashCase name}}/stories/{{properCase name}}Default.vue',
        templateFile: './component/stories/story.vue.hbs'
      },
      {
        type: 'add',
        path: './../components/{{dashCase name}}/{{properCase name}}.vue',
        templateFile: './component/component.vue.hbs'
      },
      {
        type: 'modify',
        path: './../components/index.css',
        pattern: /\/\*\*.*\*\//g,
        templateFile: './index.css.hbs'
      }]
  });
  plop.setPrompt('directory', promptDirectory);
  // Story Generator
  plop.setGenerator('story', {
      description: 'Adds new story',
      prompts: [{
        type: 'directory',
        name: 'component',
        basePath: './components',
        message: 'Select Component'
      },
      {
        type: 'input',
        name: 'story',
        message: 'Story name'
      }],
      actions: [{
        type: 'add',
        path: './../components/{{dashCase component}}/stories/{{properCase story}}.vue',
        templateFile: './story/storycomponent.vue.hbs'
      },
      {
        type: 'modify',
        path: './../components/{{dashCase component}}/stories/index.js',
        pattern: /\/\*( ##Import).*?\*\//g,
        templateFile: './story/import.js.hbs'
      },
      {
        type: 'modify',
        path: './../components/{{dashCase component}}/stories/index.js',
        pattern: /\/\*( ##Story).*?\*\//g,
        templateFile: './story/index.js.hbs'
      },
      ]
  });
};