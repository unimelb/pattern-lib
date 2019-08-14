## Accordion filter

The prop `show-ssr` can be used to show server side code from another source (ie, CMS).  This is useful for SEO purposes.  

Once a user clicks on `Search` the array in the `:data` prop will be used for client-side filtering.

 ### Usage:
```javascript
<accordion-filter 
  :data='[
        "name": "arts",
        "semester": [
            "january",
            "february"
        ],
        "location": [
            "location 1",
            "location 2"
        ],
        "points": "points 1",
        "discipline": "discipline 1",
        "audition": "audition 1",
        "abrod": "abrod 1",
        "overview": "Exercitation quis sunt fugiat aute adipisicing nulla pariatur ad et fugiat commodo mollit proident. Esse reprehenderit duis ea fugiat reprehenderit amet proident. Labore consequat dolore incididunt enim qui aute nulla ad magna occaecat ullamco. Ipsum consequat commodo ut ullamco sunt ea aliqua magna elit ea aliquip id quis ex. Voluptate voluptate mollit eu irure ipsum labore laborum sunt dolor dolore est. Nostrud tempor non duis excepteur nulla excepteur cupidatat excepteur et laborum tempor. Sit est sit exercitation deserunt sint incididunt.",
        "buttonText": "Handbook Link"
    },
    {
        "name": "science",
        "semester": [
            "january"
        ],
        "location": [
            "location 2"
        ],
        "points": "points 2",
        "discipline": "discipline 2",
        "audition": "audition 2",
        "abrod": "abrod 2",
        "overview": "Exercitation quis sunt fugiat aute adipisicing nulla pariatur ad et fugiat commodo mollit proident. Esse reprehenderit duis ea fugiat reprehenderit amet proident. Labore consequat dolore incididunt enim qui aute nulla ad magna occaecat ullamco. Ipsum consequat commodo ut ullamco sunt ea aliqua magna elit ea aliquip id quis ex. Voluptate voluptate mollit eu irure ipsum labore laborum sunt dolor dolore est. Nostrud tempor non duis excepteur nulla excepteur cupidatat excepteur et laborum tempor. Sit est sit exercitation deserunt sint incididunt.",
        "buttonText": "Handbook Link"
    }]'
  show-ssr>
  <div>Server-side code goes here</div>
</accordion-filter>
```