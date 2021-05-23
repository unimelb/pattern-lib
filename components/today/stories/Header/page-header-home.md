
## Page header home

```html
<page-header-home 
  title="Effective Leadership Communication" 
  introduction="Become an authentic, persuasive and engaging communicator to enhance your effectiveness as a leader." 
  :img="{ src: 'link to the image', alt: 'Business leaders at a conference' }" 
  bg-src="link to the image">
    <pathfinder-today
    slot="after"
    inline
    dark
    :items="[
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
            title: 'Short courses and microcredentials',
            description: 'Upskill, expand your knowledge and take the next step in your career with focused courses.',
            href: '/landing-page/',
          },
        ]">
    </pathfinder-today>
</page-header-home>
```
