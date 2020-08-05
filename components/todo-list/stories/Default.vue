<template>
  <div>
    <h1>Todo list example</h1>
    <TodoList
      img="http://lorempixel.com/640/480/people"
      aria-label="Duis nulla id sint exercitation sint nisi reprehenderit nulla nulla enim consequat id velit aliqua."
      heading="Pariatur cupidatat incididunt."
      description="In mollit adipisicing commodo tempor proident dolore consectetur in culpa. Non esse reprehenderit et occaecat proident nisi. Do nulla elit cupidatat esse non in nulla."
      :button-card-data="[{
                            topLabel: '29th May',
                            label: 'Velit quis non anim deserunt anim aliqua enim.',
                            link: 'https://www.unimelb.edu.au',
                          },
                          {
                            label: 'Velit quis non anim deserunt anim aliqua enim.',
                            link: 'https://www.unimelb.edu.au',
                          },
                          {
                            label: 'Velit quis non anim deserunt anim aliqua enim.',
                            link: 'https://www.unimelb.edu.au',
                            inverted: true,
                          }]" />
    <TodoList
      img="http://lorempixel.com/640/480/people"
      aria-label="Duis nulla id sint exercitation sint nisi reprehenderit nulla nulla enim consequat id velit aliqua."
      heading="Pariatur cupidatat incididunt."
      description="In mollit adipisicing commodo tempor proident dolore consectetur in culpa. Non esse reprehenderit et occaecat proident nisi. Do nulla elit cupidatat esse non in nulla."
      :button-card-data="[{
                            label: 'Velit quis non anim deserunt anim aliqua enim.',
                            link: 'https://www.unimelb.edu.au',
                          },
                          {
                            label: 'Velit quis non anim deserunt anim aliqua enim.',
                            link: 'https://www.unimelb.edu.au',
                            inverted: true,
                          }]" />
    <TodoList
      img="http://lorempixel.com/640/480/people"
      aria-label="Duis nulla id sint exercitation sint nisi reprehenderit nulla nulla enim consequat id velit aliqua."
      heading="Pariatur cupidatat incididunt."
      description="In mollit adipisicing commodo tempor proident dolore consectetur in culpa. Non esse reprehenderit et occaecat proident nisi. Do nulla elit cupidatat esse non in nulla."
      :button-card-data="[{
        topLabel: '29th May',
        label: 'Velit quis non anim deserunt anim aliqua enim.',
        link: 'https://www.unimelb.edu.au',
      }]" />
  </div>
</template>

<script>
import TodoList from '../TodoList.vue';
import readme from '../README.md';

export default {
  components: { TodoList },
  readme: { custom: readme, source: true, html: false },
};
</script>
