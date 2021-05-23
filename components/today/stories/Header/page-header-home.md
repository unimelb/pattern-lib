
## Page header home

```html
<page-header-home 
  title="Welcome to The University of Melbourne"
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
          href: '/landing-page/',
        },
        {
          title: 'Research',
          description: 'Discover world-leading research, resources, experts and facilities',
          href: '/landing-page/',
        },
        {
          title: 'Partnerships',
          description: 'Innovate with our world-class people, technology and facilities',
          href: '/landing-page/',
        },
        {
          title: 'Events',
          description: 'Connect with your community through virtual and in-person events',
          href: '/landing-page/',
        },
      ]">
    </pathfinder-today>
</page-header-home>
```
