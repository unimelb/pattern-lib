<template>
  <SectionWrap>
    <div class="grid grid--2col">
      <ListItem>
        <CardFeaturesPanel
          thumb="https://randomuser.me/api/portraits/lego/0.jpg"
          aria-label="Provide aria label for the thumb"
          title="A degree with a global impact."
          text="Laborum enim ea commodo esse nisi. Esse consectetur magna ipsum in. Enim sit amet laboris ea occaecat incididunt culpa ea. Nulla minim sit occaecat proident eiusmod quis occaecat eiusmod cillum ullamco incididunt cillum. Sint et proident nulla laboris elit tempor laboris nulla."
          href="#" />
      </ListItem>
      <ListItem>
        <CardFeaturesPanel
          thumb="https://randomuser.me/api/portraits/lego/1.jpg"
          aria-label="Provide aria label for the thumb"
          title="Tailored for apprentices and trainees"
          text="Aliqua anim tempor enim pariatur consequat. Ad tempor dolor occaecat ullamco ea magna reprehenderit. Sint consectetur occaecat anim qui consectetur amet labore pariatur enim fugiat ea."
          href="#" />
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardFeaturesPanel from '../../CardFeaturesPanel.vue';
import featuresPanel from './features-panel.md';

export default {
  components: { CardFeaturesPanel },
  readme: { custom: featuresPanel, source: true, html: true },
};
</script>
