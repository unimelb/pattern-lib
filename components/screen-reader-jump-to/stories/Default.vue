<template>
  <div>
    <ScreenReaderJumpTo
      text="Skip to main content"
      to-element="#main" />
    <MegaMenu
      :items="items"
      :top-menu="topMenu"
      active="/random-link"
      faculty-name="Faculty of Medicine, Dentistry and Health Sciences"
      faculty-link="/faculty-link"
      faculty-width="25.5%" />


    <div>
      <section-wrap bg-color="white">
        <h2>Secondary content</h2>
        <p
          v-for="key in 20"
          :key="key">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint explicabo quibusdam commodi quidem vitae
          quaerat cumque, ex velit facilis. Minus ipsum quidem temporibus doloremque molestias doloribus delectus, nemo
          necessitatibus ut!
        </p>
      </section-wrap>
    </div>

    <main id="main">
      <div>
        <section-wrap bg-color="white">
          <h1>Main content</h1>
          <button
            tabindex="0">
            Button
          </button>
          <p
            v-for="key in 10"
            :key="key">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint explicabo quibusdam commodi quidem vitae
            quaerat cumque, ex velit facilis. Minus ipsum quidem temporibus doloremque molestias doloribus delectus, nemo
            necessitatibus ut!
          </p>
        </section-wrap>
      </div>
    </main>
  </div>
</template>

<script>
import MegaMenu from '../../megamenu/MegaMenu.vue';
import sample from '../../megamenu/sample';
import ScreenReaderJumpTo from '../ScreenReaderJumpTo.vue';
import screenReaderMd from './screenReaderMd.md';

export default {
  readme: { custom: screenReaderMd, html: true, source: true },
  components: {
    MegaMenu,
    ScreenReaderJumpTo,
  },

  data() {
    return {
      items: [
        {
          title: 'Study',
          href: '/',
          feature: {
            alt: 'screen reader only',
            text: 'Study at the Conservatorium celebrates lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: 'https://picsum.photos/id/1040/360/200.jpg',
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
            text: 'Study at the Conservatorium celebrates lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: 'https://picsum.photos/id/1033/360/200.jpg',
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
            text: 'Study at the Conservatorium celebrates lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          items: [
            { title: 'Entry non requirements6', href: 'http://www.google.com' },
            { title: 'Entry non requirements7', href: 'http://www.google.com' },
            {
              title: 'Entry non requirements8 has a particularly long title for no good reason',
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
            text: 'Study at the Conservatorium celebrates lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: 'https://picsum.photos/id/1040/360/200.jpg',
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
