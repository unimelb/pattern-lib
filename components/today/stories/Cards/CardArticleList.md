
## Card Article List

The component `CardArticleList` acceps the following props:

| props    	   | type    	|
|------------- |---------	|
| items   	   | Array  	|

#### HTML Template

```html
  <card-article-list
    :items="[
        {
          href: 'https://www.unimelb.edu.au/',
          category: 'COVID-19',
          title: 'What we know about the vaccine rollout',
        },
        {
          href: 'https://www.unimelb.edu.au/',
          category: 'Global partnership',
          title: 'A new quantum computing lab with IBM',
        },
        {
          href: 'https://www.unimelb.edu.au/',
          category: 'Climate futures',
          title: 'Climate conversations: Australia in 2021',
        },
      ]" >
      </card-article-list>
```