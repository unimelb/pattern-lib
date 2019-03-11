<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--3col">
      <ListItem>
        <CardStaffList
          :cols="3"
          title="Mr John Smith"
          meta="Provost"
          thumb="https://randomuser.me/api/portraits/lego/1.jpg"
          href="#"
          phone="+123456789"
          email="emailme@google.com"
        />
      </ListItem>
      <ListItem>
        <CardStaffList
          :cols="3"
          title="Mr Johnathan Smithersonite"
          meta="Provost"
          thumb="https://randomuser.me/api/portraits/lego/2.jpg"
          href="#"
          phone="+123456789"
        />
      </ListItem>
      <ListItem>
        <CardStaffList
          :cols="3"
          title="Mr John Smith"
          meta="Vice Grand Chancellor Provost"
          thumb="https://randomuser.me/api/portraits/lego/5.jpg"
          href="#"
          email="emailme@google.com"
        />
      </ListItem>
      <ListItem>
        <CardStaffList
          title="Mr John Smith"
          meta="Provost"
          thumb="https://randomuser.me/api/portraits/lego/6.jpg"
          href="#"
        />
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardStaffList from '../../../CardStaffList.vue';

export default {
  components: { CardStaffList },
};

</script>
