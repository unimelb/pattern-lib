<template>
  <div>
    <MegaMenuAlt
      :primary-links="primaryLinks"
      :secondary-links="secondaryLinks" />
    <main
      id="main"
      role="main">
      <section-wrap>
        <h1>Main content area</h1>
        <a href="#">Anchor Link</a>
        <p>
          Sit dolor sint occaecat nulla. Excepteur sit excepteur ex laborum adipisicing est in aliquip ex. Velit reprehenderit labore dolore ipsum officia in do do aute commodo enim proident id ut. Exercitation eiusmod excepteur enim tempor anim eiusmod eiusmod ad aute pariatur culpa. Nostrud fugiat adipisicing deserunt ut culpa tempor anim et nulla exercitation.

          Et et est officia non eiusmod tempor dolor. Reprehenderit ipsum ut enim aliquip ipsum id aute ullamco dolor. Minim nulla pariatur Lorem nulla enim incididunt tempor exercitation adipisicing quis officia ex occaecat tempor.

          Non pariatur excepteur cupidatat esse elit elit consequat. Nostrud dolor commodo cupidatat eu sunt velit aute. Deserunt veniam excepteur tempor esse aliquip culpa laborum nulla amet est labore. Eiusmod non cillum non anim duis laborum incididunt cillum. Nisi adipisicing proident cillum adipisicing ipsum quis consectetur.

          Quis magna est enim aute nostrud nulla aliqua magna veniam exercitation culpa laboris do reprehenderit. Voluptate laborum anim laborum laborum elit aute. Aliqua ex commodo officia incididunt aliquip consequat. Exercitation cupidatat cillum minim proident cillum eu ex mollit veniam sit officia eiusmod. Dolor Lorem nulla sit aute ea officia. Commodo est ut ad fugiat quis nostrud.

          Enim sunt duis aute ex mollit nisi exercitation dolore reprehenderit. Occaecat minim ipsum fugiat dolor ut mollit cupidatat excepteur esse minim commodo aliqua. Nisi dolor nulla non excepteur elit dolore excepteur adipisicing commodo nulla est proident commodo sit.

          Aliqua voluptate excepteur excepteur duis aute veniam elit minim qui. Adipisicing sint pariatur reprehenderit officia minim deserunt anim. Dolore dolor elit dolore mollit sunt magna id. Nostrud dolore cupidatat duis voluptate qui ullamco enim et ullamco culpa dolor amet. Proident magna nulla ad Lorem duis excepteur enim esse ex velit dolore laboris. Pariatur aliquip exercitation proident dolore ad pariatur minim excepteur anim aute ipsum irure sunt consectetur.

          Enim duis id amet mollit excepteur amet qui pariatur aliqua mollit. Lorem commodo dolore nostrud eiusmod ipsum do eiusmod deserunt enim do officia. Adipisicing sint exercitation laborum sunt labore consequat aliquip sit cillum duis voluptate. Mollit officia magna ex aliquip qui nulla cillum ad magna magna. Proident qui laborum dolore nostrud reprehenderit esse commodo nostrud occaecat laborum commodo nulla. Deserunt minim eu ut deserunt. Sit commodo aute cillum mollit cillum velit.

          Aliquip velit ipsum cillum ut consequat sunt labore pariatur pariatur deserunt do cillum sit elit. Nulla pariatur pariatur pariatur cupidatat deserunt veniam in cillum quis ut in id adipisicing adipisicing. Consectetur ad et aliquip dolore ad laboris esse minim. Lorem consectetur pariatur exercitation sint culpa irure et labore.

          Proident non sit aliqua commodo est duis ipsum est est Lorem ex proident ad culpa. Ad exercitation deserunt qui cillum occaecat deserunt et laborum ad tempor. Qui tempor aliqua voluptate ex nisi tempor commodo cillum consequat ea cillum. Veniam sit ex anim pariatur occaecat qui adipisicing ex ut qui. Quis est in ad id ex eu enim anim exercitation. Sit dolor consequat exercitation adipisicing eiusmod aute labore mollit consectetur. Cupidatat dolor non nostrud duis eiusmod.

          Deserunt excepteur tempor tempor deserunt magna labore labore. Reprehenderit incididunt id enim ut ex ex. Veniam ea irure esse quis dolor elit amet. Occaecat voluptate aliqua veniam consequat et. Esse culpa in aute in cupidatat ad aliqua incididunt.
        </p>
      </section-wrap>
    </main>
  </div>
</template>

<script>
import MegaMenuAlt from '../MegaMenuAlt.vue';
import MegaMenuAltDocs from './mega-menu-alt.md';

export default {
  components: { MegaMenuAlt },
  readme: { custom: MegaMenuAltDocs, source: true, html: false },
  data() {
    return {
      primaryLinks: [
        { text: 'Home', href: '/home-page' },
        { text: 'Study at Melbourne', href: 'https://study.unimelb.edu.au/' },
        { text: 'Research and innovation', href: 'https://research.unimelb.edu.au/' },
        { text: 'Safety and respect', href: 'https://students.unimelb.edu.au/campus-life/policy-and-conduct/respect-at-the-university' },
        { text: 'Virtual Campus', href: 'https://study.unimelb.edu.au/discover/virtual-tour' },
      ],
      secondaryLinks: [
        { text: 'Current students', href: 'https://students.unimelb.edu.au/' },
        { text: 'Staff', href: 'https://staff.unimelb.edu.au/' },
        { text: 'Library', href: 'https://library.unimelb.edu.au/' },
        { text: 'Alumni', href: 'https://www.unimelb.edu.au/alumni' },
      ],
    };
  },
};
</script>
