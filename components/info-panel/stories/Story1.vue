<template>
  <div>
    <SectionWrap bg-color="white">
      <div class="grid grid--3col">
        <ListItem>
          <InfoPanel
            icon-name="calendar"
            title="When"
          >
            <p class="info-panel__text">
              19th May 2018
            </p>
          </InfoPanel>
        </ListItem>
        <ListItem>
          <InfoPanel
            icon-name="jobs"
            title="Further information"
          >
            <a
              href="/"
              target="_blank"
            >
              Melbourne Recital Centre
            </a>
          </InfoPanel>
        </ListItem>
        <ListItem>
          <InfoPanel
            icon-name="location"
            title="Location"
          >
            <p class="info-panel__text">
              Type: Concert
            </p>
            <p class="info-panel__text">
              School: Melbourne
            </p>
            <p class="info-panel__text">
              Conservatorium of Music
            </p>
          </InfoPanel>
        </ListItem>
      </div>
    </SectionWrap>
    <SectionWrap bg-color="inverted">
      <div class="grid grid--2col">
        <ListItem>
          <InfoPanel
            icon-name="calendar"
            title="When"
          >
            <p class="info-panel__text">
              19th May 2018
            </p>
          </InfoPanel>
        </ListItem>
        <ListItem>
          <InfoPanel
            icon-name="jobs"
            title="Further information"
          >
            <a
              href="/"
              target="_blank"
            >
              Melbourne Recital Centre
            </a>
          </InfoPanel>
        </ListItem>
        <ListItem>
          <InfoPanel
            icon-name="location"
            title="Location"
          >
            <p class="info-panel__text">
              Type: Concert
            </p>
            <p class="info-panel__text">
              School: Melbourne
            </p>
            <p class="info-panel__text">
              Conservatorium of Music
            </p>
          </InfoPanel>
        </ListItem>
        <ListItem>
          <InfoPanel
            icon-name="location"
            title="Location"
          >
            <p class="info-panel__text">
              Type: Concert
            </p>
            <p class="info-panel__text">
              School: Melbourne
            </p>
            <p class="info-panel__text">
              Conservatorium of Music
            </p>
          </InfoPanel>
        </ListItem>
      </div>
    </SectionWrap>
  </div>
</template>

<script>
import InfoPanel from '../InfoPanel.vue';
import InfoPanelDocs from './info-panel.md';

export default {
  components: { InfoPanel },
  readme: { custom: InfoPanelDocs, source: true, html: true },
};
</script>
