<template>
  <div class="section__inner section__inner--short">
    <div class="grid">
      <div class="cell cell--desk-2of3">
        <h2>
          {{title}}
        </h2>
        <p>{{content}}</p>
        <a class="btn btn--lead" href="#"><span class="push-icon">Read More<svg class="push-icon__icon" focusable="false" height="16" role="presentation" width="16"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-right"></use></svg></span></a>
      </div>
      <div class="cell cell--desk-1of3">
        <nav class="menu menu--right">
          <a class="menu__link" href="#" v-for="item in menuLinks">
            <span class="push-icon">
              {{item}}
              <svg class="push-icon__icon" focusable="false" height="16" role="presentation" width="16">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-right" />
              </svg>
            </span>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'QuickLinksMenu',
    props: {
      title: {
        type: String,
        default: "Australia’s leading university"
      },
      content: {
        type: String,
        default: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit inventore consectetur reprehenderit quae iusto veniam laboriosam ducimus. Quae, consequatur minima doloribus, neque beatae, voluptatum saepe perferendis eveniet nihil dolorem voluptate."
      },
      menuLinks: {
        type: Array,
        default: ['Strategy and governance', 'Leadership', 'Working with us', 'News and resources', 'Campus and maps']
      },
      versions: {
        type: Array,
        default: ['menu--alt-a', 'menu--alt-b', 'menu--alt-c', 'menu--alt-d']
      }
    }
  }
</script>
