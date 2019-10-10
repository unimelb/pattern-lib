const promptDirectory = require('inquirer-directory');

module.exports = function generator(plop) {
  // Component Generator
  plop.setGenerator('component', {
    description: 'Create new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{dashCase name}}/index.css',
        templateFile: './component/index.css.hbs',
      },
      {
        type: 'add',
        path: 'components/{{dashCase name}}/stories/index.js',
        templateFile: './component/stories/index.js.hbs',
      },
      {
        type: 'add',
        path: 'components/{{dashCase name}}/stories/{{properCase name}}Default.vue',
        templateFile: './component/stories/Story.vue.hbs',
      },
      {
        type: 'add',
        path: 'components/{{dashCase name}}/{{properCase name}}.vue',
        templateFile: './component/Component.vue.hbs',
      },
      {
        type: 'modify',
        path: 'components/index.css',
        pattern: /\/\*\* GENERATOR \*\*\//g,
        templateFile: './component/import.css.hbs',
      },
    ],
  });

  plop.setPrompt('directory', promptDirectory);

  // Story Generator
  plop.setGenerator('story', {
    description: 'Add story to existing component',
    prompts: [
      {
        type: 'directory',
        name: 'component',
        basePath: 'components',
        message: 'Select component',
      },
      {
        type: 'input',
        name: 'story',
        message: 'Story name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{dashCase component}}/stories/{{properCase story}}.vue',
        templateFile: './story/Story.vue.hbs',
      },
      {
        type: 'modify',
        path: 'components/{{dashCase component}}/stories/index.js',
        pattern: /\/\*( ##Import).*?\*\//g,
        templateFile: './story/import.js.hbs',
      },
      {
        type: 'modify',
        path: 'components/{{dashCase component}}/stories/index.js',
        pattern: /\/\*( ##Story).*?\*\//g,
        templateFile: './story/index.js.hbs',
      },
    ],
  });
};
