<template>
  <div>
    <SectionWrap bg-color="white">
      <div class="grid grid--3col">
        <ListItem>
          <InfoPanel
            icon-name="calendar"
            title="When">
            <p>19th May 2018</p>
          </InfoPanel>
        </ListItem>
        <ListItem>
          <InfoPanel
            icon-name="jobs"
            title="Further information">
            <a href="/">
              Melbourne Recital Centre
              <SvgIcon
                name="external"
                aria-label="External icon"
                width="18px"
                height="18px"/>
            </a>
          </InfoPanel>
        </ListItem>
        <ListItem>
          <InfoPanel
            icon-name="location"
            title="Location">
            <p>Type: Concert</p>
            <p>School: Melbourne</p>
            <p>Conservatorium of Music</p>
          </InfoPanel>
        </ListItem>
      </div>
    </SectionWrap>
    <SectionWrap bg-color="inverted">
      <div class="grid grid--2col">
        <ListItem>
          <InfoPanel
            icon-name="calendar"
            title="When">
            <p>19th May 2018</p>
          </InfoPanel>
        </ListItem>
        <ListItem>
          <InfoPanel
            icon-name="jobs"
            title="Further information">
            <a href="/">
              Melbourne Recital Centre
              <SvgIcon
                name="external"
                aria-label="External icon"
                width="18px"
                height="18px"/>
            </a>
          </InfoPanel>
        </ListItem>
        <ListItem>
          <InfoPanel
            icon-name="location"
            title="Location">
            <p>Type: Concert</p>
            <p>School: Melbourne</p>
            <p>Conservatorium of Music</p>
          </InfoPanel>
        </ListItem>
        <ListItem>
          <InfoPanel
            icon-name="location"
            title="Location">
            <p>Type: Concert</p>
            <p>School: Melbourne</p>
            <p>Conservatorium of Music</p>
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
