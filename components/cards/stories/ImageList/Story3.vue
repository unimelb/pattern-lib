<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--2col">
      <ListItem>
        <CardFocusImageList
          element="div"
          tall
          tight
          class="card--image-focus--col-brand bg-alt"
          img="https://about-us-unimelb.netlify.com/images/working-with-us/careers/ParkvilleBotany.jpg"
          title="Learning and teaching"
        >
          <p>Lorem ipsum dolor sit amet officia eum laboriosam libero, adipisci, ab repellat. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ducimus aperiam qui, numquam deleniti repudiandae quos, mollitia.</p>
          <ul>
            <li>
              Improve the retention and promotion of women and gender minorities in&nbsp;Science, Technology, Engineering, Maths and Medicine (STEMM)&nbsp;
            </li>
            <li>
              Advancing gender equality in academia&nbsp;
            </li>
            <li>
              Addressing the loss of women across the career pipeline&nbsp;
            </li>
            <li>
              Tackling gender pay gaps&nbsp;
            </li>
            <li>
              Removing obstacles faced by women&nbsp;
            </li>
            <li>
              Making sustainable structural and cultural changes to advance gender equality&nbsp;
            </li>
          </ul>
          <p>laudantium autem cupiditate quisquam magnam nobis corporis vitae ipsa aut eligendi iste facilis.</p>
        </CardFocusImageList>
      </ListItem>
      <ListItem>
        <CardFocusImageList
          element="div"
          tall
          tight
          class="card--image-focus--col-brand bg-alt"
          img="https://about-us-unimelb.netlify.com/images/working-with-us/careers/ParkvilleBotany.jpg"
          title="Learning and teaching"
          excerpt="Lorem ipsum dolor sit amet officia eum laboriosam libero, adipisci, ab repellat.">
          <p>Lorem ipsum dolor sit amet officia eum laboriosam libero, adipisci, ab repellat. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ducimus aperiam qui, numquam deleniti repudiandae quos, mollitia.</p>
          <ul>
            <li>
              Improve the retention and promotion of women and gender minorities in&nbsp;Science, Technology, Engineering, Maths and Medicine (STEMM)&nbsp;
            </li>
            <li>
              Advancing gender equality in academia&nbsp;
            </li>
            <li>
              Addressing the loss of women across the career pipeline&nbsp;
            </li>
            <li>
              Tackling gender pay gaps&nbsp;
            </li>
            <li>
              Removing obstacles faced by women&nbsp;
            </li>
            <li>
              Making sustainable structural and cultural changes to advance gender equality&nbsp;
            </li>
          </ul>
          <p>laudantium autem cupiditate quisquam magnam nobis corporis vitae ipsa aut eligendi iste facilis.</p>
        </CardFocusImageList>
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardFocusImageList from '../../CardFocusImageList.vue';
import focusImageDocs from './focus-image-docs.md';

export default {
  components: { CardFocusImageList },
  readme: { custom: focusImageDocs },
};

</script>
