<template>
  <MegaMenu
    :items="items"
    :top-menu="topMenu"
    :is-modified-menu="true"
    active="/random-link"
    faculty-name="This is a Faculty name"
    faculty-link="/faculty-link"
    faculty-width="20%"
  />
</template>

<script>
import MegaMenu from '../MegaMenu.vue';
import sample from '../sample';

export default {
  components: { MegaMenu },
  data() {
    return {
      items: [
        {
          title: 'Study',
          href: '/',
        },
        {
          title: 'Find a course',
          href: '/find-a-course',
        },
        {
          title: "Why's Melbourne",
          href: '/why-melbourne',
          feature: {
            title: 'Campaign title',
            text:
              'Pariatur veniam occaecat mollit nostrud nostrud commodo aute adipisicing et. Nulla ipsum et eiusmod dolore id adipisicing ea nostrud consequat. Non cillum ullamco dolore fugiat nulla. Et Lorem ex magna enim dolore consectetur sunt consequat. Elit excepteur ipsum sunt laboris eu commodo anim proident occaecat.',
            img: 'https://placeimg.com/360/200/arch',
            link: 'http://google.com',
          },
          items: [
            { title: 'Entry requirements1', href: '/random-link' },
            { title: 'Entry requirements2', href: 'http://www.google.com' },
            { title: 'Entry requirements3', href: 'http://www.google.com' },
            { title: 'Entry requirements4', href: 'http://www.google.com' },
            { title: 'Entry requirements5', href: 'http://www.google.com' },
          ],
        },
        {
          title: 'Admissions',
          href: '/admissions',
          feature: {
            title: 'Different campaign',
            text:
              'Consequat id nostrud nulla et amet dolore proident velit nostrud elit cupidatat ut occaecat. Eiusmod laborum ullamco nisi commodo voluptate ex amet esse exercitation adipisicing in labore dolor. Ut enim incididunt ullamco aliqua consectetur. Anim veniam elit enim ea ex duis. Ad consectetur sunt eu ullamco. Veniam anim labore sint laboris esse. Mollit irure sit non ad ex eu nostrud id laboris ut qui.',
            img: 'https://placeimg.com/360/200/nature',
          },
          items: [
            { title: 'Entry non requirements6', href: 'http://www.google.com' },
            { title: 'Entry non requirements7', href: 'http://www.google.com' },
            {
              title:
                'Entry non requirements8 has a particularly long title for no good reason',
              href: 'http://www.google.com',
            },
            { title: 'Entry non requirements9', href: 'http://www.google.com' },
            {
              title: 'Entry non requirements10',
              href: 'http://www.google.com',
            },
            {
              title: 'Entry non requirements11',
              href: 'http://www.google.com',
            },
            {
              title: 'Entry non requirements12',
              href: 'http://www.google.com',
            },
            {
              title: 'Entry non requirements13',
              href: 'http://www.google.com',
            },
            {
              title: 'Entry non requirements14',
              href: 'http://www.google.com',
            },
            { title: 'Entry non requirements15', href: 'http://www.google.com' },
          ],
        },
        {
          title: 'Student experience',
          href: '/student-experience',
          feature: {
            alt: 'screen reader only',
            text:
              'Commodo ullamco sit voluptate amet mollit et velit et sunt Lorem anim ipsum. Fugiat veniam fugiat voluptate laborum do sit nisi. Aliqua laborum commodo voluptate incididunt ullamco culpa exercitation ea deserunt consectetur occaecat eu. Pariatur esse eu voluptate adipisicing enim id. Aute est ea deserunt cillum ipsum. Exercitation laboris dolore eu laborum nostrud tempor in veniam aliqua dolor. Pariatur voluptate occaecat reprehenderit proident ex voluptate ea aliqua minim.',
            img: 'https://placeimg.com/360/200/nature',
            link: 'http://google.com',
          },
          items: [
            { title: 'Entry requirements21', href: '/2random-link' },
            { title: 'Entry requirements22', href: 'http://2www.google.com' },
            { title: 'Entry requirements23', href: 'http://2www.google.com' },
            { title: 'Entry requirements24', href: 'http://2www.google.com' },
            { title: 'Entry requirements25', href: 'http://2www.google.com' },
          ],
        },
        {
          title: 'Connect',
          href: '/connect',
        },
      ],
      topMenu: sample.topMenu,
    };
  },
};
</script>
