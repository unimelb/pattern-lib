<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--3col">
      <ListItem>
        <CardStaffList
          :cols="3"
          name="Mr John Smith"
          position="Provost"
          thumb="https://randomuser.me/api/portraits/lego/1.jpg"
          href="#"
          phone="+123456789"
          email="emailme@google.com"
          excerpt="Lorem ipsum dolor sit amet, consectetur."
        />
      </ListItem>
      <ListItem>
        <CardStaffList
          :cols="3"
          name="Mr Johnathan Smithersonite"
          position="Provost"
          thumb="https://randomuser.me/api/portraits/lego/2.jpg"
          href="#"
          phone="+123456789"
          excerpt="Lorem ipsum dolor sit amet, consectetur."
        />
      </ListItem>
      <ListItem>
        <CardStaffList
          :cols="3"
          name="Mr John Smith"
          position="Vice Grand Chancellor Provost"
          thumb="https://randomuser.me/api/portraits/lego/5.jpg"
          href="#"
          email="emailme@google.com"
          excerpt="Lorem ipsum dolor sit amet, consectetur."
        />
      </ListItem>
      <ListItem>
        <CardStaffList
          name="Mr John Smith"
          position="Provost"
          thumb="https://randomuser.me/api/portraits/lego/6.jpg"
          href="#"
          excerpt="Lorem ipsum dolor sit amet, consectetur."
        />
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardStaffList from '../../../CardStaffList.vue';

export default {
  components: { CardStaffList },
  readme: { html: true, source: true },
};
</script>
