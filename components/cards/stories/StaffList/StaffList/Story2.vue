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
      <div class="cell">
        <CardStaffList
          :cols="3"
          name="Mr John Smith"
          position="Provost"
          thumb="https://randomuser.me/api/portraits/lego/1.jpg"
          href="#"
          phone="Phone: +123456789"
          email="Email: emailme@google.com"
          excerpt="Lorem ipsum dolor sit Do laborum consectetur irure et mollit minim reprehenderit pariatur ullamco ut sint anim. Eu eu esse nisi pariatur non consequat. Voluptate nulla consectetur labore cillum qui ullamco sunt. Enim ut Lorem culpa dolor magna "
        />
      </div>
      <ListItem>
        <CardStaffList
          :cols="3"
          name="Mr Johnathan Smithersonite"
          position="Provost"
          thumb="https://randomuser.me/api/portraits/lego/2.jpg"
          href="#"
          phone="+123456789"
          excerpt="Lorem ipsum dolor sit amet, consectetur. Quis nostrud cillum velit aute. Duis aliquip ut amet non cupidatat ullamco voluptate dolor. Veniam irure duis sunt duis duis non adipisicing irure est."
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
      <div class="cell">
        <CardStaffList
          :cols="3"
          name="Mr John Smith"
          position="Provost"
          thumb="https://randomuser.me/api/portraits/lego/1.jpg"
          href="#"
          phone="Phone: +123456789"
          email="Email: emailme@google.com"
          excerpt="Lorem ipsum dolor sit Do laborum consectetur irure et mollit minim reprehenderit pariatur ullamco ut sint anim. Eu eu esse nisi pariatur non consequat. Voluptate nulla consectetur labore cillum qui ullamco sunt. Enim ut Lorem culpa dolor magna "
        />
      </div>
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
