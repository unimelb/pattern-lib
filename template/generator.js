const fs = require('fs');
const path = require('path');

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
};