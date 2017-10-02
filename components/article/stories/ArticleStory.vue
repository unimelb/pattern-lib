<template>
  <article class="article">
    <h1 class="article__header">
      {{title}}
    </h1>
    <div class="article__main">
      <slot />
    </div>
    <footer role="contentinfo" class="article__aside">
      <div class="article__meta">
        <time :datetime="date">{{date}}</time> | <span class="article__type">{{postType}}</span>
      </div>
      <div class="article__contact">
        <dl class="clearfix">
          <dt>Contact :</dt>
          <dd>{{contact}}</dd>
          <dt>Phone :</dt>
          <dd><a :href="`tel: ${phone}`">{{ phone }}</a></dd>
          <dt>Email :</dt>
          <dd><a :href="`mailto: ${email}`">{{ email }}</a></dd>
        </dl>
      </div>
      <div class="article__social">
        <p class="article__social-heading">SHARE</p>
        <ul class="list-social">
          <li class="list-social--twitter"><a href="https://twitter.com/unimelb"><icon name="twitter" width="25" height="25" /></a></li>
          <li class="list-social--facebook"><a href="https://facebook.com/unimelb"><icon name="facebook" width="25" height="25" /></a></li>
          <li class="list-social--linkedin"><a href="https://www.linkedin.com/in/the-university-of-melbourne-21543061"><icon name="linkedin" width="25" height="25" /></a></li>
        </ul>
      </div>
    </footer>
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
      }
    }
  };
</script>

