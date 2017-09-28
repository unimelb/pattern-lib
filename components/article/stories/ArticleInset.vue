<template>
  <article class="article article--nosidebar">
    <h1 class="article__header">
      {{title}}
    </h1>
    <div class="article__main">
      <h2>Testse</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, qui, corrupti. Voluptatibus aperiam molestias illum commodi at, eveniet consequuntur deserunt quaerat dolorem dignissimos sed adipisci quia voluptates asperiores est! Labore?</p>
      <figure class="figure">
        <img src="http://via.placeholder.com/600x400" alt="">
        <figcaption>test caption</figcaption>
      </figure>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eaque tenetur magni voluptatibus, id voluptates explicabo error nemo nulla aliquid sunt mollitia minus porro quis possimus a illum saepe pariatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, qui, corrupti. Voluptatibus aperiam molestias illum commodi at, eveniet consequuntur deserunt quaerat dolorem dignissimos sed adipisci quia voluptates asperiores est! Labore?</p>
      <figure class="figure figure--inset figure--inset-left">
        <img src="http://via.placeholder.com/600x400" alt="">
        <figcaption>test caption</figcaption>
      </figure>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eaque tenetur magni voluptatibus, id voluptates explicabo error nemo nulla aliquid sunt mollitia minus porro quis possimus a illum saepe pariatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eaque tenetur magni voluptatibus, id voluptates explicabo error nemo nulla aliquid sunt mollitia minus porro quis possimus a illum saepe pariatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, qui, corrupti. Voluptatibus aperiam molestias illum commodi at, eveniet consequuntur deserunt quaerat dolorem dignissimos sed adipisci quia voluptates asperiores est! Labore?</p>
      <figure class="figure figure--inset figure--inset-lge figure--inset-right">
        <img src="http://via.placeholder.com/600x400" alt="">
        <figcaption>test caption</figcaption>
      </figure>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eaque tenetur magni voluptatibus, id voluptates explicabo error nemo nulla aliquid sunt mollitia minus porro quis possimus a illum saepe pariatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, qui, corrupti. Voluptatibus aperiam molestias illum commodi at, eveniet consequuntur deserunt quaerat dolorem dignissimos sed adipisci quia voluptates asperiores est! Labore?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eaque tenetur magni voluptatibus, id voluptates explicabo error nemo nulla aliquid sunt mollitia minus porro quis possimus a illum saepe pariatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, qui, corrupti. Voluptatibus aperiam molestias illum commodi at, eveniet consequuntur deserunt quaerat dolorem dignissimos sed adipisci quia voluptates asperiores est! Labore?</p>
      <figure class="figure figure--inset figure--inset-sml figure--inset-left">
        <img src="http://via.placeholder.com/600x400" alt="">
        <figcaption>test caption</figcaption>
      </figure>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eaque tenetur magni voluptatibus, id voluptates explicabo error nemo nulla aliquid sunt mollitia minus porro quis possimus a illum saepe pariatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, qui, corrupti. Voluptatibus aperiam molestias illum commodi at, eveniet consequuntur deserunt quaerat dolorem dignissimos sed adipisci quia voluptates asperiores est! Labore?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eaque tenetur magni voluptatibus, id voluptates explicabo error nemo nulla aliquid sunt mollitia minus porro quis possimus a illum saepe pariatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, qui, corrupti. Voluptatibus aperiam molestias illum commodi at, eveniet consequuntur deserunt quaerat dolorem dignissimos sed adipisci quia voluptates asperiores est! Labore?</p>
      <figure class="figure figure--inset figure--inset-lge figure--inset-left">
        <img src="http://via.placeholder.com/600x400" alt="">
        <figcaption>test caption</figcaption>
      </figure>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eaque tenetur magni voluptatibus, id voluptates explicabo error nemo nulla aliquid sunt mollitia minus porro quis possimus a illum saepe pariatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, qui, corrupti. Voluptatibus aperiam molestias illum commodi at, eveniet consequuntur deserunt quaerat dolorem dignissimos sed adipisci quia voluptates asperiores est! Labore?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eaque tenetur magni voluptatibus, id voluptates explicabo error nemo nulla aliquid sunt mollitia minus porro quis possimus a illum saepe pariatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, qui, corrupti. Voluptatibus aperiam molestias illum commodi at, eveniet consequuntur deserunt quaerat dolorem dignissimos sed adipisci quia voluptates asperiores est! Labore?</p>
    </div>
  </article>
</template>

<script>
  export default {
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
        type: String,
        default: "John Smith"
      },
      phone: {
        type: String,
        default: "+613 4234 2344"
      },
      email: {
        type: String,
        default: "john.smith@unimelb.edu.au"
      },
      date: {
        type: String,
        default: "03 Apr 2017"
      },
      postType: {
        type: String,
        default: "speech"
      },
    }
  };
</script>

