<template>
  <section-wrap
    long
    bg-color="alt">
    <AlumniProfiles
      name="Julia Gillard AC"
      title="Alumni Profile"
      thumb="https://randomuser.me/api/portraits/lego/1.jpg"
      text="<p><strong><em>Olympia Nelson is currently completing a Bachelor of Arts, majoring in Art History. </em></strong></p><p>I grew up in an artistic family. I started modelling for Mum, a photographic artist, when I was four or five five years old. During my high schooling, studying French and Italian really opened up the world of history to me, but it wauntil my second year of my Arts degree that I decided to major in Art History.</p>" />
  </section-wrap>
</template>

<script>
import AlumniProfiles from '../alumni-profiles/AlumniProfiles';

export default {
  components: { AlumniProfiles },
  readme: { source: true, html: true },
};
</script>
