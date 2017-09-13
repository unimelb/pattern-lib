<template>
  <article class="article">
    <header class="article__header">
      <h1>
        {{title}}
      </h1>
    </header>
    <div class="article__aside">
      <section class="article__bio">
        <span>{{date}}</span> | <span style="text-transform: uppercase;">{{postType}}</span>
      </section>
      <section class="article__contact">
        <dl v-for="(value, key) in contact">
          <dt>{{ key }}:</dt><dd> {{ value }}</dd>
        </dl>
      </section>
      <section class="article__social">
        <h4>share</h4>
        <!-- social icons to go here once ready -->
      </section>
    </div>
    <div class="article__main" v-html="content">
    </div>
    <div class="clearfix"></div>
  </article>
</template>

<script>
  export default {
    name: 'Article',
    props: {
      title: {
        type: String,
        default: "Test title"
      },
      author: {
        type: String,
        default: "John Smith"
      },
      contact: {
        type: Object,
        default: 
          {
            Contact: "John Smith",
            Phone: "+613 4234 2344"
          }
      },
      date: {
        type: String,
        default: "03 Apr 2017"
      },
      postType: {
        type: String,
        default: "speech"
      },
      content: {
        type: String,
        default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quae doloribus, aliquid modi? Blanditiis quod, ullam aliquam provident, accusamus neque aut necessitatibus accusantium maxime voluptates sit consequatur illum tempora magnam.'
      }
    }
  }

</script>

