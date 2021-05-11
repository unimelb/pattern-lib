## PathfinderToday


| props  	| type    	|
|--------	|---------	|
| items  	| array   	|
| inline 	| boolean 	|
| dark   	| boolean 	|

**Note**: Inside of `<pathfinder-today>` component the `items` property is an array of pathfinder with `title`, `description`, and `href`:

```json
pathfinderItems: [
  {
    title: 'Undergraduate courses',
    description: 'Flexible first degrees that you can tailor to your career goals, or explore new possibilities.',
    href: '/landing-page/',
  },
  {
    title: 'Graduate courses',
    description: 'Study in small classes led by experts alongside others who share your interests and goals.',
    href: '/landing-page/',
  },
  {
    title: 'Graduate research',
    description: 'Access dedicated research centres, advanced  facilities, generous scholarships and more.',
    href: '/landing-page/',
  },
  {
    title: 'Short&nbsp;courses&nbsp;and microcredentials',
    description: 'Upskill, expand your knowledge and take the next step in your career with focused courses.',
    href: '/landing-page/',
  },
]
```

```html
<pathfinder-today items="pathfinderItems">
</pathfinder-today>
```