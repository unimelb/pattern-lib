## Card Course List

### How this works

The component `Card Course List` receive a prop called `items`

Eg:

```html
<card-course-list items="object"></card-course-list>
```

- Items object structure  example:

```js
[
  {
    title: 'Bachelor of Design',
    category: 'bachelor',
    type: 'bachelor',
    link: 'www.unimelb.edu.au',
  }
]
```

#### Colours for the course types available

The colours for each card is set by the attribute type.

- type: `bachelor`, `degree`, `certificate`, `coursework`, `research`, `major`, `minor`, `phd`, `specialisation`, `interest`, `pathway`, `short-course`, `microcredential`, `honours`.
