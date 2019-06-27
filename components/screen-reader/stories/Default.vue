<template>
  <div>
    <ScreenReader></ScreenReader>
      <MegaMenu
    :items="items"
    :top-menu="topMenu"
    active="/random-link"
    faculty-name="Faculty of Medicine, Dentistry and Health Sciences"
    faculty-link="/faculty-link"
    faculty-width="25.5%"
  />
  </div>
</template>

<script>
import MegaMenu from '../../page/megamenu/MegaMenu.vue';
import sample from '../../page/megamenu/sample';
import ScreenReader from '../ScreenReader.vue';

  export default {
    components: {
      MegaMenu,
      ScreenReader
    },

      data() {
    return {
      items: [
        {
          title: 'Study',
          href: '/',
          feature: {
            alt: 'screen reader only',
            text:
              'Study at the Conservatorium celebrates lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
          title: 'Find a course',
          href: '/find-a-course',
        },
        {
          title: "Why's Melbourne",
          href: '/why-melbourne',
          feature: {
            title: 'Campaign title',
            text:
              'Study at the Conservatorium celebrates lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
              'Study at the Conservatorium celebrates lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
              'Study at the Conservatorium celebrates lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
  }
</script>
