import { storiesOf } from '@storybook/vue';

import VideoEmbed from './VideoEmbed.vue';
import SoundcloudEmbed from './SoundcloudEmbed.vue';

storiesOf('Embed', module)
  .add('Video - 16/9', () => ({
    components: { VideoEmbed },
    template: '<video-embed src="https://www.youtube.com/embed/nlF7qp5GNPI" />',
  }))
  .add('Video - 21/9', () => ({
    components: { VideoEmbed },
    template: '<video-embed src="https://www.youtube.com/embed/0XuNcBK6aDs" ratio="21_9" />',
  }))
  .add('Video - in section', () => ({
    components: { VideoEmbed },
    template: `
      <section-wrap bgColor="bg-inverted">
        <h3 class="heading-section">Section with video embed</h3>
        <video-embed src="https://www.youtube.com/embed/nlF7qp5GNPI" />
      </section-inverted>
    `,
  }))
  .add('SoundCloud - classic', () => ({
    components: { SoundcloudEmbed },
    template: '<soundcloud-embed src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/290011378&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false" />',
  }))
  .add('SoundCloud - visual', () => ({
    components: { SoundcloudEmbed },
    template: '<soundcloud-embed src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/290011401&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true" mode="visual" />',
  }));
