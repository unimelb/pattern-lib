
## Page header home

```html
<page-header-home 
  title="Welcome to The&nbsp;University of&nbsp;Melbourne"
  :img="{ src: placeholder, alt: 'Sciente people doing an experiement' }"
  bg-src="link to the image">
    <pathfinder-today
    slot="after"
    inline
    dark
    :items="[
        {
          title: 'Courses',
          description: 'Find the right course and see what makes studying with us different',
          href: 'https://study.unimelb.edu.au/',
        },
        {
          title: 'Research',
          description: 'Discover world-leading research, resources, experts and facilities',
          href: 'https://research.unimelb.edu.au/',
        },
        {
          title: 'Partnerships',
          description: 'Innovate with our world-class people, technology and facilities',
          href: 'https://research.unimelb.edu.au/work-with-us',
        },
        {
          title: 'Events',
          description: 'Connect with your community through virtual and in-person events',
          href: 'https://events.unimelb.edu.au',
        },
      ]">
    </pathfinder-today>
</page-header-home>
```
